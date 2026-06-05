# Changelog — WCK We-Check

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v1.0 | 2026-05-29 | 강다현 | 프로젝트 최초 생성 |
| v1.1 | 2026-06-01 | 강다현 | scenario-agent CR 3건 반영 (CMN 도메인 신설) |
| v1.2 | 2026-06-04 | 강다현 | 전 도메인 QA 결함 수정 완료, 시나리오 도출 |
| v1.3 | 2026-06-05 | 강다현 | 디자인 시스템 정비, B11 재작성, E 도메인 토큰 교체, HIST 삭제 |

---

## v1.3 — 2026-06-05

### 디자인 시스템 정비

- **`design/tokens.css`** — `--client-blue`, `--client-blue-light`, `--weight-bold`, `--color-scrollbar` 신규 추가. 각 HTML의 로컬 `:root` 블록 제거 후 중앙 토큰으로 통일
- **`design/design-guide.md`** 최초 작성 — 17개 공통 컴포넌트 패턴(Overlay Dim, Popup 1·2버튼, Bottom Sheet, Step Indicator, Card List, Input Group, Search Input, Loading Dots, Button, Status Badge, Error Area, Illust Image, Section, Verify Box, Certificate Card) CSS + HTML 구조 문서화
- **전 도메인 `design-spec.md`** 디자인 가이드 참조 경로 `references/wecheck-components_3.md` → `projects/WCK_we-check/design/design-guide.md` 일괄 수정

### 화면 수정

- **B11 변경확인** — Figma 기준 독립 확인 화면으로 전면 재작성 (기존 팝업 오버레이 구조 제거). 헤더 `arrowBack` 아이콘명 오류 수정 (`back` → `arrowBack`). 본문 계좌 비교 영역 `chevronDouble` 아이콘 적용
- **A02 약관동의** — `all-label` + 레드닷 간격 5px, 레드닷 상단 정렬 수정
- **T13 공지팝업 3종** — 닫기버튼 색상·하단 고정·min-height 적용, 스크롤 영역 레이아웃 정비, `--color-scrollbar` 토큰 적용
- **A00, E08** — divider 색상 토큰 적용, cert-list 여백 보정
- **E 도메인 16개 파일** — CSS 하드코딩 색상(`#222222`, `#ff4949`, `#ffffff` 등) 및 폰트값 전체 `var(--*)` 토큰으로 교체
- **C 도메인 3개 파일** — `step-desc` 줄바꿈 `<br>` 태그 누락 수정 (C10, C10_2, C40_음성듣기)

### 문서

- **`scenario-list.md`** — 미등록 HTML 9건 Screen ID 추가 (TERM-005, AUTH-015~022). 총 67개(물리 61개)로 갱신
- **시나리오 뷰어** — 도메인 탭 추가 (A/B/BR/C/E/T/Z)

### 도메인 삭제

- **HIST 도메인(H) 전체 삭제** — domain-brief, feature-list, screen-list, design-spec, qa-scenarios, HTML 3종(H00/H00_1/H01) 제거
- **`scenario-list.md`** — HIST 관련 항목(HIST-001~003, SCN-WCK-008/009) 제거, 총 64개(물리 58개)로 갱신. 상태 `DRAFT` → `APPROVED`

---

## v1.2 — 2026-06-04

### QA 결함 수정

- **E/B/T/BR 도메인** — QA 검수 결함 수정 (버튼 상태, 레이아웃, 색상 등)
- **Z 도메인** — 바텀시트 헤더 WeCheck 로고 중앙 정렬, 뒤로가기 버튼 제거, X 아이콘 오른쪽 고정, Z12/Z13 dim 추가
- **T 도메인** — searchbar 하단 border 색상 적용, T23 badge 사이즈·radius 수정
- **C12_3** — 알림 미수신 링크 색상 `primary` 적용
- **BR01_1** — 갤러리 선택 항목 원래 2개 구조로 복원 (revert)

### 문서

- **`scenario-list.md`** v0.2~0.3 작성 (scenario-agent) — 17개 시나리오 도출, 누락 화면 4건·고아 화면 15건 식별. AUTH-010 파일명 불일치 수정, ISSU-005 기획 외 항목 제거

### 기타

- `domains/` 루트 빈 템플릿 파일 5개 삭제
- 전체 프로젝트 클린 업로드

---

## v1.1 — 2026-06-01

### scenario-agent CR 3건 반영

- **CR-001** — MAIN-001에 발급이력 직접 진입 메뉴 명세화. F-MAIN-003 신규 추가
- **CR-002** — AUTH-014 세션 만료 트리거 조건 3개로 명세 보강 (인증 대기 타임아웃 / 입력 타임아웃 / 세션 무효화)
- **CR-003** — 공통 예외 처리 CMN(common) 도메인 신설. domain-brief 확정, 하위 문서 @planner-agent 위임

### 변경 문서

- `product-spec.md` v0.2 — 서비스 범위·도메인 구성·핵심 기능·비기능 요건 반영
- `domains/A/domain-brief.md`, `feature-list.md`, `screen-list.md` v0.2
- `domains/C/screen-list.md` v0.3, `domain-brief.md` v0.2
- `domains/T/` 신규 도메인 폴더 생성 및 domain-brief.md APPROVED

---

## v1.0 — 2026-05-29

- 프로젝트 최초 생성
- 도메인 7개 (MAIN·TERM·AUTH·SRCH·ISSU·RSLT·CMN) Phase 1 문서(domain-brief / feature-list / screen-list / design-spec) 작성 및 APPROVED
- 전 도메인 HTML 화면 초안 제작
- QA 시나리오 작성
