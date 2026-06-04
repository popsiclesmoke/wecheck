# WeCheck 스페이싱 & 레이아웃 스펙

> WeCheck 모바일 앱의 간격, 레이아웃, 크기, z-index 등 공간 관련 규칙을 정의합니다.  
> 이 파일의 모든 규칙은 **전체 페이지·컴포넌트에 예외 없이 적용**됩니다.

---

## 목차

1. [🔒 레이아웃 기본 규칙 (필수)](#1--레이아웃-기본-규칙-필수)
2. [스페이싱 토큰](#2-스페이싱-토큰)
3. [화면 레이아웃 구조](#3-화면-레이아웃-구조)
4. [컴포넌트별 내부 패딩](#4-컴포넌트별-내부-패딩)
5. [화면 진입 공통 CSS 패턴](#5-화면-진입-공통-css-패턴)
6. [Gap 사용 규칙](#6-gap-사용-규칙)
7. [고정 높이값](#7-고정-높이값)
8. [고정 너비값](#8-고정-너비값)
9. [Border Radius 규칙](#9-border-radius-규칙)
10. [Z-Index 레이어 체계](#10-z-index-레이어-체계)
11. [적용 체크리스트](#11-적용-체크리스트)
12. [변경 이력](#변경-이력)

---

## 1. 🔒 레이아웃 기본 규칙 (필수)

> ⚠️ 아래 두 가지 규칙은 WeCheck의 **가장 기본이 되는 레이아웃 원칙**입니다.  
> 모든 화면, 모든 컴포넌트 제작 시 반드시 지켜야 합니다.

| 규칙 | 값 | 설명 |
|------|----|------|
| **기본 화면 너비 (Min Width)** | `min-width: 360px` | 360px는 최소 너비 기준. 반응형으로 더 넓어질 수 있음 |
| **화면 좌우 여백 (Page Margin)** | `20px` 고정 | 전체 화면의 좌우 여백은 20px 고정 원칙 |
| **주요 컴포넌트 가로 폭** | `width: 100%` | 좌우 padding 20px 안에서 100% 사용 |
| **step-area 하단 여백** | `var(--space-xxl)` = `20px` | step-area는 반드시 하단 padding 20px 포함. 상단 30px / 하단 20px 필수 |

```
┌─────────────────────────────────────┐  360px (화면 전체)
│◄─ 20px ─►│      320px      │◄─ 20px ─►│
│           │  [Button]       │          │  width: 320px
│           │  [Input]        │          │  width: 320px
│           │  [Card]         │          │  width: 320px
│           │  [AddressCard]  │          │  width: 320px
└─────────────────────────────────────┘
```

### ✅ 적용 기준

- **반응형 컨테이너** → `html, body { width: 100%; min-width: 360px; height: 100%; }` / `.screen { width: 100%; height: 100vh; }`
- **좌우 padding 20px** → 헤더, 콘텐츠 영역, 하단 버튼 영역 공통
- **전폭 컴포넌트** → `width: var(--component-width)` = `100%` (Button, Input, Dropdown 등)
- **2버튼 레이아웃** → 각 `flex: 1` + gap 10px (부모 width에 맞게 늘어남)

---

## 2. 스페이싱 토큰

> 간격의 일관성을 위해 아래 토큰을 기준으로 사용합니다.  
> 파일 위치: `design/tokens.css`

```css
/* ── 스페이싱 ── */
--space-xxs:              4px;   /* 최소 간격 */
--space-xs:               6px;   /* 보조 간격 */
--space-sm:               8px;   /* 소형 간격 */
--space-md:              10px;   /* 중형 간격 */
--space-card:            12px;   /* 카드 내부 gap */
--space-lg:              14px;   /* 리스트 로고 ↔ 텍스트 */
--space-step-gap:        15px;   /* step-row ChartIcon ↔ 타이틀 */
--space-xl:              16px;   /* 섹션 내 요소 간격 */
--space-xxl:             20px;   /* 표준 여백 (섹션 간격, step-area gap) */
--space-xxxl:            24px;   /* 큰 섹션 간격 */

/* ── 레이아웃 고정값 ── */
--space-page-top:          30px;   /* 헤더 이후 첫 콘텐츠 상단 여백 */
--space-page-title-bottom: 40px;   /* 화면 타이틀 영역 하단 여백 */
```

### 토큰별 주요 사용처

| 토큰 | 값 | 주요 사용처 |
|------|----|------------|
| `--space-xxs` | 4px | 기관명(소) ↔ 증명서명, 버튼 보조 요소, 섹션 헤더 하단 |
| `--space-xs` | 6px | StatusBar 아이콘 사이, 리스트 줄 간격 |
| `--space-sm` | 8px | 체크박스 ↔ 레이블, 태그 ↔ 텍스트, 카드 내 행 간격 |
| `--space-md` | 10px | 약관 항목 사이, 분할 인풋 간격, 2버튼 사이 gap |
| `--space-card` | 12px | 인증서 선택 카드 내부 gap |
| `--space-lg` | 14px | 리스트 로고 아이콘 ↔ 텍스트 영역 |
| `--space-step-gap` | 15px | step-row ChartIcon ↔ 페이지 타이틀 |
| `--space-xl` | 16px | 폼 섹션 내 필드 간격, 카드 내부 항목 간격 |
| `--space-xxl` | 20px | step-area gap, 섹션 간격, 하단 버튼 패딩 |
| `--space-xxxl` | 24px | 완료 화면 일러스트 ↔ 텍스트, 에러 아이콘 ↔ 텍스트 |
| `--space-page-top` | 30px | 헤더 이후 첫 콘텐츠 상단 여백 (step-area, page-title 공통) |
| `--space-page-title-bottom` | 40px | 화면 타이틀(메인/시작 화면) 하단 여백 |

---

## 3. 화면 레이아웃 구조

### 기본 화면 구조

```
┌──────────────────────────────────────┐  ← 360px
│           [StatusBar]                │  44px  (고정)
│           [MainHeader]               │  50px  (고정)
├──────────────────────────────────────┤  ← 콘텐츠 시작 (top: 94px)
│                                      │
│  ← 20px →  [콘텐츠 영역]  ← 20px →  │  flex: 1 / overflow-y: auto
│                                      │
├──────────────────────────────────────┤
│  ← 20px →  [Button 320px]  ← 20px → │  padding: 20px (하단 고정)
└──────────────────────────────────────┘  ← 780px (폰 프레임 기준)
```

### 주요 레이아웃 수치

| 항목 | 값 | 비고 |
|------|----|------|
| 화면 최소 너비 | 360px | min-width 기준, 반응형으로 확장 |
| 폰 프레임 높이 | 780px | 미리보기 기준 |
| 헤더 합산 높이 | 94px | StatusBar(44) + MainHeader(50) |
| 콘텐츠 좌우 패딩 | 20px | 좌우 동일 (`--page-margin`) |
| 하단 버튼 패딩 | 20px | 좌·하 20px (`--space-xxl`) |
| 첫 콘텐츠 상단 여백 | 30px | `--space-page-top` |
| 화면 타이틀 하단 여백 | 40px | `--space-page-title-bottom` |

### 오버레이 레이어 구조

> 팝업·바텀시트·딤이 포함된 화면의 z-index 원칙.  
> **⚠️ 딤(z:10)은 전체화면(`inset: 0`) 고정. 팝업(z:20)만 딤 위. 나머지 전부 딤 아래.**

```
┌──────────────────────────────┐
│  팝업 / 바텀시트 (z: 20)     │  ← 항상 최상단
├──────────────────────────────┤
│  딤 / 오버레이 (z: 10)       │  ← 전체화면 inset:0 고정
├──────────────────────────────┤
│  나머지 모든 UI              │  ← z-index 별도 지정 없음 (딤에 가려짐)
│  topbar / step-area          │
│  하단 버튼 / 링크 등          │
└──────────────────────────────┘
```

**중첩 오버레이** (2차 팝업·바텀시트):

```
1차 팝업/바텀시트 (z: 20) 위에 → 2차 딤 (z: 30) + 2차 팝업 (z: 40)
```

---

## 4. 컴포넌트별 내부 패딩

| 컴포넌트 | padding | 비고 |
|----------|---------|------|
| `MainHeader` | `0 20px` | 좌우 20px |
| `BottomSheetHeader` | `0 20px` | 좌우 20px |
| `Button` (1btn/2btn) | 없음 | height 50px 고정, 텍스트 중앙 정렬 |
| `Button` (popup) | 없음 | height 46px 고정 |
| `Input` | `0 14px` | 좌우 14px |
| `Dropdown` | `0 36px 0 14px` | 우측 36px (chevron 공간 확보) |
| `AddressCard` | `20px` | 전체 방향 20px |
| `TabButton` 외부 컨테이너 | `0 3px` | 내부 탭 여백 |
| `SectionDivider` | `20px 20px 8px` | 상 20 / 좌우 20 / 하 8 |
| 팝업 본문 | `28px 20px 20px` | 상 28 / 좌우 20 / 하 20 |
| 바텀시트 본문 영역 | `0 20px 10px` | 좌우 20 / 하 10 |
| 리스트 콘텐츠 영역 | `0 20px` | 좌우 20px |
| 리스트 아이템 행 | `11px 0` | 상하 11px |
| `PageHeader` | `20px 20px 0` | 상 20 / 좌우 20 / 하 없음 |
| 화면 타이틀 영역 | `30px 20px 40px` | 상 30 / 좌우 20 / 하 40 |
| 에러 화면 콘텐츠 | `0 20px` | 좌우 20px |
| 하단 버튼 영역 | `0 20px 20px` | 상 없음 / 좌우·하 20 |

---

## 5. 화면 진입 공통 CSS 패턴

> 헤더 바로 아래 첫 콘텐츠 영역의 표준 CSS 패턴입니다.  
> 모든 화면은 아래 세 가지 패턴 중 하나를 따릅니다.

### A. Step-area 패턴 (단계 진행 화면 — C·B 도메인)

> ⚠️ **step-area 하단 padding 20px은 필수입니다.** 생략 금지.  
> 상단 `30px` / 하단 `20px`을 항상 포함해야 합니다.

step-area가 `.screen`의 **직접 자식**인 경우 (`.content` 밖):

```css
.step-area {
  flex-shrink: 0;
  padding: var(--space-page-top) var(--page-margin) var(--space-xxl);
  /* 30px 상단 / 20px 좌우 / 20px 하단 ← 하단 생략 금지 */
  display: flex;
  flex-direction: column;
  gap: var(--space-xxl); /* step-row ↔ step-desc 간격: 20px */
}
.step-row {
  display: flex;
  align-items: center;
  gap: var(--space-step-gap); /* ChartIcon ↔ 타이틀: 15px */
}
.step-desc {
  /* 텍스트 스타일만. padding·margin 없음 */
}
```

step-area가 `.content` **안**에 있는 경우 (좌우 패딩은 content에서 상속):

```css
.content { padding: 0 var(--page-margin); }

.step-area {
  padding: var(--space-page-top) 0 var(--space-xxl);
  /* 30px 상단 / 0 좌우 (content 패딩 사용) / 20px 하단 ← 하단 생략 금지 */
  display: flex;
  flex-direction: column;
  gap: var(--space-xxl);
}
```

### B. Page-title 패턴 (메인·시작 화면 — A 도메인)

```css
.page-title {
  padding: var(--space-page-top) var(--page-margin) var(--space-page-title-bottom);
  /* 30px 상단 / 20px 좌우 / 40px 하단 */
}
```

### C. 에러·완료 화면 패턴 (E 도메인)

```css
.content {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 var(--page-margin);
  gap: var(--space-xxxl); /* 아이콘 ↔ 텍스트: 24px */
}
```

---

## 6. Gap 사용 규칙

> `display: flex` 컨테이너 내 자식 요소 사이 간격. 가능한 한 토큰(var(--space-*))을 사용할 것.

| gap | 사용처 |
|-----|--------|
| gap | 토큰 | 사용처 |
|-----|------|--------|
| `4px` | `--space-xxs` | 기관명(소) ↔ 증명서명, 완료 카드 내부 행 사이 |
| `5px` | — | 전체동의 체크박스 ↔ 필수 빨간 점 |
| `6px` | `--space-xs` | StatusBar 아이콘 사이, 리스트 텍스트 줄 사이 |
| `8px` | `--space-sm` | 체크박스 ↔ 레이블, 태그 ↔ 텍스트, 주소카드 행 사이 |
| `10px` | `--space-md` | 약관 항목 사이, 분할 인풋 사이, 2버튼 사이 |
| `12px` | `--space-card` | 인증서 선택 카드 내부 (서류 선택 화면) |
| `14px` | `--space-lg` | 리스트 로고 아이콘 ↔ 텍스트 블록 |
| `15px` | `--space-step-gap` | step-row ChartIcon ↔ 페이지 타이틀 |
| `16px` | `--space-xl` | 폼 필드 사이, 카드 내부 항목 사이 |
| `20px` | `--space-xxl` | step-area 내부 gap, 인증서 그리드 행 사이, 단계 안내 아이템 사이 |
| `24px` | `--space-xxxl` | 완료 화면 일러스트 ↔ 텍스트, 에러 아이콘 ↔ 텍스트 |

---

## 7. 고정 높이값

| 요소 | 높이 | 비고 |
|------|------|------|
| `StatusBar` | 44px | 상태바 고정 |
| `MainHeader` | 50px | 메인 헤더 고정 |
| 헤더 합산 | 94px | StatusBar + MainHeader |
| `BottomSheetHeader` (default) | 75px | 360px 너비 기준 |
| `BottomSheetHeader` (small) | 70px | 320px 너비 기준 |
| `Button` (1btn / 2btn) | 50px | CTA 버튼 |
| `Button` (popup) | 46px | 팝업 하단 버튼 |
| `Input` / `Dropdown` | 46px | 인풋 및 드롭다운 |
| `TabButton` 외부 | 46px | 세그먼트 컨트롤 전체 |
| `TabButton` 활성 탭 | 40px | 내부 활성 탭 |
| 리스트 아이템 최소 높이 | 62px | 로고 + 텍스트 1줄 기준 |
| 약관 항목 행 | 40~42px | 체크박스 + 텍스트 1줄 |
| 팝업 하단 버튼 | 46px | `PopupButton` |
| 구분선 | 1px | 섹션 / 리스트 구분 |
| 스크롤바 | 30px | height: 30px, width: 4px |
| 노치(Notch) | 28px | 폰 프레임 상단 |

---

## 8. 고정 너비값

| 요소 | 너비 | 비고 |
|------|------|------|
| 화면 전체 | 360px | Target Width |
| 주요 컴포넌트 (1btn, Input 등) | 320px | Page Margin 적용 후 유효 너비 |
| `Button` (double layout) | 155px | 2버튼 각각, gap 10px으로 320px 유지 |
| `TabButton` (2탭) 각 탭 | 155px | — |
| `TabButton` (3탭) 각 탭 | 102px | — |
| `TabButton` (4탭) 각 탭 | 75px | — |
| `Dropdown` (double layout) | 156px | 시도/시군구 2개 나란히 |
| `SplitInput` (전화번호) | 90 / 95 / 95px | 3분할 |
| `SplitInput` (사업자번호) | 90 / 80 / 110px | 3분할 |
| `SplitInput` (주민번호 / 년도) | 150 / 150px | 2분할 |
| `CarrierButton` (통신사) | 77px | 4개 나열 |
| 기관 로고 아이콘 (대) | 40px | 원형 |
| 기관 로고 아이콘 (소) | 32px | 원형 |
| `ChartIcon` | 36px | 원형 진행 차트 |
| `Checkbox` M | 19px | — |
| `Checkbox` S | 16px | — |
| `Radio` | 20px | — |
| 팝업 / 오버레이 팝업 | 290px | 중앙 정렬 |
| `BottomSheetHeader` (default) | 360px | — |
| `BottomSheetHeader` (small) | 320px | — |
| 스크롤바 | 4px | width: 4px |
| 구분선 | 1px | height: 1px |

---

## 9. Border Radius 규칙

| 값 | 사용처 |
|----|--------|
| `3px` | `Checkbox` S |
| `4px` | `Checkbox` M, 태그(도로명/지번), 에러 메시지 배경 |
| `6px` | 에러 시뮬레이션 보조 버튼 |
| `8px` | `Button`, `Input`, `Dropdown`, `AddressCard`, 팝업, 인증서 선택 카드 |
| `15px` | `TabButton` 활성 탭 내부 |
| `18px` | `TabButton` 외부 컨테이너, `BottomSheetHeader` 상단 |
| `40px` | 기관 로고 아이콘 (원형 처리) |
| `50%` | `Radio`, 완료 표시 원, 점(dot) 애니메이션 |
| `"0 0 8px 8px"` | `PopupButton` (하단만 radius) |
| `"18px 18px 0 0"` | `BottomSheetHeader` (상단만 radius) |

---

## 10. Z-Index 레이어 체계

> 팝업·바텀시트·딤이 포함된 모든 화면에서 **예외 없이** 아래 값을 사용합니다.

| z-index | 요소 | 설명 |
|---------|------|------|
| 기본값 | 나머지 모든 UI | topbar·step-area·하단버튼 포함 — 딤에 가려짐 |
| `10` | 딤 / 오버레이 배경 | **전체화면 inset:0 고정.** 팝업·바텀시트 아래 레이어 |
| `20` | 팝업 / 바텀시트 | 화면 위에 뜨는 모든 모달·팝업·바텀시트 |
| `30` | 2차 딤 | 팝업·바텀시트 위에 추가로 띄우는 중첩 딤 |
| `40` | 2차 팝업 / 바텀시트 | 중첩 팝업 (약관 상세 등) |

### 적용 패턴 A — 전체 화면 팝업 (T00 · T01 · T10 · T13 계열)

```css
/* .screen { position: relative; } 필수 */

.dim    { position: absolute; inset: 0;  z-index: 10; background: rgba(0,0,0,0.70); }
.popup  { position: absolute; top: 50%; z-index: 20; /* 팝업 카드 */ }
```

### 적용 패턴 B — 팝업 (T12 · 상단 포함 전체 딤)

> 딤은 전체화면(`inset: 0`). 팝업만 z:20. topbar·step-area 포함 나머지는 별도 z-index 없음.

```css
/* .screen { position: relative; } 필수 */

.dim   { position: absolute; inset: 0;    z-index: 10; background: rgba(0,0,0,0.70); }
.popup { position: absolute; top: Npx;    z-index: 20; }
/* 나머지 요소(topbar, step-area, bottom 등): z-index 지정 없음 → 딤에 가려짐 */
```

### 적용 패턴 C — 바텀시트 (BR01_1 · C11_1 계열)

```css
.overlay      { position: absolute; inset: 0;  z-index: 10; background: rgba(0,0,0,0.70); }
.bottom-sheet { position: absolute; bottom: 0; z-index: 20; border-radius: 18px 18px 0 0; }
```

---

## 11. 적용 체크리스트

> 새 화면 또는 컴포넌트 제작 시 아래 항목을 순서대로 확인하세요.

### 레이아웃

- [ ] 화면 컨테이너 `html, body { width: 100%; min-width: 360px; height: 100%; }` / `.screen { width: 100%; height: 100vh; }`
- [ ] viewport `width=device-width, initial-scale=1.0`
- [ ] 좌우 콘텐츠 패딩 `padding: 0 var(--page-margin)` 적용
- [ ] 전폭 컴포넌트(Button, Input 등) `width: var(--component-width)` 확인
- [ ] 하단 버튼 영역 `padding: 0 var(--page-margin) var(--page-margin)` 적용

### 화면 진입 첫 콘텐츠

- [ ] step-area 패턴 (content 밖): `padding: var(--space-page-top) var(--page-margin) var(--space-xxl)` + `gap: var(--space-xxl)`
- [ ] step-area 패턴 (content 안): `padding: var(--space-page-top) 0 var(--space-xxl)` + `gap: var(--space-xxl)`
- [ ] **step-area 하단 padding `var(--space-xxl)` (20px) 누락 금지** — `padding: top margin 0` 형태 사용 불가
- [ ] step-row: `gap: var(--space-step-gap)` (15px)
- [ ] page-title 패턴: `padding: var(--space-page-top) var(--page-margin) var(--space-page-title-bottom)`
- [ ] step-desc, step-title: 별도 padding·margin 없음 (step-area gap으로 처리)

### 컴포넌트 크기

- [ ] Button 높이 `var(--button-height)` = 50px (popup은 `var(--button-popup-h)` = 46px)
- [ ] Input / Dropdown 높이 `var(--input-height)` = 46px
- [ ] 2버튼 레이아웃: 각 `flex: 1` + `gap: var(--space-md)` = 10px

### 팝업 / 오버레이 레이어

- [ ] `.screen { position: relative; }` 선언 확인
- [ ] **딤 반드시 `inset: 0` (전체화면) — `top: Npx` 등 부분 딤 금지**
- [ ] 딤 `z-index: 10`
- [ ] 팝업 / 바텀시트 `z-index: 20` (딤 위 최상단)
- [ ] **나머지 모든 요소(topbar·step-area·버튼·링크)는 z-index 별도 지정 없음** → 딤에 가려짐
- [ ] 중첩 팝업·바텀시트: 2차 딤 `z-index: 30`, 2차 팝업 `z-index: 40`

### 간격

- [ ] 리스트 아이템 좌우 패딩 `0 20px`
- [ ] 리스트 아이템 행 높이 최소 `62px`
- [ ] 리스트 로고 ↔ 텍스트 `gap: 14px`
- [ ] 폼 필드 사이 `gap: 16px`
- [ ] 섹션 사이 `gap: 20px`

---

## 변경 이력

| 버전 | 날짜 | 내용 |
|------|------|------|
| v1.0 | 2026-05-28 | 최초 작성. 실제 화면 구현 기반 스페이싱 및 레이아웃 규칙 정의 |
| v1.1 | 2026-06-02 | 반응형 전환(360px 고정→최소), 토큰 2개 추가(space-step-gap/space-page-title-bottom), 섹션 5 화면 진입 공통 CSS 패턴 신설, gap 테이블에 토큰명 추가 |
| v1.2 | 2026-06-02 | 섹션 10 z-index 체계 전면 개정 (dim:10/popup:20 표준 확립), 섹션 3 오버레이 레이어 구조 업데이트, 체크리스트 팝업 항목 업데이트. T 도메인 팝업 7개 파일 일괄 수정 |
| v1.3 | 2026-06-02 | step-area 하단 padding 20px 필수 규칙 확립. 섹션 1 테이블 추가, 섹션 5A 경고 주석 추가, 체크리스트 항목 추가. C·B·E·T 도메인 20개 파일 일괄 적용 |
| v1.4 | 2026-06-02 | 딤 전체화면(inset:0) 규칙 확립 — 부분 딤 폐지. 팝업(z:20) → 딤(z:10) → 나머지 전부(z-index 없음). z-index 테이블 단순화(z:5·z:15 제거). 섹션 3·10·11 개정. T12 수정 |
