# Changelog — WCK We-Check

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v1.0 | 2026-05-29 | 강다현 | 프로젝트 최초 생성 |

---

### 2026-06-01 — scenario-agent 누락 화면 CR 3건 반영 (CR-001 / CR-002 / CR-003)

- 변경 도메인: MAIN, AUTH, CMN(신설), product-spec
- 변경 문서:
  - product-spec.md (v0.2) — 서비스 범위·도메인 구성·핵심 기능·비기능 요건
  - domains/MAIN_main/domain-brief.md (v0.2), feature-list.md (v0.2), screen-list.md (v0.2)
  - domains/AUTH_authentication/screen-list.md (v0.3), domain-brief.md (v0.2)
  - domains/CMN_common/ (신규 도메인 폴더 + domain-brief.md APPROVED, feature-list/screen-list/design-spec/qa-scenarios DRAFT 템플릿)
- 변경 내용:
  - CR-001 (타당·수용): MAIN-001에 발급이력 직접 진입 메뉴 명세화. F-MAIN-003 신규 추가, HIST 후행 의존 추가. 별도 화면(MAIN-005) 신설 대신 MAIN-001 내 진입 요소로 처리.
  - CR-002 (타당·수용): AUTH-014 세션 만료 트리거를 "전 구간" 모호 표현에서 인증 대기 타임아웃 / 입력 타임아웃 / 세션 무효화 3개 조건으로 명세 보강. 유효시간 수치는 AUTH domain-brief 미확정 사항으로 등록.
  - CR-003 (타당·수용): 공통 예외 처리를 위한 CMN(common) 도메인 신설. domain-brief까지 확정(공통 네트워크/서버 오류 CMN-001 범위 정의). 실제 화면 설계는 후속 @planner-agent CMN common → @designer-agent 로 위임.
- 후속 작업:
  - @planner-agent CMN common (CMN 도메인 feature/screen/design-spec 상세화)
  - @designer-agent CMN_common → @ui-reviewer-agent (CMN 화면 + MAIN-001 이력 진입 메뉴 반영 HTML)
  - scenario-agent 재실행 (확정 화면 반영, 누락 화면 목록 close 처리)
