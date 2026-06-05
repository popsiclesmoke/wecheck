# WeCheck Design Guide

> 이 파일은 `tokens.css`와 함께 모든 화면 작업의 기준이 되는 CSS 컴포넌트 패턴 문서입니다.
> 화면 구현 시 이 가이드의 클래스명과 구조를 그대로 사용한다.

---

## 리소스 참조

```html
<link rel="stylesheet" href="../../../design/tokens.css">
<script src="../../../icons.js"></script>
```

---

## 공통 레이아웃

| 항목 | 값 | 토큰 |
|------|----|------|
| 화면 너비 | 360px | `var(--screen-width)` |
| 좌우 여백 | 20px | `var(--page-margin)` |
| 주요 컴포넌트 너비 | 320px | `var(--component-width)` |
| StatusBar 높이 | 44px | `var(--statusbar-height)` |
| Header 높이 | 50px | `var(--header-height)` |
| 헤더 합산 높이 | 94px | `var(--header-total)` |
| Input / Dropdown 높이 | 46px | `var(--input-height)` |
| 버튼 높이 | 50px | `var(--button-height)` |
| 팝업 버튼 높이 | 46px | `var(--button-popup-h)` |
| 팝업 너비 | 290px | `var(--popup-width)` |

**필수 화면 기본 구조**

```css
.screen { width: 100%; height: 100vh; display: flex; flex-direction: column; position: relative; }
.content { flex: 1; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 0 var(--page-margin); }
.bottom { flex-shrink: 0; padding: 0 var(--page-margin) var(--page-margin); }
```

---

## 컴포넌트 패턴

---

### 1. Overlay Dim

팝업·바텀시트 등 오버레이 컴포넌트의 배경 딤.

```css
.dim {
  position: absolute; inset: 0;
  background: var(--color-dim);
  z-index: 10;
}
```

```html
<div class="dim"></div>
```

> **Z-index 규칙:** `.dim` = 10 / `.popup` = 20 / `.bottom-sheet` = 20

---

### 2. Overlay Popup — 1버튼

```css
.dim { position: absolute; inset: 0; background: var(--color-dim); z-index: 10; }
.popup { position: absolute; top: 50%; left: var(--popup-margin); right: var(--popup-margin); transform: translateY(-50%); z-index: 20; background: var(--color-bg-white); border-radius: var(--radius-default); overflow: hidden; }
.popup-body { padding: 23px var(--page-margin); min-height: 115px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
.popup-title { font-size: var(--font-heading4); font-weight: var(--weight-medium); line-height: var(--lh-heading4); letter-spacing: -0.6px; color: var(--color-text-default); text-align: center; }
.popup-desc { font-size: var(--font-body2); font-weight: var(--weight-regular); line-height: var(--lh-body2); letter-spacing: -0.56px; color: var(--color-text-placeholder); text-align: center; }
.popup-btns { display: flex; height: var(--button-popup-h); }
.pbtn { flex: 1; border: none; cursor: pointer; font-size: var(--font-heading6); font-weight: var(--weight-medium); font-family: inherit; letter-spacing: -0.52px; display: flex; align-items: center; justify-content: center; }
.pbtn-single { background: var(--color-primary); color: var(--color-text-white); border-radius: 0 0 var(--radius-default) var(--radius-default); }
```

```html
<div class="dim"></div>
<div class="popup">
  <div class="popup-body">
    <p class="popup-title">제목 텍스트</p>
    <p class="popup-desc">보조 설명 텍스트</p>
  </div>
  <div class="popup-btns">
    <button class="pbtn pbtn-single">확인</button>
  </div>
</div>
```

---

### 3. Overlay Popup — 2버튼

```css
/* .dim, .popup, .popup-body 동일 */
.pbtn-left  { background: var(--color-bg-disabled); color: var(--color-text-default); border-radius: 0 0 0 var(--radius-default); }
.pbtn-right { background: var(--color-primary);     color: var(--color-text-white);   border-radius: 0 0 var(--radius-default) 0; }
```

