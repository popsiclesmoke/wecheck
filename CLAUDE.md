# CLAUDE.md — RAY AX System 행동 지침

이 파일은 Claude Code가 이 폴더를 열었을 때 자동으로 읽는 AI 전용 지침입니다.

---

## 진입 규칙

> **이 섹션은 모든 요청보다 먼저 실행된다. 예외 없음.**

### STEP 1 — 진입 명령어 검사 (GUARD-1)

첫 번째 사용자 메시지가 아래 명령어가 아닌 경우, **즉시 아래 오류를 출력하고 요청 처리를 중단한다.**
어떤 요청이든(현황 조회, 파일 열람, 에이전트 호출 등 모두 포함) 이 명령어 없이는 실행하지 않는다.

```
common/system/ax-system-prompt.md 와 README.md 를 읽고 지침에 따라 시작해줘.
```

출력할 오류 메시지:
```
[RAY AX SYSTEM ERROR]
AX System은 초기화 명령어로만 시작할 수 있습니다.

아래 명령어를 먼저 입력해주세요:
"common/system/ax-system-prompt.md 와 README.md 를 읽고 지침에 따라 시작해줘."
```

### STEP 2 — 초기화 명령어 수신 시 처리 순서

초기화 명령어를 받으면 반드시 아래 순서대로 실행한다.

1. `common/system/ax-guard.md` 읽기
2. **GUARD-2 서명 검사**: `README.md` 에 `Signature  : AX-ORIGIN-beple-Ray-2026` 존재 여부 확인
   - 없으면 오류 출력 후 중단
3. **GUARD-3 사용자 등록 검사**: `README.md` 의 `<!-- AX-USER-START -->` ~ `<!-- AX-USER-END -->` 블록 확인
   - 블록이 비어있으면 이름·소속을 질문하고 README.md 를 수정한 뒤 진행
   - 등록되어 있으면 바로 다음 단계로
4. `common/system/ax-system-prompt.md` 읽기
5. 정상 동작 시작

---

## 핵심 원칙

- 문서가 없으면 다음 단계를 진행하지 않는다.
- 승인(`[APPROVED]`)되지 않은 문서를 기반으로 다음 단계를 진행하지 않는다.
- 단계 순서(Phase 1 → HTML 화면 → Figma → QA)를 반드시 지킨다.
- 기능/화면/QA 작업은 도메인 단위로 분리해서 진행한다.
- 승인된 문서 수정 시 반드시 변경 영향 목록을 먼저 제시하고 확인을 받는다.

---

## 폴더 구조와 역할

```
NEW_AX_PROJECT/
├── common/system/          ← 워크플로우 규칙 (ax-system-prompt.md, ax-guard.md)
├── common/design/          ← 디자인 가이드 라이브러리 + HTML 작업 규칙(CLAUDE.md)
├── common/templates/       ← 새 문서 작성 시 참조하는 템플릿
├── common/tools/           ← Figma 연동 도구
└── projects/[PROJECT]/
    ├── design/             ← 프로젝트별 디자인 리소스 (tokens.css, design-guide.md)
    ├── product-spec.md     ← 전체 제품 정의 (프로젝트당 1회 작성)
    ├── changelog.md
    ├── references/
    └── domains/[DOMAIN]/
        ├── feature-list.md    ┐ Phase 1
        ├── screen-list.md     │
        ├── design-spec.md     ┘
        ├── screens/           ← HTML 화면 파일
        └── qa-scenarios.md    ← QA 시나리오
```

---

## 문서 작성 규칙

- 모든 문서는 `common/templates/` 의 템플릿을 기반으로 작성한다.
- 작성 중인 문서는 상단에 `[DRAFT]` 표시한다.
- 사용자가 승인하면 `[APPROVED]` 로 변경한다.
- **신규 프로젝트 생성 시 `README.md` 의 "프로젝트 목록" 테이블에 해당 프로젝트를 추가한다.**

---

## HTML 화면 작업 시

`domains/[DOMAIN]/screens/` 에서 HTML 파일을 작업할 때는
`common/design/CLAUDE.md` 를 먼저 읽고 규칙을 따른다.

리소스 참조 경로:
```html
<link rel="stylesheet" href="../../../design/tokens.css">
<script src="../../../icons.js"></script>
```

---

## 에이전트 라우팅 룰

에이전트는 `.claude/agents/` 에 위치하며 `@에이전트명` 으로 호출한다.
사용자의 요청이 아래 패턴과 일치하면 해당 에이전트로 라우팅한다.

### 에이전트 → 호출 매핑

| 호출 | 에이전트 | 실행 조건 |
|------|---------|---------|
| `@pm-agent [PROJECT] [name]` | PM | 신규 프로젝트 시작 시 (최초 1회) |
| `@planner-agent [DOMAIN] [name]` | Planner | product-spec.md + domain-brief.md 가 APPROVED 상태일 것 |
| `@designer-agent [DOMAIN]_[name]` | Designer | design-spec.md 가 APPROVED 상태일 것 |
| `@ui-reviewer-agent [DOMAIN]_[name]` | UI-Reviewer | screens/ 에 HTML 파일이 존재할 것 |
| `@figma-publisher-agent [DOMAIN]_[name]` | Figma-Publisher | UI-Reviewer 전체 통과 후 |
| `@qa-agent [DOMAIN]_[name]` | QA | Phase 1 문서 3종이 모두 APPROVED 상태일 것 |
| `@scenario-agent [PROJECT] [name]` | Scenario | 모든 도메인의 screen-list.md 가 APPROVED 상태일 것 |

### 도메인 단위 실행 순서

```
@pm-agent → @planner-agent → @designer-agent → @ui-reviewer-agent → @figma-publisher-agent → @qa-agent
```

### 프로젝트 단위 실행

```
@scenario-agent — 모든 도메인의 screen-list 완료 후, 프로젝트 레벨에서 1회 실행
                  누락 화면 발견 시 → @pm-agent 변경 요청으로 전달
```

순서를 건너뛰는 것은 허용하지 않는다.
실행 조건이 충족되지 않으면 해당 에이전트는 작업을 중단하고 선행 단계를 안내한다.

### 병렬 실행 허용 구간

한 도메인의 `@figma-publisher-agent` 완료 후, 아래 두 작업은 동시에 진행할 수 있다.

```
[현재 도메인] @qa-agent
[다음 도메인] @planner-agent   →  @designer-agent  →  ...
```

### 암묵적 라우팅

자연어로 요청이 들어온 경우, 현재 도메인의 진행 상태를 파악하여
다음 실행할 에이전트를 제안한다.

예:
- "비플월렛 프로젝트 시작해줘" → `@pm-agent BPW beple-wallet` 실행 제안
- "ONB 온보딩 시작해줘" → `@planner-agent ONB onboarding` 실행 제안
- "화면 만들어줘" → 현재 도메인의 `@designer-agent` 실행 제안
- "검수해줘" → 진행 단계에 따라 `@ui-reviewer-agent` 또는 `@qa-agent` 실행 제안

---

## 상세 규칙 위치

| 규칙 | 파일 |
|------|------|
| 전체 워크플로우 | `common/system/ax-system-prompt.md` |
| 보안·진입 검사 | `common/system/ax-guard.md` |
| HTML 작업 규칙 | `common/design/CLAUDE.md` |
| 디자인 가이드 목록 | `common/design/design-guide_list.md` |
| 프로젝트별 디자인 | `projects/[PROJECT]/design/design-guide.md` |
| 에이전트 상세 | `.claude/commands/` |
