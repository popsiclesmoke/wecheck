---
name: domain-pipeline
description: domain-brief.md가 APPROVED된 도메인에 대해 planner-agent → designer-agent → ui-reviewer-agent를 순차 자동 실행한다. 기획부터 HTML 화면 검수까지 한번에 진행하고 싶을 때 사용한다.
---

# /domain-pipeline

`domain-brief.md` 가 APPROVED된 도메인을 기획(Phase 1)부터 HTML 화면 제작 및 검수까지 한번에 진행한다.

에이전트를 수동으로 이어 호출할 필요 없이, 하나의 명령으로 전체 파이프라인을 실행한다.
각 문서 작성 후 사용자 승인은 여전히 필요하다.

---

## 사용법

```
/domain-pipeline [DOMAIN_CODE] [domain-name]
```

예:
```
/domain-pipeline ONB onboarding
/domain-pipeline PAY payment
/domain-pipeline HOM home
```

---

## 실행 흐름

아래 순서를 자동으로 이어 실행한다.

```
[1단계] planner-agent
  └─ feature-list.md 작성 → 사용자 승인
  └─ screen-list.md 작성 → 사용자 승인
  └─ design-spec.md 작성 → 사용자 승인

[2단계] designer-agent  ← planner 완료 후 자동 실행
  └─ HTML 화면 파일 제작
  └─ screens/index.html 뷰어 업데이트

[3단계] ui-reviewer-agent  ← designer 완료 후 자동 실행
  └─ 화면 검수 실행
  └─ 검수 결과 리포트 출력
  └─ 실패 시 → designer-agent 재실행 → 재검수 (통과까지 반복)
```

---

## 실행 규칙

### 0. 사전 확인

아래 두 조건을 모두 확인한다. 하나라도 충족하지 않으면 작업을 중단하고 안내한다.

1. `projects/[PROJECT]/product-spec.md` 가 `[APPROVED]` 상태인가?
2. `domains/[DOMAIN_CODE]_[domain-name]/domain-brief.md` 가 존재하고 `[APPROVED]` 상태인가?

조건 미충족 시 출력:
```
[domain-pipeline 중단]

실행 조건이 충족되지 않았습니다.

필요한 선행 작업:
- product-spec.md 미승인 → @pm-agent [PROJECT_CODE] [project-name] 실행
- domain-brief.md 없음 또는 미승인 → @pm-agent 로 도메인 초기화 필요
```

### 1. planner-agent 실행

`@planner-agent [DOMAIN_CODE] [domain-name]` 에 해당하는 작업을 순서대로 실행한다.

- feature-list.md 작성 → 사용자 승인 대기
- screen-list.md 작성 → 사용자 승인 대기
- design-spec.md 작성 → 사용자 승인 대기

모든 Phase 1 문서가 승인되면 자동으로 다음 단계로 진행한다.

### 2. designer-agent 실행

planner 완료 즉시 `@designer-agent [DOMAIN_CODE]_[domain-name]` 에 해당하는 작업을 실행한다.

- screens/ 에 HTML 화면 파일 제작
- screens/index.html 뷰어 업데이트

완료되면 자동으로 다음 단계로 진행한다.

### 3. ui-reviewer-agent 실행

designer 완료 즉시 `@ui-reviewer-agent [DOMAIN_CODE]_[domain-name]` 에 해당하는 작업을 실행한다.

- 화면 검수 실행 및 결과 리포트 출력
- **검수 실패 시:** designer 재실행 → ui-reviewer 재검수 반복 (통과까지)
- **전체 통과 시:** 파이프라인 완료 안내 출력

### 4. 완료 안내

전체 통과 시 아래를 출력한다.

```
[domain-pipeline 완료 — {DOMAIN_CODE} 도메인]

완료된 단계:
✓ feature-list.md — APPROVED
✓ screen-list.md — APPROVED
✓ design-spec.md — APPROVED
✓ HTML 화면 N개 제작
✓ UI 검수 통과

다음 단계 선택:
1. Figma 업로드 → @figma-publisher-agent {DOMAIN_CODE}_{domain-name}
2. QA 진행 → @qa-agent {DOMAIN_CODE}_{domain-name}
3. 다음 도메인 시작 → /domain-pipeline [다음 DOMAIN_CODE] [domain-name]
```

---

## 중단 및 재개

파이프라인 도중 특정 단계에서 멈추고 싶으면 언제든 중단할 수 있다.
이후 해당 단계부터 개별 에이전트를 직접 호출해서 재개하면 된다.

| 재개 지점 | 명령어 |
|---------|-------|
| 기획부터 다시 | `/domain-pipeline [CODE] [name]` |
| HTML 제작부터 | `@designer-agent [CODE]_[name]` |
| 검수부터 | `@ui-reviewer-agent [CODE]_[name]` |
