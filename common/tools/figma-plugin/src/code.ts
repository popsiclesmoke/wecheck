// Pretendard Font Converter
// 선택 영역(또는 현재 페이지)의 모든 텍스트를 Pretendard로 일괄 변환
// 기존 font-weight를 유지하여 Pretendard의 대응 variant로 매핑

// 기존 폰트 style 이름 → numeric weight 변환
const STYLE_TO_WEIGHT: Record<string, number> = {
    // 100
    'thin': 100,
    // 200
    'extralight': 200, 'extra light': 200, 'ultralight': 200, 'ultra light': 200,
    // 300
    'light': 300,
    // 400
    'regular': 400, 'normal': 400, 'roman': 400, 'text': 400, 'book': 400,
    // 500
    'medium': 500,
    // 600
    'semibold': 600, 'semi bold': 600, 'demibold': 600, 'demi bold': 600,
    // 700
    'bold': 700,
    // 800
    'extrabold': 800, 'extra bold': 800, 'ultrabold': 800, 'ultra bold': 800,
    // 900
    'black': 900, 'heavy': 900,
}

// numeric weight → Pretendard style 이름
const WEIGHT_TO_PRETENDARD: Record<number, string> = {
    100: 'Thin',
    200: 'ExtraLight',
    300: 'Light',
    400: 'Regular',
    500: 'Medium',
    600: 'SemiBold',
    700: 'Bold',
    800: 'ExtraBold',
    900: 'Black',
}

// 어떤 style 이름이든 Pretendard style 이름으로 변환
function toPretendardStyle(style: string): string {
    // italic / oblique 제거 후 정규화
    const normalized = style.toLowerCase().replace(/\s*(italic|oblique)\s*/g, '').trim()
    const weight = STYLE_TO_WEIGHT[normalized] ?? 400
    // 가장 가까운 Pretendard weight 찾기
    const weights = Object.keys(WEIGHT_TO_PRETENDARD).map(Number)
    const closest = weights.reduce((a, b) => Math.abs(b - weight) < Math.abs(a - weight) ? b : a)
    return WEIGHT_TO_PRETENDARD[closest]
}

// 재귀적으로 TextNode 수집
function collectTextNodes(node: BaseNode): TextNode[] {
    if (node.type === 'TEXT') return [node as TextNode]
    if (!('children' in node)) return []
    const results: TextNode[] = []
    for (const child of (node as ChildrenMixin).children) {
        results.push(...collectTextNodes(child))
    }
    return results
}

figma.showUI(__html__, { width: 320, height: 220 })

figma.ui.onmessage = async (msg: { type: string }) => {
    if (msg.type !== 'convert-fonts') return

    // 선택 노드가 있으면 해당 범위, 없으면 현재 페이지 전체
    const roots: readonly BaseNode[] =
        figma.currentPage.selection.length > 0
            ? figma.currentPage.selection
            : figma.currentPage.children

    const textNodes: TextNode[] = []
    for (const root of roots) {
        textNodes.push(...collectTextNodes(root))
    }

    let fixedCount = 0
    const errors: string[] = []

    for (const node of textNodes) {
        try {
            if (node.fontName === figma.mixed) {
                // Mixed 폰트: 동일 폰트 구간을 묶어서 처리
                const len = node.characters.length
                let i = 0
                while (i < len) {
                    const rangeFont = node.getRangeFontName(i, i + 1) as FontName
                    // 동일 폰트+스타일 구간 끝 탐색
                    let j = i + 1
                    while (j < len) {
                        const nextFont = node.getRangeFontName(j, j + 1) as FontName
                        if (
                            nextFont.family !== rangeFont.family ||
                            nextFont.style !== rangeFont.style
                        ) break
                        j++
                    }
                    const pretendardStyle = toPretendardStyle(rangeFont.style)
                    await figma.loadFontAsync({ family: 'Pretendard', style: pretendardStyle })
                    node.setRangeFontName(i, j, { family: 'Pretendard', style: pretendardStyle })
                    fixedCount++
                    i = j
                }
            } else {
                const fontName = node.fontName as FontName
                const pretendardStyle = toPretendardStyle(fontName.style)
                await figma.loadFontAsync({ family: 'Pretendard', style: pretendardStyle })
                node.fontName = { family: 'Pretendard', style: pretendardStyle }
                fixedCount++
            }
        } catch (e) {
            errors.push(`"${node.name}": ${String(e)}`)
        }
    }

    figma.ui.postMessage({
        type: 'result',
        fixedCount,
        totalScanned: textNodes.length,
        errors,
    })
}