```html
<div class="dim"></div>
<div class="popup">
  <div class="popup-body">
    <p class="popup-title">선택을 변경하시겠습니까?</p>
    <p class="popup-desc">현재 선택된 항목이 변경됩니다.</p>
  </div>
  <div class="popup-btns">
    <button class="pbtn pbtn-left">취소</button>
    <button class="pbtn pbtn-right">확인</button>
  </div>
</div>
```

---

### 4. Overlay Popup — 리스트 선택

선택지 리스트를 팝업으로 노출할 때 사용. (통신사 선택, 시도 선택 등)

```css
/* .dim, .popup 동일 */
.popup-header { height: 70px; display: flex; align-items: center; justify-content: space-between; padding: 0 var(--page-margin); }
.popup-title  { font-size: var(--font-heading1); font-weight: var(--weight-medium); line-height: var(--lh-heading1); letter-spacing: -0.76px; color: var(--color-text-default); }
.popup-list   { padding: 0 var(--page-margin); }
.list-item    { height: var(--input-height); display: flex; align-items: center; border-bottom: 1px solid var(--color-border-default); font-size: var(--font-body2); font-weight: var(--weight-regular); letter-spacing: -0.56px; color: var(--color-text-default); cursor: pointer; }
.list-item:last-child { border-bottom: none; }
```

```html
<div class="dim"></div>
<div class="popup">
  <div class="popup-header">
    <span class="popup-title">항목을 선택해 주세요</span>
    <span class="h-btn"><i data-icon="close"></i></span>
  </div>
  <div class="popup-list">
    <div class="list-item">항목 1</div>
    <div class="list-item">항목 2</div>
  </div>
</div>
```

---

### 5. Bottom Sheet

화면 하단에서 올라오는 시트 컴포넌트. 약관 상세, 설정 등에 사용.

```css
.dim { position: absolute; inset: 0; background: var(--color-dim); z-index: 10; }
.sheet {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: 20;
  background: var(--color-bg-white);
  border-radius: var(--radius-sheet-top) var(--radius-sheet-top) 0 0;
  display: flex; flex-direction: column;
}
.sheet-header {
  height: 75px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--page-margin);
  position: relative;
}
.sheet-title {
  position: absolute; left: 50%; transform: translateX(-50%);
  font-size: var(--font-heading1); font-weight: var(--weight-medium);
  letter-spacing: -0.76px; color: var(--color-text-default); white-space: nowrap;
}
.sheet-content { flex: 1; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 0 var(--page-margin) var(--page-margin); }
```

```html
<div class="dim"></div>
<div class="sheet">
  <div class="sheet-header">
    <span class="sheet-title">시트 제목</span>
    <div class="h-btn"><i data-icon="close"></i></div>
  </div>
  <div class="sheet-content">
    <!-- 스크롤 콘텐츠 -->
  </div>
</div>
```

---

### 6. Step Indicator

멀티스텝 프로세스 상단 표시. 차트 아이콘 + 단계 번호 + 제목 + 설명.

```css
.step-area { flex-shrink: 0; padding: var(--space-page-top) var(--page-margin) var(--space-xxl); display: flex; flex-direction: column; gap: var(--space-xxl); }
.step-row  { display: flex; align-items: center; gap: var(--space-step-gap); }
.step-icon { position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-icon i { position: absolute; inset: 0; display: block; }
.step-num  { position: relative; z-index: 1; font-size: 10px; font-weight: var(--weight-regular); color: var(--color-text-default); line-height: 1; letter-spacing: -0.3px; }
.step-title { font-size: var(--font-heading1); font-weight: var(--weight-medium); line-height: var(--lh-heading1); letter-spacing: -0.76px; color: var(--color-text-default); }
.step-desc  { font-size: var(--font-body2); font-weight: var(--weight-regular); line-height: var(--lh-body2); letter-spacing: -0.56px; color: var(--color-text-default); }
```

```html
<div class="step-area">
  <div class="step-row">
    <div class="step-icon">
      <i data-icon="chart" data-size="36"></i>
      <span class="step-num">1/2</span>
    </div>
    <span class="step-title">단계 제목</span>
  </div>
  <p class="step-desc">단계 안내 텍스트</p>
</div>
```

