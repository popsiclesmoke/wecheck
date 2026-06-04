# [APPROVED] Screen List

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | BPW |
| 도메인 코드 | PAY |
| 도메인명 | payment |
| 작성자 | 석나래 |
| 작성일 | 2026-04-16 |
| 상태 | APPROVED |

---

## 화면 목록

| Screen ID | 화면명 | 파일명 | 연결 기능 | 비고 |
|-----------|--------|--------|-----------|------|
| PAY-001 | QR 스캔 | pay-qr.html | F-PAY-001 | Page — 카메라 뷰 |
| PAY-002 | 결제 확인 | pay-confirm.html | F-PAY-002 | Page — 금액 확인 전용 |
| PAY-003 | 결제 완료 | pay-complete.html | F-PAY-003 | Page |
| PAY-004 | 잔액 부족 | pay-insufficient.html | F-PAY-004 | Modal |
| PAY-005 | PIN 인증 | pay-pin.html | F-PAY-002 | Page — 결제 PIN 입력 전용 |

---

## 화면 흐름

```
[PAY-001: QR 스캔] → [PAY-002: 결제 확인] → [PAY-005: PIN 입력]
  → 성공 → [PAY-003: 완료]
  → 잔액부족 → [PAY-004: 잔액 부족] → CHG 도메인
```

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-04-16 | 석나래 | 최초 작성 |
