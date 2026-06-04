# [APPROVED] Design Spec — TERM Terms

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | WCK |
| 서비스명 | We-Check |
| 도메인 코드 | TERM |
| 도메인명 | terms |
| 작성자 | 강다현 (쿠콘 AX TF팀) |
| 작성일 | 2026-05-29 |
| 상태 | APPROVED |

> 기반 문서: `product-spec.md`, `feature-list.md`, `screen-list.md`
> 디자인 가이드: `references/wecheck-components_3.md`, `references/wecheck-spacing-spec.md`

---

## 공통 레이아웃 규칙

> 모든 화면에 예외 없이 적용한다. (출처: `wecheck-spacing-spec.md`)

| 항목 | 값 |
|------|----|
| 화면 너비 | `360px` 고정 (`var(--screen-width)`) |
| 좌우 여백 (Page Margin) | `20px` 고정 (`var(--page-margin)`) |
| 주요 컴포넌트 너비 | `320px` (Button / Input / Dropdown 등, `var(--component-width)`) |
| 헤더 합산 높이 | `94px` = `StatusBar`(44px) + `MainHeader`(50px) |
| 콘텐츠 영역 | `flex: 1`, `min-height: 0`, `overflow-y: auto`, `padding: 0 20px` |
| 하단 버튼 영역 | `padding: 0 20px 20px` — **하단 20px 고정 필수** |
| 버튼 사이 gap | `10px` 고정 (`var(--space-md)`) — 2버튼 나란히·리스트형 모두 동일 |
| Input / Dropdown 높이 | `46px` 고정 (`var(--input-height)`) |
| 폰 프레임 높이 | `680px` (`var(--screen-height)`) |

> ⚠️ **필수 구조 — 콘텐츠 스크롤 & 버튼 고정**
> `.content { flex: 1; min-height: 0; overflow-y: auto; }` — 콘텐츠가 길면 스크롤
> `.bottom { flex-shrink: 0; padding: 0 var(--page-margin) var(--page-margin); }` — 버튼은 항상 하단 고정

**공통 컴포넌트**
- `StatusBar` (360×44px) — 모든 화면 상단
- `MainHeader status="back"` (360×50px) — 뒤로가기 포함
- `BottomSheetHeader size="default"` (360×75px, radius 상단 18px) — 약관 상세 헤더
- `Checkbox size="M"` (19×19px) — 전체동의
- `Checkbox size="S"` (16×16px) — 개별 약관 항목
- `Button layout="single" variant="primary | disabled"` (320×50px)

**Z-Index 레이어**

| z-index | 요소 |
|---------|------|
| 1 | 딤 배경 (`top: 94px`부터) |
| 2 | `StatusBar` + `MainHeader` |
| 3 | 바텀시트 (약관 상세) |

---

## 화면 설계

---

### TERM-001 약관 동의

**파일명:** `A02.위체크메인_약관동의.html`

**진입 조건**
- MAIN-001~004에서 "시작하기" 또는 공지 확인 후 진입

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 상단 | `StatusBar` | 360×44px |
| 헤더 | `MainHeader status="back"` | 뒤로가기 + 로고 |
| 본문 | 화면 타이틀 | "약관에 동의해주세요" (`display1` 22px), `padding: 30px 20px 40px` |
| 본문 | `Checkbox size="M"` + "전체 동의" 레이블 + 구분선 | 전체동의 행, gap 8px |
| 본문 | 개별 약관 항목 × 3 | `Checkbox size="S"` + [필수] 빨간 점 + 약관명 + chevron. 행 높이 40~42px |
| 하단 | `Button layout="single"` | 미동의 시 `disabled`, 필수 전체 동의 시 `primary` "동의하고 계속하기" |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 전체동의 체크 | — | 모든 항목 일괄 체크, 버튼 `primary` 전환 |
| 개별 항목 체크 | 필수 전체 체크됨 | 버튼 `disabled → primary` 전환 |
| chevron 탭 | — | 해당 약관 상세(TERM-002~004) 바텀시트 노출 |
| "동의하고 계속하기" 탭 | 필수 동의 완료 | AUTH-001 인증방식선택으로 이동 |

**오류 처리**

| 케이스 | 처리 |
|--------|------|
| 필수 미동의 상태에서 버튼 탭 | 버튼 `disabled` 상태 유지 (탭 불가) |

---

### TERM-002 서비스 이용약관 상세

**파일명:** `Z10.서비스이용약관.html`

**진입 조건**
- TERM-001에서 "서비스 이용약관" 항목 chevron 탭 시 바텀시트로 진입

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 배경 | 딤 (z-index: 1) | `top: 94px`부터 |
| 헤더 고정 | `StatusBar` + `MainHeader` | z-index: 2 |
| 바텀시트 | z-index: 3, 상단 radius 18px | 전체 화면 높이 채움 |
| 시트 헤더 | `BottomSheetHeader` 75px | "서비스 이용약관" 타이틀 + X 닫기 |
| 시트 본문 | 약관 전문 텍스트 | `overflow-y: auto`, 스크롤바 4px, `body2`(14px) |
| 시트 하단 | `Button layout="single" variant="primary"` | "동의" 또는 "확인" (320×50px), `padding: 0 20px 20px` |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| X 닫기 탭 | — | 바텀시트 닫힘, TERM-001 복귀 |
| "동의" 탭 | — | 해당 항목 자동 체크, TERM-001 복귀 |

---

### TERM-003 개인(신용)정보 수집·이용 동의 상세

**파일명:** `Z12.개인(신용)정보수집및이용동의.html`

**진입 조건**
- TERM-001에서 "개인(신용)정보 수집·이용 동의" chevron 탭

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 구조 | TERM-002와 동일 | 바텀시트, 딤, 헤더 고정 |
| 시트 헤더 | `BottomSheetHeader` | "개인(신용)정보 수집·이용 동의" |
| 시트 본문 | 수집 항목·이용 목적·보유 기간 표 + 안내문 | `border: 1px solid var(--color-border-default)` 테이블 |
| 시트 하단 | `Button layout="single" variant="primary"` | "동의" (320×50px) |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| X 닫기 탭 | — | 바텀시트 닫힘 |
| "동의" 탭 | — | 해당 항목 체크, TERM-001 복귀 |

---

### TERM-004 개인(신용)정보 제3자 제공 동의 상세

**파일명:** `Z13.개인(신용)정보3자제공동의.html`

**진입 조건**
- TERM-001에서 "개인(신용)정보 제3자 제공 동의" chevron 탭

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 구조 | TERM-002~003과 동일 | 바텀시트 구조 |
| 시트 헤더 | `BottomSheetHeader` | "개인(신용)정보 제3자 제공 동의" |
| 시트 본문 | 제공받는 자·제공 항목·이용 목적·보유 기간 표 | TERM-003과 동일 표 형식 |
| 시트 하단 | `Button layout="single" variant="primary"` | "동의" (320×50px) |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| X 닫기 탭 | — | 바텀시트 닫힘 |
| "동의" 탭 | — | 해당 항목 체크, TERM-001 복귀 |

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-05-29 | 강다현 | AUTH 도메인 분리로 신규 작성. 공통 레이아웃 규칙 AUTH와 동일 적용 |
