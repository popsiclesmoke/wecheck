# [APPROVED] Screen List

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | BPW |
| 도메인 코드 | WDR |
| 도메인명 | withdrawal |
| 작성자 | 석나래 |
| 작성일 | 2026-04-16 |
| 상태 | APPROVED |

---

## 화면 목록

| Screen ID | 화면명 | 파일명 | 연결 기능 | 비고 |
|-----------|--------|--------|-----------|------|
| WDR-000 | COATM 이용약관 | wdr-terms.html | F-WDR-001 | Page — 최초 이용 시 |
| WDR-001 | ATM QR 스캔 | wdr-qr.html | F-WDR-001 | Page |
| WDR-002 | 출금 금액 입력 | wdr-amount.html | F-WDR-002 | Page |
| WDR-005 | ATM 출금 안내 | wdr-guide.html | F-WDR-001 | Page — ATM 조작 안내 |
| WDR-003 | 출금 확인 | wdr-confirm.html | F-WDR-003 | Page |
| WDR-004 | 출금 완료 | wdr-complete.html | F-WDR-004 | Page |

---

## 화면 흐름

```
[WDR-000: COATM 약관] → [WDR-005: ATM 출금 안내] → [WDR-001: ATM QR 스캔]
→ [WDR-002: 금액 입력] → [WDR-003: 확인 + PIN] → [WDR-004: 완료]
```

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-04-16 | 석나래 | 최초 작성 |
