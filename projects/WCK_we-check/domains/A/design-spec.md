# [APPROVED] Design Spec — MAIN Main

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | WCK |
| 서비스명 | We-Check |
| 도메인 코드 | MAIN |
| 도메인명 | main |
| 작성자 | 강다현 (쿠콘 AX TF팀) |
| 작성일 | 2026-05-29 |
| 상태 | APPROVED |

> 기반 문서: `product-spec.md`, `feature-list.md`, `screen-list.md`
> 디자인 가이드: `projects/WCK_we-check/design/design-guide.md`

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
- `MainHeader status="default"` (360×50px) — 로고만 (MAIN은 뒤로가기 없음)
- `Button layout="popup"` (290px, 46px) — 팝업 하단 확인 버튼
- `OverlayPopup` (290px 중앙, z-index: 20) — 공지팝업

**Z-Index 레이어**

| z-index | 요소 |
|---------|------|
| 1 | 딤 배경 (`top: 94px`부터) |
| 2 | `StatusBar` + `MainHeader` |
| 20 | 오버레이 팝업 (`OverlayPopup`) |

---

## 화면 설계

---

### MAIN-001 위체크 메인

**파일명:** `A00.위체크메인.html`

**진입 조건**
- 앱 최초 진입
- 공지 없으면 바로 메인 표시, 공지 있으면 팝업(MAIN-002~004) 우선 노출

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 상단 | `StatusBar` | 360×44px |
| 헤더 | `MainHeader` | 뒤로가기(arrowBack) + WeCheck 로고 + 닫기(X) |
| 본문 | 안내 타이틀 | "쿠콘에서 / 중소기업청년자금대출을 위한 / 증명서 조회를 진행합니다" — 위탁기관명·목적 blue 강조 (`display1` 22px) |
| 본문 | 구분선 + 조회 대상 기관 리스트 | 각 기관: 로고 + 기관명 + 증명서명. 증명서 다수 기관은 chevron 드롭다운으로 상세 증명서 펼침(예: 대법원 "가족관계증명서 외 4건") |
| 하단 | `Button layout="single" variant="primary"` | "시작하기" (320×50px), `padding: 0 20px 20px` |

> ※ v0.2 갱신: 실제 화면은 "브랜드 일러스트 + 보조설명" 대신 **위탁기관 안내 타이틀 + 조회 대상 기관/증명서 리스트(드롭다운)** 로 구현되어 있다(서비스 FLOW의 "증명서 목록 안내"에 해당). 헤더도 로고만이 아니라 뒤로가기·닫기를 포함. 화면 기준으로 정정.

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 앱 진입 | 공지 있음 | MAIN-002~004 팝업 노출 |
| 앱 진입 | 공지 없음 | 메인 화면 표시 |
| 증명서 다수 기관 행 탭 | — | chevron 드롭다운 펼침/접힘 (상세 증명서 목록) |
| "시작하기" 탭 | — | TERM-001 약관 동의로 이동 |

**오류 처리**

| 케이스 | 처리 |
|--------|------|
| 공지 조회 실패 | 팝업 생략, 메인 정상 노출 |

---

### MAIN-002 공지팝업 (1개)

**파일명:** `T13.위체크메인_공지팝업_1개.html`

**진입 조건**
- MAIN-001 진입 시 공지 1건·내용 짧을 때 자동 노출 (오버레이)

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 배경 | 딤 (z-index: 1) | `top: 94px`부터, `rgba(0,0,0,0.45)` |
| 헤더 고정 | `StatusBar` + `MainHeader` | z-index: 2, 딤 위 항상 노출 |
| 팝업 | `OverlayPopup` 290px 중앙 | radius 8px, z-index: 20 |
| 팝업-제목 | `heading4` (15px) | 공지 제목 |
| 팝업-내용 | `body2` (14px) | 공지 본문 |
| 팝업-버튼 | `Button layout="popup" variant="primary"` | "확인" (290px×46px, 하단 radius 8px) |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| "확인" 탭 | — | 팝업 닫힘, MAIN-001 메인 표시 |

---

### MAIN-003 공지팝업 (스크롤)

**파일명:** `T13_1.위체크메인_공지팝업_스크롤.html`

**진입 조건**
- MAIN-001 진입 시 공지 1건·내용이 길 때 자동 노출

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 배경 | 딤 (z-index: 1) | MAIN-002와 동일 |
| 헤더 고정 | `StatusBar` + `MainHeader` | z-index: 2 |
| 팝업 | `OverlayPopup` 290px 중앙 | 고정 높이, z-index: 20 |
| 팝업-제목 | `heading4` (15px) 고정 | 스크롤 밖 상단 고정 |
| 팝업-내용 | `body2` (14px) 스크롤 영역 | `overflow-y: auto`, 스크롤바 4px |
| 팝업-버튼 | `Button layout="popup" variant="primary"` | 하단 고정 "확인" |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 내용 스크롤 | — | 팝업 내 콘텐츠 스크롤 |
| "확인" 탭 | — | 팝업 닫힘 |

---

### MAIN-004 공지팝업 (2개 이상)

**파일명:** `T13_2.위체크메인_공지팝업_2개이상.html`

**진입 조건**
- MAIN-001 진입 시 공지 2건 이상일 때 자동 노출

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 배경 | 딤 (z-index: 1) | MAIN-002와 동일 |
| 헤더 고정 | `StatusBar` + `MainHeader` | z-index: 2 |
| 팝업 | `OverlayPopup` 290px 중앙 | z-index: 20 |
| 팝업-콘텐츠 | swipe 슬라이드 (`scroll-snap-type: x mandatory`) | 공지 항목별 슬라이드, 제목 `heading4` + 내용 `body2` |
| 페이지 인디케이터 | dot 4px 원형 | 활성: `primary(#2B5AFE)`, 비활성: `border-default(#E5E8ED)`, gap 4px |
| 팝업-버튼 | `Button layout="popup" variant="primary"` | "확인" (290px×46px) |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 좌우 swipe | — | 슬라이드 전환, dot 인디케이터 업데이트 |
| "확인" 탭 | — | 팝업 닫힘 |

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-05-29 | 강다현 | AUTH 도메인 분리로 신규 작성. 공통 레이아웃 규칙 AUTH와 동일 적용 |
| v0.2 | 2026-06-08 | AI (화면-문서 정합) | MAIN-001을 실제 화면 기준으로 갱신(일러스트+설명 → 안내 타이틀 + 조회 대상 기관/증명서 리스트, 헤더 뒤로가기·닫기 포함). ※ 강다현 님 재확인 권장 |
