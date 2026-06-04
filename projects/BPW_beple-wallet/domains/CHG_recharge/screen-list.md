# [APPROVED] Screen List

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 프로젝트 코드 | BPW |
| 도메인 코드 | CHG |
| 도메인명 | recharge |
| 작성자 | 석나래 |
| 작성일 | 2026-04-16 |
| 상태 | APPROVED |

---

## 화면 목록

| Screen ID | 화면명 | 파일명 | 연결 기능 | 비고 |
|-----------|--------|--------|-----------|------|
| CHG-001 | 충전 방법 선택 | chg-method.html | F-CHG-001 | Page |
| CHG-KRB-000 | Korbit 이용약관 | chg-krb-terms.html | F-CHG-KRB-001 | Page — 최초 연결 시 |
| CHG-KRB-001 | Korbit 연결 | chg-krb-connect.html | F-CHG-KRB-001 | Page |
| CHG-KRB-002 | 출금 동의 (1원 인증) | chg-krb-consent.html | F-CHG-KRB-002/003 | Page |
| CHG-KRB-003 | 코인 선택 | chg-krb-coin.html | F-CHG-KRB-004 | Page |
| CHG-KRB-004 | 수량 입력 | chg-krb-amount.html | F-CHG-KRB-005 | Page |
| CHG-KRB-005 | 매도 확인 | chg-krb-confirm.html | F-CHG-KRB-006 | Page |
| CHG-KRB-006 | 공동인증 선택 | chg-krb-cert.html | F-CHG-KRB-008 | Page |
| CHG-KRB-007 | 충전 완료 | chg-krb-complete.html | F-CHG-KRB-009 | Page — 완료 상태 |
| CHG-DRT-001 | 직전송 안내 | chg-drt-guide.html | F-CHG-DRT-001 | Page |
| CHG-DRT-002 | 코인/네트워크 선택 | chg-drt-coin.html | F-CHG-DRT-002 | Page |
| CHG-DRT-003 | 환불주소 등록 | chg-drt-refund.html | F-CHG-DRT-003 | Page |
| CHG-DRT-004 | 수신주소 안내 | chg-drt-address.html | F-CHG-DRT-004 | Page — QR코드 |
| CHG-DRT-005 | 블록체인 대기 | chg-drt-wait.html | F-CHG-DRT-005 | Page |
| CHG-DRT-006 | 직전송 충전 완료 | chg-drt-complete.html | F-CHG-DRT-006 | Page — 완료 상태 |
| CHG-BNK-001 | 계좌 선택 · 금액 입력 | chg-bnk-select.html | F-CHG-BNK-001 | Page |
| CHG-BNK-002 | 은행 충전 완료 | chg-bnk-complete.html | F-CHG-BNK-002 | Page — 완료 상태 |

---

## 화면 흐름 요약

**Korbit 채널 (최초)**
```
[CHG-001] → [CHG-KRB-000: 약관동의] → [CHG-KRB-001: Korbit 연결] → [CHG-KRB-002: 출금동의] → [CHG-KRB-003: 코인 선택]
→ [CHG-KRB-004: 수량 입력] → [CHG-KRB-005: 확인] → [CHG-KRB-006: 공동인증] → [CHG-KRB-007: 완료]
```

**직전송 채널**
```
[CHG-001] → [CHG-DRT-001: 안내] → [CHG-DRT-002: 코인/네트워크] → [CHG-DRT-003: 환불주소]
→ [CHG-DRT-004: 수신주소] → [CHG-DRT-005: 대기] → [CHG-DRT-006: 완료]
```

**은행계좌 채널**
```
[CHG-001] → [CHG-BNK-001: 계좌·금액] → PIN 입력 → [CHG-BNK-002: 완료]
```

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v0.1 | 2026-04-16 | 석나래 | 최초 작성 |
| v0.2 | 2026-04-16 | 석나래 | CR-1: CHG-DRT-006 직전송 충전 완료 화면 추가, 직전송 채널 흐름에 CHG-DRT-006 반영 |
