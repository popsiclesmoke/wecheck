# 비플페이 공통 디자인 가이드

---

## 문서 정보

| 항목 | 내용 |
|------|------|
| 서비스명 | 비플페이 (BeplePay) |
| 작성자 | AI (Figma 디자인 시스템 기반) |
| 작성일 | 2026-04-14 |
| 상태 | v1.0 |
| Figma 원본 | [비플페이 디자인](https://www.figma.com/design/srMPqsuLgNXbxx9f79zU3A) |
| 디자인 라이브러리 | [App] 비플페이 공통 가이드 |

> 이 문서는 모든 프로젝트의 `design-spec.md` 작성 시 참고하는 **공통 디자인 시스템 규격서**입니다.
> 각 프로젝트별 화면 설계는 이 가이드를 기반으로 `design-spec.md`에 작성합니다.

---

## 1. 기본 레이아웃

### 1.1 화면 기준

| 항목 | AOS | iOS |
|------|-----|-----|
| 기준 해상도 | 360 x 800 | 375 x 812 |
| 상태바 높이 | 시스템 기본 | 44px (노치 포함) |
| 하단 Safe Area | 없음 | 34px |

### 1.2 화면 구조

모든 화면은 아래 3영역으로 구성됩니다.

| 영역 | 설명 | 높이 |
|------|------|------|
| Header | TopBar (타이틀, 뒤로가기, 액션 아이콘) | 56px |
| Body | 스크롤 가능한 콘텐츠 영역 | 가변 |
| Footer | 하단 고정 버튼 또는 탭바 | 가변 |

### 1.3 하단 탭바 (Bottom Navigation)

| 항목 | 내용 |
|------|------|
| 탭 수 | 5개 |
| 탭 구성 | 가맹점찾기(또는 알림) · 간편결제 · 홈 · MY자산(또는 혜택) · 더보기 |
| 탭 높이 | 56px (아이콘 24px + 라벨 + 패딩) |
| 선택 상태 | 아이콘/텍스트 Primary Blue (#0D84FF) |
| 비선택 상태 | 아이콘/텍스트 Gray (#999999) |

---

## 2. 컬러 시스템

### 2.1 Primary Color (브랜드 컬러)

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| Primary/900 | `#0D84FF` | 주요 CTA 버튼, 액션 텍스트, 링크 |
| Primary/700 | `#4AA9FF` | 보조 액션, 활성 상태 강조 |
| Primary/500 | `#87D5FF` | 아이콘 배경, 보조 강조 |
| Primary/300 | `#B2E5FC` | 태그 배경, 연한 강조 |
| Primary/100 | `#EEF6FF` | 배너/카드 배경, 섹션 하이라이트 |

### 2.2 Gray Scale (텍스트 및 UI)

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| Gray/900 | `#111111` | Page Title 텍스트 |
| Gray/800 | `#333333` | Contents Title 텍스트, Table/List Top Line |
| Gray/600 | `#666666` | Body 텍스트 |
| Gray/500 | `#999999` | Description 텍스트, TextField Default Line |
| Gray/400 | `#CCCCCC` | Disabled 텍스트, TextField Disabled Line |
| Gray/300 | `#DBDBDB` | TextField Line, Table/List Div2, Checkbox/Radio Line |
| Gray/200 | `#EDEDED` | Table/List Div1, Card Box Line |
| Gray/100 | `#F7F7F7` | Main Background |
| Gray/50 | `#FAFAFA` | Contents Background 2 |
| White | `#FFFFFF` | Card 배경, 기본 배경 |

### 2.3 시맨틱 컬러 (Semantic)

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| Blue (Info) | `#0D84FF` | 정보성 알림, 링크 |
| Red (Error/Danger) | 디자인 시스템 참조 | 오류 메시지, 삭제/위험 액션 |
| Green (Success) | 디자인 시스템 참조 | 성공 상태, 완료 표시 |
| Orange (Warning) | 디자인 시스템 참조 | 경고 메시지, 주의 표시 |

---

## 3. 타이포그래피

### 3.1 폰트

| 항목 | 값 |
|------|-----|
| 기본 폰트 | Pretendard (또는 시스템 기본 폰트) |
| 폴백 | -apple-system, BlinkMacSystemFont, sans-serif |

### 3.2 텍스트 스타일

| 스타일명 | 크기 | 굵기 | 용도 | CSS 토큰 |
|----------|------|------|------|----------|
| Page Title | 20px | 600 | 화면 제목 | `--text-title-lg-size` |
| Contents Title | 18px | 600 | 섹션 제목 | `--text-title-md-size` |
| Body | 16px | 400 | 본문 텍스트 | `--text-body-lg-size` |
| Body Small | 14px | 400 | 보조 본문 | `--text-body-sm-size` |
| Description | 12px | 400 | 부가 설명, 캡션 | `--text-body-xs-size` |

---

## 4. 간격 및 여백 (Spacing)

| 값 | 용도 |
|----|------|
| 4px | 아이콘-텍스트 사이 최소 간격 |
| 8px | 인라인 요소 간격 |
| 12px | 컴포넌트 내부 패딩 |
| 16px | 화면 좌우 마진, 섹션 간 기본 간격 |
| 20px | 카드 내부 패딩 |
| 24px | 섹션 간 간격 |
| 32px | 대형 섹션 구분 |

---

## 5. 컴포넌트 규격

### 5.1 버튼 (Button)

| 사이즈 | 높이 | CSS 토큰 |
|--------|------|----------|
| XLarge | 52px | `--btn-xl-height` |
| Large | 48px | `--btn-lg-height` |
| Medium | 40px | `--btn-md-height` |
| Small | 32px | `--btn-sm-height` |
| XSmall | 24px | `--btn-xs-height` |

### 5.2 TopBar (상단바)

| 속성 | 값 |
|------|-----|
| 높이 | 56px |
| 배경 | `var(--color-bg)` |
| 좌우 패딩 | 16px |

### 5.3 입력 필드 (TextField)

| 속성 | 값 | CSS 토큰 |
|------|-----|----------|
| 높이 | 48px | `--input-height` |
| 테두리 (Default) | 1px `var(--color-border-input)` | |
| 테두리 (Focus) | 2px `var(--color-primary)` | |
| 테두리 (Error) | 2px `var(--color-error)` | |
| 테두리 (Disabled) | 1px `var(--color-border-input-disabled)` | |

### 5.4 Border Radius

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--radius-2xl` | 16px | 팝업 카드 |
| `--radius-xl` | 12px | 버튼 XLarge |
| `--radius-lg` | 10px | 버튼 Large, Medium |
| `--radius-md` | 8px | 버튼 Small, 텍스트필드 박스 |
| `--radius-sm` | 6px | 버튼 XSmall |

### 5.5 아이콘 배치 규칙

| 아이콘 | 위치 | 예외 |
|--------|------|------|
| 뒤로가기 (arrowBack) | 항상 **왼쪽** | 없음 |
| 닫기 X (close) | 항상 **오른쪽** | 없음 |

> 바텀시트, 팝업, 일반 헤더 등 모든 컴포넌트에 예외 없이 적용된다.

---

## 6. 팝업 및 오버레이

### 6.1 Layer Popup

| 속성 | 값 | CSS 토큰 |
|------|-----|----------|
| 너비 | 312px | `--popup-width` |
| Border Radius | 16px | `--popup-radius` |
| 상단 여백 | 32px | `--popup-padding-top` |
| 좌우 여백 | 20px | `--popup-padding-x` |

### 6.2 Dimmed Overlay

| 속성 | 값 | CSS 토큰 |
|------|-----|----------|
| 배경색 | `#111111` | `--dimmed-bg` |
| 불투명도 | 0.7 | `--dimmed-opacity` |

---

## 7. design-spec.md 작성 시 참조 방법

```
**화면 구성**

| 영역 | 컴포넌트 | 설명 |
|------|----------|------|
| 상단 | TopBar (뒤로가기) | 타이틀: "충전하기" |
| 본문 | TextField | 금액 입력, Focus 상태 라인 Primary |
| 본문 | Card | 결제수단 선택 영역 |
| 하단 | Button Large (Primary) | "충전하기" CTA |
```

- 텍스트 컬러는 토큰명으로 명시 (예: `Gray/900`, `Gray/600`)
- 브랜드/액션 컬러는 Primary 토큰명으로 명시 (예: `Primary/900`)
- HEX 값 직접 사용 금지

---

## Change History

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| v1.0 | 2026-04-14 | AI | Figma 디자인 시스템 기반 최초 작성 |
