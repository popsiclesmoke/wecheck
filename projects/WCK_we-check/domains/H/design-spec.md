# [APPROVED] Design Spec — HIST History

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | WCK |
| 서비스명 | We-Check |
| 도메인 코드 | HIST |
| 도메인명 | history |
| 작성자 | 강다현 (쿠콘 AX TF팀) |
| 작성일 | 2026-06-05 |
| 상태 | APPROVED |

> 기반 문서: `product-spec.md`, `feature-list.md`, `screen-list.md`
> 디자인 토큰: `projects/WCK_we-check/design/tokens.css`
> 공통 디자인 가이드: `common/design/design-guide.md`

---

## 공통 레이아웃 규칙

| 항목 | 값 | 토큰 |
|------|----|------|
| 화면 너비 | `360px` (최소, 반응형) | `var(--screen-width)` |
| 좌우 여백 | `20px` (콘텐츠 진입 금지 영역) | `var(--page-margin)` |
| 주요 컴포넌트 너비 | `100%` (좌우 여백 내부) | `var(--component-width)` |
| 헤더 합산 높이 | `94px` = StatusBar(44px) + MainHeader(50px) | `var(--header-total)` |
| 헤더 이후 첫 콘텐츠 상단 여백 | `30px` | `var(--space-page-top)` |
| 버튼 높이 | `50px` | `var(--button-height)` |
| 리스트/카드 라운드 | `8px` | `var(--radius-default)` |

> 모든 색상·간격은 `tokens.css`의 `var(--*)` 토큰만 사용한다. HEX 직접 사용 금지.
> 리스트 구분선은 `margin: 0 var(--page-margin)`로 처리하여 좌우 여백을 침범하지 않는다.

---

## 화면 설계

---

### HIST-001 발급 이력 목록

**파일명:** `H00.발급이력목록.html`

**진입 조건**
- MAIN-001 발급이력 진입 메뉴 탭 (이력 1건 이상)
- 발급 완료(ISSU/RSLT) 후 이력 보기 연결로 진입 가능

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 상단 | StatusBar + MainHeader (뒤로가기) | 타이틀 "발급 이력". 뒤로가기(arrowBack)는 좌측 |
| 페이지 타이틀 | 제목 | `--font-heading1` / `--color-text-default`. "발급 이력" |
| 본문 | 이력 리스트 (List Item 반복) | 항목 간 구분선 `--color-border-default`. 각 항목 라운드 또는 라인 구분. 항목 좌우 위치는 `margin: 0 var(--page-margin)` |
| 리스트 항목 — 1행 | 증명서명 + 상태 배지 | 증명서명 `--font-heading4` / `--color-text-default`. 상태 배지 `--radius-badge` |
| 리스트 항목 — 2행 | 기관명 | `--font-body2` / `--color-text-org` |
| 리스트 항목 — 3행 | 발급일시 | `--font-body4` / `--color-text-disabled` |
| 상태 배지 컬러 | 발급완료 `--color-primary` / 발급실패 `--color-error` / 처리중 `--color-text-disabled` | 텍스트 라벨 + 배경 |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 리스트 항목 탭 | — | HIST-003 발급 이력 상세 이동 |
| 뒤로가기 탭 | — | 직전 화면(MAIN-001 등) 복귀 |
| 진입 시 | 이력 0건 | HIST-002 이력 없음 상태로 분기 |

---

### HIST-002 발급 이력 목록 — 이력 없음

**파일명:** `H00_1.발급이력목록_이력없음.html`

**진입 조건**
- MAIN-001 발급이력 진입 메뉴 탭, 발급 이력이 0건일 때

**화면 구성**

HIST-001과 동일한 헤더·타이틀 구조. 본문만 빈 상태로 대체.

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 상단 | StatusBar + MainHeader (뒤로가기) | 타이틀 "발급 이력" |
| 페이지 타이틀 | 제목 | `--font-heading1` / `--color-text-default`. "발급 이력" |
| 본문 | Empty State (일러스트 + 안내 문구) | 화면 중앙 정렬. 안내 문구 `--font-body1` / `--color-text-disabled`. 예: "발급한 이력이 없어요" |
| 본문 — 보조 문구 | 안내 설명 | `--font-body2` / `--color-text-placeholder`. 예: "증명서를 발급하면 이곳에서 확인할 수 있어요" |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 뒤로가기 탭 | — | 직전 화면(MAIN-001 등) 복귀 |

---

### HIST-003 발급 이력 상세

**파일명:** `H01.발급이력상세.html`

**진입 조건**
- HIST-001 발급 이력 목록에서 항목 선택 시

**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 상단 | StatusBar + MainHeader (뒤로가기) | 타이틀 "발급 이력 상세". 뒤로가기 좌측 |
| 페이지 타이틀 | 증명서명 + 상태 배지 | 증명서명 `--font-heading1` / `--color-text-default`. 상태 배지 `--radius-badge` (HIST-001 동일 컬러 규칙) |
| 본문 | 상세 정보 카드 (정의 리스트) | 라벨-값 쌍 반복. 라벨 `--font-body2` / `--color-text-disabled`, 값 `--font-body1` / `--color-text-default` |
| 정보 항목 | 증명서명 / 발급 기관 / 발급일시 / 발급 상태 / 발급 정보 | 항목 간 구분선 `--color-border-default`, `margin: 0 var(--page-margin)` |
| 하단 | (없음) | 별도 CTA 없음 — 확인 후 뒤로가기로 종료 |

**액션 및 분기**

| 액션 | 조건 | 결과 |
|------|------|------|
| 뒤로가기 탭 | — | HIST-001 발급 이력 목록 복귀 |

---

## 컴포넌트·토큰 사용 요약

| 컴포넌트 | 사용 토큰 |
|----------|-----------|
| 화면 프레임 | `--screen-width`, `--page-margin`, `--header-total`, `--space-page-top` |
| 제목 텍스트 | `--font-heading1`, `--font-heading4`, `--color-text-default`, `--color-text-org` |
| 본문/설명 텍스트 | `--font-body1`, `--font-body2`, `--font-body4`, `--color-text-disabled`, `--color-text-placeholder` |
| 상태 배지 | `--color-primary` (완료), `--color-error` (실패), `--color-text-disabled` (처리중), `--radius-badge` |
| 리스트 구분선 | `--color-border-default`, `--radius-default` |

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-06-05 | 강다현 | 최초 작성 |
