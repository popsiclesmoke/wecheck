---
name: ps
description: 프로젝트의 현재 진행 상태를 한눈에 보여줍니다.
---

# /ps

프로젝트의 현재 진행 상태를 한눈에 보여줍니다.

---

## 사용법

```
/ps [프로젝트 폴더명]
```

폴더명 생략 시 `projects/` 아래의 전체 프로젝트 목록을 보여준다.

---

## 실행 방식

### 전체 현황 (`/ps`)

`projects/` 폴더를 스캔하여 아래 형식으로 출력:

```
AX 프로젝트 현황

| 프로젝트 | 현재 단계 | 상태 |
|----------|----------|------|
| BPP_beple-pay | 3. Screen 정의 | 승인 대기 |
| BPW_beple-wallet | 1. Product Spec | 작성 중 |
```

### 개별 프로젝트 (`/ps BPP_beple-pay`)

해당 프로젝트 폴더의 문서를 읽고 단계별 상태를 출력:

```
BPP_beple-pay 상태

| 단계 | 문서 | 상태 |
|------|------|------|
| 1. Product Spec | product-spec.md | APPROVED |
| 2. Feature 정의 | feature-list.md | APPROVED |
| 3. Screen 정의 | screen-list.md | DRAFT |
| 4. Design 정의 | design-spec.md | 미작성 |
| 5. QA 작성 | qa-scenarios.md | 미작성 |
```

---

## 상태 판단 기준

- **APPROVED**: 문서 상단에 `[APPROVED]` 표시가 있음
- **DRAFT**: 문서가 존재하고 내용이 있으나 `[DRAFT]` 표시
- **미작성**: 파일이 비어있거나 템플릿 그대로인 경우