---

### 7. Card List (라디오 선택 카드)

검색 결과, 계좌 선택 등 라디오 버튼이 포함된 선택형 카드 목록.

```css
.card-list   { padding: 0 var(--page-margin) var(--page-margin); display: flex; flex-direction: column; gap: var(--space-md); }
.result-card { border: 1px solid var(--color-border-default); border-radius: var(--radius-default); padding: 20px 16px; cursor: pointer; display: flex; flex-direction: column; }
.result-card.selected { border: 2px solid var(--client-blue); padding: 19px 15px; }
.card-inner  { display: flex; align-items: center; gap: 12px; }
.radio       { width: 20px; height: 20px; border-radius: var(--radius-circle); border: 2px solid var(--color-border-checkbox); background: var(--color-bg-white); flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.result-card.selected .radio              { border-color: var(--client-blue); }
.result-card.selected .radio::after       { content: ''; width: 8px; height: 8px; border-radius: var(--radius-circle); background: var(--client-blue); }
.card-text   { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
.card-name   { font-size: var(--font-heading4); font-weight: var(--weight-medium); line-height: 20px; letter-spacing: -0.6px; color: var(--color-text-default); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.card-account { display: flex; align-items: center; gap: var(--space-xs); overflow: hidden; }
.account-badge { flex-shrink: 0; background: var(--client-blue-light); padding: 4px var(--space-xs); border-radius: var(--radius-tag); font-size: 11px; font-weight: var(--weight-regular); line-height: 14px; letter-spacing: -0.44px; color: var(--client-blue); white-space: nowrap; }
.account-num   { font-size: 13px; font-weight: var(--weight-regular); line-height: 18px; letter-spacing: -0.52px; color: var(--color-text-default); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
```

```html
<div class="card-list">
  <div class="result-card selected">
    <div class="card-inner">
      <div class="radio"></div>
      <div class="card-text">
        <span class="card-name">이름</span>
        <div class="card-account">
          <span class="account-badge">계좌</span>
          <span class="account-num">은행명 계좌번호*****</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 8. Input Group

레이블 + 인풋 필드 기본 조합.

```css
.input-group  { display: flex; flex-direction: column; gap: 10px; }
.input-label  { font-size: var(--font-body2); font-weight: var(--weight-regular); line-height: var(--lh-body2); letter-spacing: -0.56px; color: var(--color-text-default); }
.input-field  { width: 100%; height: var(--input-height); border: 1px solid var(--color-border-default); border-radius: var(--radius-default); padding: 0 14px; font-size: var(--font-body2); font-weight: var(--weight-regular); font-family: inherit; letter-spacing: -0.6px; color: var(--color-text-default); background: var(--color-bg-white); outline: none; }
.input-field::placeholder { color: var(--color-text-placeholder); }
.input-field:focus { border-color: var(--color-border-selected); }
.input-error  { border-color: var(--color-error) !important; }
.input-error-msg { font-size: var(--font-heading6); font-weight: var(--weight-regular); line-height: var(--lh-heading6); letter-spacing: -0.52px; color: var(--color-error); }
```

```html
<div class="input-group">
  <label class="input-label">레이블</label>
  <input class="input-field" type="text" placeholder="입력해 주세요">
