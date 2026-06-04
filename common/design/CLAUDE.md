# CLAUDE.md — 디자인 시스템 일관성을 위한 작업 규칙

> 이 파일은 HTML 화면 작업 시 Claude의 행동 규칙입니다.
> `screens/` 폴더 내 HTML 파일 작업 전 반드시 이 파일을 읽을 것.

---

## 작업 원칙

- **확장성/유연성 검토**: 현재 요구사항을 해결하되, 향후 확장이 막히지 않는 구조를 확인한다.
- **기존 코드 재사용**: 새로 만들기 전에 `projects/[PROJECT]/design/tokens.css`, `projects/[PROJECT]/icons.js` 등 기존 리소스를 먼저 탐색한다.
- **커뮤니케이션**: 항상 **개요(왜, 무엇을) → 상세 구현 계획** 순서로 설명한다.

---

## 작업 프로세스 (필수)

> ⚠️ 추측을 사실처럼 말하지 말 것. 모든 가설은 반드시 검증 후 결론.
>
> ⛔ 코드 작성 전 반드시 4단계까지 완료하고 사용자 승인을 받을 것.

### 1단계: 문제/요청 이해

- 문제 현상을 명확히 기술한다.
- 불분명한 부분이 있으면 사용자에게 질문한다.
- "~일 것 같습니다"가 아니라 **실제 코드를 확인**한다.

### 2단계: 원인 분석 (문제 해결의 경우)

- 가설 수립 → 가설 검증 → 원인 확정
- ❌ "이게 원인입니다" (검증 없이)
- ✅ "가설: ~일 수 있습니다. 검증해보겠습니다." → "확인 결과, ~가 원인입니다"

### 3단계: 해결책 탐색

- 해결 방안 2~3개를 제시하고, 각 방안의 영향 범위를 분석한다.
- 사전 검증이 가능하면 검증한다.

### 4단계: 작업 계획 보고 (코드 작성 전 필수!)

> ⛔ 사용자가 "그냥 빨리 해줘"라고 해도, 이 보고를 먼저 하세요.

```
📋 작업 계획 보고

🔍 문제 상황 (What's wrong?)
어떤 상황에서 어떤 증상이 발생하는지, 왜 이 작업이 필요한지.

🎯 목표 (What we want to achieve)
이 작업이 완료되면 어떤 상태가 되어야 하는지.

🔬 원인 분석 (Why it happens) - 문제 해결의 경우
검증된 원인만 기술. 추측은 "가설"이라고 명시.

📁 변경 예정 파일
| 파일 경로 | 변경 내용 | 비고 |
|-----------|----------|------|

⚡ Before → After
[Before] 현재 상태
[After] 작업 후 기대 상태

🎨 디자인 토큰 사용 계획
- 사용할 CSS 변수: --color-*, --spacing-* 등
- 새로 필요한 토큰: 있으면 명시 (없으면 "없음")

이대로 진행해도 될까요?
```

### 5단계: 작업 실행

- 승인받은 계획대로 진행한다.
- 예상치 못한 상황이 발생하면 **중단 후 보고**한다.

### 6단계: 결과 검증

| # | 확인 항목 | 필수 | 구체적 검증 방법 |
|---|----------|:----:|-----------------|
| 1 | 하드코딩된 색상값 미사용 | ✅ | `#` + 6자리 패턴, `rgb()`, `hsl()` 없는지 확인 |
| 2 | 토큰 외 spacing 미사용 | ✅ | `8px`, `15px` 등 임의 값 없는지 확인 |
| 3 | 모바일 가이드 준수 | ✅ | 최소 360px 반응형, StatusBar(44px) + MainHeader(50px) 포함 |
| 4 | 토큰 파일 연결 | ✅ | `projects/[PROJECT]/design/tokens.css` 경로로 link 태그 사용 |
| 5 | 아이콘 파일 연결 | ✅ | `projects/[PROJECT]/icons.js` 경로로 script 태그 사용 (프로젝트별 아이콘) |

### 7단계: 작업 완료

- 6단계 검증을 전부 통과한 후에만 "완료"를 선언한다.
- 변경 사항 요약을 보고한다.

---

## 디자인 화면 작업 프로세스 (필수)

새 화면을 작업할 때 반드시 아래 순서를 따를 것.

### Step 1 — 토큰 & 가이드 먼저 확인

