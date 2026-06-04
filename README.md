# AX System

AI와 인간이 협업하여 제품을 만드는 구조화된 개발 운영 체계입니다.

기획자가 아이디어를 던지면 AI가 기획 → 설계 → 구현 → 검수의 전 과정을 단계별로 실행하고,
인간은 각 단계의 산출물을 검토하고 승인합니다.

---

## 시작하기

**Step 1.** Claude Code를 열고 이 폴더(`NEW_AX_PROJECT`)를 작업 디렉토리로 지정한다.

**Step 2.** 아래 명령어를 입력한다.

```
common/system/ax-system-prompt.md 와 README.md 를 읽고 지침에 따라 시작해줘.
```

**Step 3.** 최초 실행 시 이름과 소속을 물어본다. 이후부터는 바로 시작된다.

---

## 사전 준비 체크리스트

> AX System을 원활하게 사용하기 위해서는 아래 To Do List가 모두 완료되었는지 확인해보세요!
> 아직 안 된 항목이 있다면 AX System 사용 전 미리 준비해두는 것이 좋아요!!

- VS Code 설치
- Claude Code 플러그인 설치
- Live Preview extension 설치
- Figma MCP 연동
- GitHub 공식 Skills 다운로드 + Frontend Design 플러그인 설치

---

## 현재 사용자

<!-- AX-USER-START -->
이름: 강다현
소속: 쿠콘 AX TF팀
설정일: 2026-05-29
<!-- AX-USER-END -->

---

## 작업 흐름

### 1. 프로젝트 시작

새 프로젝트를 시작하면 AI가 전체 제품을 정의하는 `product-spec.md`를 먼저 작성합니다.
승인하면 작업 구역(도메인)을 나눠서 제안합니다.

```
예: BPW 프로젝트
→ ONB(온보딩) / HOME(홈) / PAY(결제) / MYP(마이페이지)
```

### 2. 도메인별 반복

도메인 하나씩 순서대로 진행합니다. 인간은 각 단계에서 검토하고 승인만 하면 됩니다.

```
[Phase 1 — 디자인 기획]          [QA — 검수]
feature-list  ← 기능 목록         qa-scenarios  ← QA 시나리오
screen-list   ← 화면 목록              ↓
design-spec   ← 화면 설계         검수 → 승인
     ↓
HTML 화면 제작
     ↓
Figma 이전
```

### 3. 변경이 필요한 경우

승인된 문서를 수정할 때는 AI가 먼저 영향 문서 목록을 제시합니다.
확인 후 순서대로 수정합니다.

---

## 명령어 레퍼런스

### 시스템 시작

```
common/system/ax-system-prompt.md 와 README.md 를 읽고 지침에 따라 시작해줘.
```

---

### 에이전트 명령어

| 단계 | 명령어 | 실행 조건 |
|------|--------|---------|
| 신규 프로젝트 | `@pm-agent [PROJECT_CODE] [project-name]` | 없음 (최초 실행) |
| 도메인 기획 | `@planner-agent [DOMAIN_CODE] [domain-name]` | product-spec.md + domain-brief.md APPROVED |
| HTML 화면 제작 | `@designer-agent [DOMAIN_CODE]_[domain-name]` | design-spec.md APPROVED |
| 화면 검수 | `@ui-reviewer-agent [DOMAIN_CODE]_[domain-name]` | screens/ 에 HTML 파일 존재 |
| Figma 업로드 | `@figma-publisher-agent [DOMAIN_CODE]_[domain-name]` | UI-Reviewer 전체 통과 후 |
| QA | `@qa-agent [DOMAIN_CODE]_[domain-name]` | Phase 1 문서 3종 모두 APPROVED |
| 시나리오 도출 | `@scenario-agent [PROJECT_CODE] [project-name]` | 모든 도메인 screen-list.md APPROVED |
| 전체 파이프라인 | `/domain-pipeline [DOMAIN_CODE] [domain-name]` | domain-brief.md APPROVED |
| 현재 상태 확인 | `/ps` | — |

예시:
```
@pm-agent BPW beple-wallet
@planner-agent ONB onboarding
@designer-agent ONB_onboarding
/domain-pipeline PAY payment
```

---

### 도메인 실행 순서

```
@pm-agent → @planner-agent → @designer-agent → @ui-reviewer-agent → @figma-publisher-agent → @qa-agent
                또는
@pm-agent → /domain-pipeline (기획 → HTML 자동 연결)
```

프로젝트 전체 도메인 완료 후 → `@scenario-agent` (1회)

---

### 네이밍 규칙

| 대상 | 형식 | 예시 |
|------|------|------|
| 프로젝트 폴더 | `[CODE]_[name]` | `BPW_beple-wallet` |
| 도메인 폴더 | `[CODE]_[name]` | `ONB_onboarding` |
| Screen ID | `[CODE]-NNN` | `ONB-001` |
| HTML 파일 | `[domain]-[screen].html` | `onb-signup.html` |
| Feature ID | `F-[CODE]-NNN` | `F-ONB-001` |
| QA ID | `QA-[CODE]-NNN` | `QA-ONB-001` |

---

## 프로젝트 목록

| 프로젝트 | 설명 | 상태 |
|---------|------|------|
| BPW_beple-wallet | 코인 자산을 원화로 환전하여 QR 결제·ATM 출금하는 모바일 디지털 결제 지갑 | 진행중 |
| WCK_we-check | 기업 도입형 서류 발급·제출 모바일 서비스 | 진행중 |

---

## 버전 기록

| 버전 | 날짜 | 변경 내용 |
|------|------|---------|
| v1.0.0 | 2026-04-16 | 최초 릴리스 — AX System 구조 확립 (Guard, 에이전트 라우팅, 도메인 파이프라인) |

---

## 저작권 및 출처

```
AX System
Created by : Nahrae Seok (Ray)
Company    : Webcash Group - Beple
License    : 내부 배포용. 원작자 표기 없이 외부 공유 금지.
Signature  : AX-ORIGIN-beple-Ray-2026
```

> 팀 내 배포 및 사용은 허용되나, 원작자 표기를 삭제하거나 외부에 무단 배포하는 것을 금합니다.