</div>
```

---

### 9. Search Input Row

주소 검색처럼 인풋 + 버튼이 한 줄에 배치되는 패턴.

```css
.field-label   { font-size: var(--font-body2); font-weight: var(--weight-regular); line-height: var(--lh-body2); letter-spacing: -0.56px; color: var(--color-text-default); }
.input-row     { display: flex; align-items: center; gap: 10px; }
.search-input  { flex: 1; height: var(--input-height); border: 1px solid var(--color-border-default); border-radius: var(--radius-default); background: var(--color-bg-white); display: flex; align-items: center; padding: 0 14px; }
.search-input .placeholder-text { font-size: var(--font-body2); font-weight: var(--weight-regular); color: var(--color-text-placeholder); }
.search-btn    { width: var(--input-height); height: var(--input-height); border: 1px solid var(--color-border-default); border-radius: var(--radius-default); background: var(--color-bg-white); display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
```

```html
<div style="display:flex; flex-direction:column; gap:10px;">
  <span class="field-label">주소 검색</span>
  <div class="input-row">
    <div class="search-input">
      <span class="placeholder-text">주소를 검색해 주세요</span>
    </div>
    <button class="search-btn">
      <i data-icon="search"></i>
    </button>
  </div>
</div>
```

---

### 10. Loading Dots

대기·로딩 상태 애니메이션. 크기가 다른 3개의 원.

```css
.dots  { display: flex; align-items: center; justify-content: center; gap: 9px; }
.dot   { border-radius: 50%; background: var(--color-primary); }
.dot-sm { width: 7px;  height: 7px;  opacity: 0.35; }
.dot-md { width: 9px;  height: 9px;  opacity: 0.65; }
.dot-lg { width: 11px; height: 11px; opacity: 1;    }
```

```html
<div class="dots">
  <span class="dot dot-sm"></span>
  <span class="dot dot-md"></span>
  <span class="dot dot-lg"></span>
</div>
```

---

### 11. Button

```css
.btn { width: var(--component-width); height: var(--button-height); border-radius: var(--radius-default); border: none; cursor: pointer; font-size: var(--font-heading4); font-weight: var(--weight-medium); font-family: inherit; letter-spacing: var(--tracking-tight); display: flex; align-items: center; justify-content: center; }
.btn-primary  { background: var(--color-primary);     color: var(--color-text-white);       }
.btn-disabled { background: var(--color-bg-disabled); color: var(--color-text-placeholder); cursor: default; }
```

```html
<button class="btn btn-primary">버튼 텍스트</button>
<button class="btn btn-disabled" disabled>버튼 텍스트</button>
```

---

### 12. Status Badge

발급 이력 등 처리 상태를 표시하는 뱃지. 완료·실패·진행 3종.

```css
.badge          { flex-shrink: 0; display: inline-flex; align-items: center; height: 22px; padding: 0 var(--space-sm); border-radius: var(--radius-badge); font-size: var(--font-body4); font-weight: var(--weight-medium); white-space: nowrap; }
.badge-done     { color: var(--color-primary);       background: var(--color-tag-road-bg);   }
.badge-fail     { color: var(--color-error);         background: var(--color-error-bg);      }
.badge-progress { color: var(--color-text-disabled); background: var(--color-bg-unselected); }
```

```html
<span class="badge badge-done">완료</span>
<span class="badge badge-fail">실패</span>
<span class="badge badge-progress">진행중</span>
```

---

### 13. Error Area

에러·완료 화면의 일러스트 + 제목 + 보조설명 조합.

```css
.error-icon  { width: 59px; height: 51px; object-fit: contain; }
.error-title { font-size: var(--font-heading1); font-weight: var(--weight-medium); line-height: var(--lh-heading1); letter-spacing: -0.76px; color: var(--color-text-default); text-align: center; }
.error-sub   { font-size: var(--font-heading6); font-weight: var(--weight-regular); line-height: var(--lh-heading6); letter-spacing: -0.52px; color: var(--color-text-placeholder); text-align: center; }
```

```html
<div style="display:flex; flex-direction:column; align-items:center; gap:16px;">
  <img class="error-icon" src="../../../design/icons/icon/error.svg" alt="">
  <p class="error-title">에러 제목</p>
  <p class="error-sub">보조 설명 텍스트</p>
</div>
```

---

### 14. Illust Image

브랜드 일러스트 이미지 표시 영역. 완료·대기 화면 중앙에 사용.

```css
.illust { width: 106px; height: 77px; object-fit: contain; }
```

```html
<img class="illust" src="../../../design/icons/illust/phone.svg" alt="">
```

---

### 15. Section

컨텐츠 묶음 단위. 레이블 + 입력/내용 조합에 사용.

```css
.section       { display: flex; flex-direction: column; gap: 10px; }
.section-label { font-size: var(--font-body2); font-weight: var(--weight-regular); line-height: var(--lh-body2); letter-spacing: -0.56px; color: var(--color-text-default); }
```

```html
<div class="section">
  <span class="section-label">레이블</span>
  <!-- 입력 필드 또는 콘텐츠 -->
</div>
```

---

### 16. Verify Box

인증번호 입력 필드. 플레이스홀더 텍스트 + 타이머 카운트다운이 한 줄에 표시됨.

```css
.verify-box         { width: 100%; height: var(--input-height); border: 1px solid var(--color-border-default); border-radius: var(--radius-default); display: flex; align-items: center; justify-content: space-between; padding: 0 15px; }
.verify-placeholder { font-size: var(--font-body1); font-weight: var(--weight-regular); color: var(--color-text-placeholder); letter-spacing: -0.6px; }
.verify-timer       { font-size: var(--font-heading6); font-weight: var(--weight-regular); color: var(--color-primary); letter-spacing: -0.52px; }
```

```html
<div class="verify-box">
  <span class="verify-placeholder">인증번호 6자리 입력</span>
  <span class="verify-timer">3:00</span>
</div>
```

---

### 17. Certificate Card

인증 수단 선택 그리드 카드. 2열 그리드로 배치.

```css
.cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); padding-bottom: var(--page-margin); }
.cert-card { display: flex; align-items: center; gap: 15px; padding: var(--space-xxl) 13px; border: 1px solid var(--color-border-default); border-radius: var(--radius-default); cursor: pointer; min-width: 0; transition: border-color 0.15s, border-width 0.1s; }
.cert-card.selected { border: 2px solid var(--color-primary); padding: calc(var(--space-xxl) - 1px) 12px; }
.cert-icon { width: 50px; height: 50px; border-radius: var(--radius-default); flex-shrink: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.cert-icon img { width: 100%; height: 100%; object-fit: cover; }
.cert-icon.with-border { border: 1px solid var(--color-border-default); border-radius: 16px; }
.cert-name { font-size: var(--font-body2); font-weight: var(--weight-medium); color: var(--color-text-org); line-height: var(--lh-body2); min-width: 0; word-break: keep-all; }
```

```html
<div class="cert-grid">
  <div class="cert-card selected">
    <div class="cert-icon with-border">
      <img src="../../../design/icons/illust/phone.svg" alt="휴대폰인증">
    </div>
    <span class="cert-name">휴대폰인증</span>
  </div>
  <div class="cert-card">
    <div class="cert-icon">
      <img src="../../../design/ci png/카카오톡.png" alt="카카오톡">
    </div>
    <span class="cert-name">카카오톡</span>
  </div>
</div>
```

---

## 아이콘 사용법

아이콘은 `icons.js`가 `i[data-icon]`을 자동 치환합니다.

```html
<i data-icon="아이콘명"></i>
<i data-icon="아이콘명" data-size="36"></i>
```

| `data-icon` 값 | 설명 |
|---------------|------|
| `arrowBack` | 뒤로가기 화살표 |
| `close` | X 닫기 |
| `chevronDown` | 아래 꺾쇠 |
| `chevronRight` | 오른쪽 꺾쇠 |
| `chevronDouble` | 이중 꺾쇠 (위아래 방향 전환) |
| `chart` | 단계 인디케이터 차트 아이콘 |
| `search` | 돋보기 |
| `refresh` | 새로고침 |
| `circleCheck` | 원형 체크 |

---

## 토큰 주요 변수 참조

| 분류 | 변수 | 값 |
|------|------|----|
| **색상** | `--color-primary` | #2B5AFE |
| | `--color-error` | #FF4949 |
| | `--client-blue` | #2288EE |
| | `--client-blue-light` | #EAF5FF |
| | `--color-dim` | rgba(0,0,0,0.70) |
| **폰트** | `--font-heading1` | 19px |
| | `--font-heading4` | 15px |
| | `--font-body2` | 14px |
| | `--font-heading6` | 13px |
| **굵기** | `--weight-regular` | 400 |
| | `--weight-medium` | 500 |
| | `--weight-bold` | 700 |
| **반경** | `--radius-default` | 8px |
| | `--radius-sheet-top` | 18px |
| | `--radius-circle` | 50% |