- `projects/[PROJECT]/design/tokens.css` 의 CSS 변수 목록을 확인하고 재사용한다.
- `projects/[PROJECT]/design/design-guide.md` 의 컴포넌트 규격을 먼저 확인한다.
- 스타일을 직접 하드코딩하지 말고 반드시 `var(--*)` 토큰을 사용한다.

### Step 2 — Layout 페이지 참고

가이드를 찾거나 화면 패턴을 잡을 때 아래 Figma Layout 페이지를 먼저 확인한다.

- **파일:** `ay7l9PKHAUbuw0lnGLBdDt`
- **노드:** `11:227` (Layout 페이지)
- **URL:** https://www.figma.com/design/ay7l9PKHAUbuw0lnGLBdDt/0413-디자인-가이드?node-id=11-227

유사한 화면 패턴이 있으면 그 구조를 참고해서 작업한다.

### Step 3 — Figma 이전 전 최종 체크

HTML 완성 후 Figma로 옮기기 전에 아래를 확인한다.

| 체크 항목 | 확인 방법 |
|----------|----------|
| 토큰 사용 여부 | 하드코딩된 색상·간격 없는지 |
| 모바일 가이드 준수 | 상태바(44px) + 헤더(50px) 포함 여부, 하단 여백 규칙 |
| 화면 크기 | 반응형 — `width: 100%; min-width: 360px` / `height: 100vh` |
| 리소스 경로 | tokens.css 경로가 `../../../design/tokens.css`, icons.js 경로가 `../../../icons.js` 인지 (projects/[PROJECT]/domains/[DOMAIN]/screens/ 구조) |

---

## 디자인 토큰 규칙

### 스타일 값은 반드시 토큰을 통해 사용

```css
/* ❌ 금지: 하드코딩된 값 */
color: #3B82F6;
padding: 12px;
font-size: 14px;

/* ✅ 올바름: 디자인 토큰 사용 */
color: var(--color-primary);
padding: var(--spacing-3);
font-size: var(--text-body-sm-size);
```

---

## ⚠️ 화면 크기 규칙

> 반응형 레이아웃을 기본으로 한다. 360px은 최소 가로 크기 기준이며, 고정 너비가 아니다.

| 항목 | 값 |
|------|----|
| 화면 가로 | `100%` (최소 `360px`) |
| 화면 세로 | `100vh` (디바이스 높이에 맞춤) |
| viewport | `width=device-width, initial-scale=1.0` |
| Figma 프레임 크기 | `360 × 800` (디자인 작업 기준 프레임) |

**금지:**
- `width: 360px` 또는 `width: var(--screen-width)` 를 html/body/.screen에 고정값으로 사용하는 것
- `height: 680px` 또는 `height: var(--screen-height)` 를 html/body/.screen에 고정값으로 사용하는 것
- viewport를 `width=360` 으로 설정하는 것

---

## ⚠️ 페이지 좌우 여백 규칙 (예외 없음)

> 화면 좌우 각 `20px`(`var(--page-margin)`)는 **콘텐츠 진입 금지 영역**이다.
> 텍스트, 아이콘, 버튼, 카드, **border·구분선·배경색** 등 시각 요소를 포함한
> **모든 콘텐츠는 이 여백 안으로 들어가서는 안 된다.**

### 규칙 요약

| 항목 | 좌우 여백 | 허용 여부 |
|------|-----------|----------|
| 텍스트 / 아이콘 | 20px 내부에서 시작·끝 | ✅ 허용 |
| 버튼 / 입력 필드 | 20px 내부 | ✅ 허용 |
| `border-bottom` / `border-top` 구분선 | 20px 내부에서만 | ✅ 허용 |
| `border`·배경이 20px 여백을 가로지름 | — | ❌ 금지 |

### ❌ 금지 패턴 — 리스트 구분선이 여백 침범

```css
/* padding으로 내부 여백만 주면 border-bottom은 0~360px 전체를 가로질러 여백을 침범 */
.list-item {
  padding: 12px var(--page-margin);
  border-bottom: 1px solid var(--color-border-default);
}
```

### ✅ 올바른 패턴 — margin으로 아이템 위치 지정

```css
/* margin으로 아이템 자체를 20px 안쪽에 두면 border도 320px 내에서만 그려짐 */
.list-item {
  padding: 12px 0;
  margin: 0 var(--page-margin);
  border-bottom: 1px solid var(--color-border-default);
}
```

### 점검 체크리스트

