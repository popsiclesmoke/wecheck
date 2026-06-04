# [APPROVED] Screen List

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | BPW |
| 도메인 코드 | ONB |
| 도메인명 | onboarding |
| 작성자 | 석나래 |
| 작성일 | 2026-04-16 |
| 상태 | APPROVED |

> 기반 문서: `feature-list.md`

---

## 화면 목록

| Screen ID | 화면명 | 파일명 | 진입 경로 | 연결 기능 | 비고 |
|-----------|--------|--------|-----------|-----------|------|
| ONB-001 | 언어 선택 | onb-language.html | 앱 최초 실행 | F-ONB-001 | Page |
| ONB-002 | 사용자 유형 선택 | onb-user-type.html | ONB-001 다음 | F-ONB-002 | Page |
| ONB-003 | SMS 인증 | onb-sms.html | 내국인 약관 동의 후 | F-ONB-003 | Page |
| ONB-004 | 약관 동의 | onb-terms.html | ONB-002 사용자 유형 선택 후 (내국인/외국인 공통) | F-ONB-004 | Page |
| ONB-005 | 내국인 가입 완료 | onb-reg-complete.html | 내국인 SMS 인증 후 | F-ONB-004 | Page — 완료 상태 화면 |
| ONB-006 | 외국인 연락처 인증 | onb-kyc-contact.html | 외국인 약관 동의 후 | F-ONB-005 | Page |
| ONB-007 | KYC 방법 선택 | onb-kyc-method.html | 외국인 연락처 인증 후 | F-ONB-006/007 | Page — Quick/Full 선택 |
| ONB-008 | 여권 OCR | onb-kyc-passport.html | KYC Quick 선택 후 | F-ONB-006 | Page |
| ONB-009 | 안면 인식 | onb-kyc-face.html | 여권 OCR 완료 후 | F-ONB-006 | Page |
| ONB-010 | KYC 완료 | onb-kyc-complete.html | 안면 인식 완료 후 | F-ONB-006 | Page — 완료 상태 화면 |
| ONB-011 | PIN 설정 | onb-pin-setup.html | 가입 완료 또는 KYC 완료 후 | F-ONB-008 | Page |
| ONB-012 | PIN 확인 | onb-pin-confirm.html | PIN 설정 완료 후 | F-ONB-008 | Page |
| ONB-013 | 생체인증 등록 | onb-bio.html | PIN 확인 완료 후 | F-ONB-009 | Page — 스킵 가능 |
| ONB-014 | 여권 정보 확인 | onb-kyc-passport-confirm.html | 여권 OCR 완료 후 | F-ONB-006 | Page — 여권 내용 검증 |

---

## 화면 흐름 요약

**시나리오 1: 내국인 가입**
```
[ONB-001: 언어 선택] → [ONB-002: 사용자 유형] → [ONB-004: 약관 동의] → [ONB-003: SMS 인증]
→ [ONB-005: 가입 완료] → [ONB-011: PIN 설정] → [ONB-012: PIN 확인] → [ONB-013: 생체인증]
→ 홈
```

**시나리오 2: 외국인 KYC Quick**
```
[ONB-001: 언어 선택] → [ONB-002: 사용자 유형] → [ONB-004: 약관 동의] → [ONB-006: 연락처 인증]
→ [ONB-007: KYC 방법] → [ONB-008: 여권 OCR] → [ONB-014: 여권 정보 확인] → [ONB-009: 안면 인식]
→ [ONB-010: KYC 완료] → [ONB-011: PIN 설정] → [ONB-012: PIN 확인] → [ONB-013: 생체인증]
→ 홈
```

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-04-16 | 석나래 | 최초 작성 |
