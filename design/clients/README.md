# 고객사별 토큰 오버라이드

각 고객사 CSS 파일은 `tokens.css`의 기본값을 덮어씁니다.
변경이 필요한 토큰만 선언하면 됩니다.

## 파일 네이밍 규칙
`[고객사코드].css` — 예: `coocon.css`, `shinhan.css`

## HTML 적용 방법
```html
<link rel="stylesheet" href="../../../design/tokens.css">
<link rel="stylesheet" href="../../../design/clients/[고객사코드].css">
```

## 오버라이드 가능 항목
| 항목 | 토큰 | 기본값 |
|------|------|--------|
| 브랜드 Primary 컬러 | `--color-primary` | `#2B5AFE` |
| 에러 컬러 | `--color-error` | `#FF4949` |
| 기본 텍스트 | `--color-text-default` | `#222222` |
| 버튼 텍스트(흰색) | `--color-text-white` | `#FFFFFF` |
| 비활성 배경 | `--color-bg-disabled` | `#EAEDF1` |
| 비활성 텍스트 | `--color-text-placeholder` | `#B1B7C0` |