- [ ] `border-bottom` / `border-top` 이 있는 요소가 부모 full-width를 상속해 좌우 여백(20px)을 침범하지 않는가
- [ ] 리스트 아이템의 좌우 여백이 `padding` 대신 `margin`으로 처리되어 border가 안쪽에 머무는가
- [ ] `background-color` 블록이 좌우 20px 안쪽에서만 시작·끝나는가
- [ ] `content` 영역에 `padding: 0 var(--page-margin)` 이 적용된 경우, 내부 자식 요소가 추가 margin 없이도 여백을 준수하는가

---

## ⚠️ 콘텐츠 스크롤 & 버튼 고정 규칙 (예외 없음)

> 콘텐츠가 아무리 길어도 **버튼은 항상 하단에 고정**되어야 한다.
> 콘텐츠가 넘치면 **스크롤**로 해결한다. 버튼이 밀려나거나 잘리는 것은 허용하지 않는다.

### 필수 레이아웃 구조

```css
/* 화면 전체 — 반응형, 360px 최소 너비 */
html, body {
  width: 100%;
  min-width: 360px;
  height: 100%;
  overflow: hidden;
}
.screen {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 콘텐츠 영역 — 남은 공간을 차지하며 내용이 넘치면 스크롤 */
.content {
  flex: 1;
  min-height: 0;          /* ← 필수. 없으면 버튼이 밀려남 */
  overflow-y: auto;       /* ← 필수. 콘텐츠 스크롤 */
  padding: 0 var(--page-margin);
  -webkit-overflow-scrolling: touch;
}

/* 하단 버튼 영역 — 절대 줄어들지 않음 */
.bottom {
  flex-shrink: 0;         /* ← 필수. 버튼 영역 고정 */
  padding: 0 var(--page-margin) var(--page-margin); /* 하단 20px 고정 */
}
```

### 구조 검증 체크리스트

- [ ] `.content`에 `flex: 1` + `min-height: 0` + `overflow-y: auto` 모두 있는가
- [ ] `.bottom`에 `flex-shrink: 0` 있는가
- [ ] `.bottom` padding이 `0 var(--page-margin) var(--page-margin)` 인가
- [ ] 버튼 높이 `var(--button-height)` = 50px인가
- [ ] **2버튼 사이 gap `var(--space-md)` = 10px 고정**인가
- [ ] **Input 높이 `var(--input-height)` = 46px 고정**인가
- [ ] 전체 구조: 44(statusbar) + 50(header) + flex:1(content) + 70(bottom area) = 100vh

---

## ⚠️ 컴포넌트 고정값 규칙 (예외 없음)

> 아래 값은 디자인 가이드 기준 고정값이다. 하드코딩 금지, 반드시 토큰 사용.

| 컴포넌트 | 항목 | 값 | 토큰 |
|----------|------|-----|------|
| Button (single) | 너비 | 320px | `var(--component-width)` |
| Button (single/double) | 높이 | 50px | `var(--button-height)` |
| Button (popup) | 높이 | 46px | `var(--button-popup-h)` |
| **팝업 위치** | **좌우** | **좌우 각 35px 여백** | **`left: var(--popup-margin); right: var(--popup-margin)`** |
| **Button 2개 나란히 (double layout)** | **사이 gap** | **10px 고정** | **`var(--space-md)`** |
| **리스트형 버튼 목록 (list layout)** | **항목 사이 gap** | **10px 고정** | **`var(--space-md)`** |
| Button (double) | 각 너비 | 155px | — (flex:1 또는 직접 계산) |
| **Input / Dropdown** | **높이** | **46px 고정** | **`var(--input-height)`** |
| Input / Dropdown | 너비 | 320px | `var(--component-width)` |

```css
/* 2버튼 나란히 — gap 반드시 var(--space-md) = 10px */
.bottom { display: flex; gap: var(--space-md); padding: 0 var(--page-margin) var(--page-margin); }
.btn-left  { flex: 1; height: var(--button-height); }
.btn-right { flex: 1; height: var(--button-height); }

/* 리스트형 버튼 목록 — 항목 간 gap도 반드시 var(--space-md) = 10px */
.btn-list { display: flex; flex-direction: column; gap: var(--space-md); }
.btn-list-item { width: var(--component-width); height: var(--button-height); }

/* Input — 높이 반드시 var(--input-height) = 46px */
.input { height: var(--input-height); border-radius: var(--radius-default); }
```

> **정리:** 버튼 간격은 **배치 방향(가로·세로)에 관계없이 항상 10px(`var(--space-md)`) 고정**이다.

---

## 고객사 커스터마이징 규칙

버튼 컬러·텍스트 등 고객사마다 다를 수 있는 항목은 아래 방식으로 관리한다.

### 컬러 변경 — client CSS 오버라이드

```
projects/WCK_we-check/design/
├── tokens.css              ← 기본 토큰 (수정 금지)
└── clients/
    ├── README.md
    ├── client-template.css ← 복사해서 사용
    └── [고객사코드].css    ← 변경 토큰만 선언
```

HTML 적용 순서:
```html
<link rel="stylesheet" href="../../../design/tokens.css">
<link rel="stylesheet" href="../../../design/clients/[고객사코드].css"> <!-- 뒤에 추가 -->
```

### 텍스트 변경 — 변경 요청 흐름

버튼 라벨·안내 문구 등 내용 변경은 AX System **변경 요청(CR)** 으로 처리한다.

```
변경 요청 작성 → 영향 화면 확인 → design-spec 수정 → HTML 수정 → 검수 → Figma 재업로드
```

---

## HTML 화면 파일 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[화면명]</title>
  <link rel="stylesheet" href="../../../design/tokens.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%; min-width: 360px; height: 100%;
      overflow: hidden;
    }
    .screen {
      width: 100%; height: 100vh;
      display: flex; flex-direction: column;
    }
    /* 콘텐츠: 남은 공간 차지 + 스크롤 */
    .content {
      flex: 1; min-height: 0; overflow-y: auto;
      padding: 0 var(--page-margin);
    }
    /* 하단 버튼: 항상 고정 */
    .bottom {
      flex-shrink: 0;
      padding: 0 var(--page-margin) var(--page-margin);
    }
  </style>
</head>
<body>
  <div class="screen">
    <!-- StatusBar (44px) -->
    <!-- MainHeader (50px) -->
    <div class="content">
      <!-- 화면 내용 — 길어지면 스크롤됨 -->
    </div>
    <div class="bottom">
      <!-- 버튼 — 항상 하단 고정 -->
    </div>
  </div>
  <script src="../../../icons.js"></script>
</body>
</html>
```

---

## 레이아웃 오버플로우 방지 규칙 (필수)

360×680px 고정 프레임에서 요소가 바깥으로 튀어나가는 것을 반드시 방지해야 한다.

### 필수 적용 패턴

```css
/* flex 컨테이너 내부에 flex-shrink: 0 또는 white-space: nowrap 요소가 있을 때 */
.parent-flex-row {
  max-width: 100%;
  overflow: hidden;        /* 자식이 부모를 넘지 못하게 */
}
.flex-1-child {
  min-width: 0;            /* flex:1 아이템이 제대로 수축하도록 */
}
```

### 위험 패턴 체크리스트

| 위험 패턴 | 문제 | 해결 |
|-----------|------|------|
| `flex-shrink: 0` + `white-space: nowrap` | 버튼/텍스트가 부모 너비를 초과 | 부모에 `overflow: hidden`, 형제에 `min-width: 0` |
| `flex: 1` 아이템에 `min-width` 미설정 | flex 아이템이 콘텐츠 크기 이하로 줄어들지 않음 | `min-width: 0` 추가 |
| `position: absolute` 요소에 `right/left` 미제한 | 요소가 360px 밖으로 배치될 수 있음 | 부모에 `overflow: hidden` |
| 가로 방향 `padding` + 고정 너비 자식 | 합산이 360px 초과 | `box-sizing: border-box` 확인, 자식 너비를 `%` 또는 `calc()`로 |

---

## 금지 사항

| 금지 | 이유 | 올바른 대안 |
|------|------|------------|
| 허락 없이 새 파일/컴포넌트 생성 | 프로젝트 구조 임의 변경 방지 | 사용자에게 먼저 제안 후 승인 |
| 기존 아키텍처 임의 변경 | 설계 의도 훼손 방지 | 변경 필요 시 이유와 함께 제안 |
| 디자인 토큰 없이 스타일링 | 디자인 시스템 일관성 파괴 | 항상 `var(--*)` 토큰 사용 |
| flex 컨테이너에서 오버플로우 미방지 | 요소가 360px 프레임 밖으로 튀어나감 | 위 "레이아웃 오버플로우 방지 규칙" 적용 |

---

## 이전 세션 이어받기

1. "완료됐다"는 요약을 그대로 믿지 않는다.
2. 실제 코드 상태를 직접 확인한다 (파일 읽기, 검색으로 검증).
3. 동작 테스트로 검증 후 진행한다.
