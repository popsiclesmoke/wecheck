# WeCheck 컴포넌트 네이밍 가이드

> 기존 `wecheck-design.md` 기반으로 컴포넌트 계층 구조 및 네이밍 재정의  
> React 기준으로 작성. `variant` / `size` / `state` / `layout` props 체계 사용

---

---

> ⚠️ **필수 준수 규칙** — 아래 레이아웃 기본 규칙은 WeCheck 앱의 **모든 페이지·컴포넌트에 예외 없이 적용**됩니다.

## 🔒 레이아웃 기본 규칙 (전체 페이지 필수)

| 규칙 | 값 | 설명 |
|------|----|------|
| **기본 화면 너비** | `360px` | 모든 컴포넌트는 가로 360px 디바이스 환경 기준으로 제작 |
| **좌우 여백 (Page Margin)** | `20px` 고정 | 모든 화면의 좌우 여백은 20px 고정 원칙 |
| **주요 컴포넌트 가로 폭** | `320px` | 360px − 좌우 20px × 2 = 320px |

### 상세 규칙

**기본 화면 너비 (Target Width)**
WeCheck 모바일 앱의 모든 컴포넌트는 가로 **360px** 디바이스 환경을 기준으로 제작합니다. 이 너비를 벗어나는 레이아웃은 허용하지 않습니다.

**화면 좌우 여백 (Page Margin)**
전체 화면의 좌우 여백은 **20px 고정**을 원칙으로 합니다. 헤더 패딩 20px 적용 및 주요 컴포넌트 가로 폭 320px 적용을 통해 좌우 20px 여백을 유지합니다.

```
┌─────────────────────────────────────┐  360px
│◄─ 20px ─►│    320px    │◄─ 20px ─►│
│          │ [컴포넌트]   │          │
│          │ Button      │          │  ← width: 320px
│          │ Input       │          │  ← width: 320px
│          │ Card        │          │  ← width: 320px
└─────────────────────────────────────┘
```

### 적용 체크리스트

- [ ] 화면 컨테이너 `width: 360px` 고정
- [ ] 헤더(`MainHeader`, `BottomSheetHeader`) `padding: 0 20px`
- [ ] `Button`, `Input`, `Dropdown`, `AddressCard` `width: 320px`
- [ ] 리스트·카드 콘텐츠 영역 `padding: 0 20px`
- [ ] 하단 버튼 영역 `padding: 20px`
- [ ] 2버튼 레이아웃: 각 `width: 155px`, `gap: 10px` → 합산 320px

---

## 목차

0. [🔒 레이아웃 기본 규칙 (전체 페이지 필수)](#-레이아웃-기본-규칙-전체-페이지-필수)
1. [디자인 토큰](#1-디자인-토큰)
2. [스페이싱 시스템](#2-스페이싱-시스템)
3. [아이콘 컴포넌트](#3-아이콘-컴포넌트)
4. [버튼 컴포넌트](#4-버튼-컴포넌트)
5. [인풋 컴포넌트](#5-인풋-컴포넌트)
6. [헤더 컴포넌트](#6-헤더-컴포넌트)
7. [일러스트 컴포넌트](#7-일러스트-컴포넌트)
8. [컴포넌트 파일 구조](#8-컴포넌트-파일-구조)

---

## 1. 디자인 토큰

### 색상 토큰 (`tokens/colors.js`)

```js
export const colors = {
  // Primary
  primary:     '#2B5AFE',
  error:       '#FF4949',

  // Text
  textDefault:      '#222222',
  textOrg:          '#333333',
  textDisabled:     '#878D95',
  textPlaceholder:  '#B1B7C0',
  textWhite:        '#FFFFFF',

  // Box / Border
  borderDefault:    '#E5E8ED',
  borderSelected:   '#777777',
  borderInput:      '#DDDDDD',

  // Background
  bgDisabled:       '#EAEDF1',
  bgUnselected:     '#F5F6F8',
  bgTab:            '#F3F4F7',

  // Chart Gradient
  chart1: '#05CBC2',
  chart2: '#1BB3D0',
  chart3: '#3F8AE9',
  chart4: '#4584EC',
  chart5: '#4B7DF0',
};
```

---

### 타이포그래피 토큰 (`tokens/typography.js`)

| 토큰명 | size | weight | lineHeight | letterSpacing | 용도 |
|--------|------|--------|------------|---------------|------|
| `display1` | 22px | 500 | 32px | -0.04em | 메인 타이틀 |
| `heading1` | 19px | 500 | 26px | -0.04em | 헤더 타이틀 |
| `heading2` | 17px | 400 | 26px | -0.04em | 서브 헤더 |
| `heading4` | 15px | 500 | 22px | -0.04em | 버튼, 안내 텍스트 |
| `heading5` | 14px | 500 | 20px | -0.04em | 기관명, 종류 타이틀 |
| `heading6` | 13px | 500 | 20px | -0.04em | 소형 레이블 |
| `body1` | 15px | 400 | 20px | -0.04em | 상세 내역, 입력칸 |
| `body2` | 14px | 400 | 20px | -0.04em | 본문 설명 |
| `body4` | 12px | 400 | 100% | -0.04em | 약관 안내 |
| `caption2` | 12px | 400 | 18px | -0.04em | 에러 메시지 |

---

## 2. 스페이싱 시스템

> 스페이싱 및 레이아웃 관련 상세 규칙은 별도 파일로 분리되어 있습니다.  
> **→ [`wecheck-spacing-spec.md`](./wecheck-spacing-spec.md) 참고**

### 핵심 요약

| 규칙 | 값 |
|------|----|
| 화면 너비 | `360px` |
| 좌우 여백 | `20px` 고정 |
| 컴포넌트 유효 너비 | `320px` |
| 헤더 합산 높이 | `94px` (StatusBar 44 + MainHeader 50) |
| 기본 gap | `spacing` 토큰 참고 (`xxs: 4` ~ `xxxl: 24`) |
---

## 3. 아이콘 컴포넌트

### 컴포넌트명: `<Icon />`

**파일 위치:** `components/icons/Icon.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `name` | string | 아래 name 목록 | — | 아이콘 종류 (필수) |
| `size` | number | — | 아이콘별 기본값 | px 단위 |
| `color` | string | hex | 아이콘별 기본값 | 색상 override |

#### name 목록 및 기본 스펙

| name | 기본 크기 | 기본 색상 | 설명 |
|------|-----------|-----------|------|
| `close` | 20×20px | `#222222` | 닫기 (X 형태, 내부 15×15px) |
| `arrowBack` | 20×20px | `#222222` | 뒤로가기 화살표 |
| `search` | 20×20px | `#222222` | 돋보기 |
| `refresh` | 20×20px | `#222222` | 새로고침 |
| `check` | 16×16px | `#2B5AFE` | 체크 표시 |
| `chevronDown` | 16×16px | `#878D95` | 드롭다운 화살표 |
| `error` | 56×56px | `#FF4949` | 에러 상태 (빨간 원 + !) |
| `caution` | 59×51px | `#FFCE3C` | 경고 상태 (노란 삼각형 + !) |
| `chart` | 가변 | `#2B5AFE` | 원형 차트 |

#### 사용 예시

```jsx
<Icon name="close" />
<Icon name="arrowBack" size={24} />
<Icon name="check" color="#2B5AFE" />
<Icon name="error" />
```

---

## 4. 버튼 컴포넌트

### 3-1. `<Button />` — 기본 CTA 버튼

**파일 위치:** `components/buttons/Button.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `variant` | string | `primary` \| `disabled` | `primary` | 활성/비활성 상태 |
| `layout` | string | `single` \| `double` \| `popup` | `single` | 버튼 배치 유형 |
| `position` | string | `left` \| `right` | — | `double`일 때만 사용 |
| `label` | string | — | — | 버튼 텍스트 |
| `onPress` | func | — | — | 클릭 핸들러 |

#### 사이즈 규칙 (layout별 자동 적용)

| layout | width | height | borderRadius |
|--------|-------|--------|--------------|
| `single` | 320px | 50px | 8px |
| `double` | 155px | 50px | 8px |
| `popup` | 290px | 46px | 하단만 8px |

#### 색상 규칙 (variant별 자동 적용)

| variant | background | color |
|---------|------------|-------|
| `primary` | `#2B5AFE` | `#FFFFFF` |
| `disabled` | `#EAEDF1` | `#B1B7C0` |

#### 사용 예시

```jsx
// 단일 버튼
<Button layout="single" variant="primary" label="다음" onPress={handleNext} />
<Button layout="single" variant="disabled" label="다음" />

// 2버튼 세트
<Button layout="double" position="left"  variant="disabled" label="닫기" />
<Button layout="double" position="right" variant="primary"  label="확인" />

// 팝업 버튼
<Button layout="popup" variant="primary" label="확인" />
```

---

### 3-2. `<TabButton />` — 세그먼트 컨트롤

**파일 위치:** `components/buttons/TabButton.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `tabs` | string[] | — | — | 탭 레이블 배열 (2~4개) |
| `activeIndex` | number | — | `0` | 활성 탭 인덱스 |
| `onChange` | func | — | — | 탭 변경 콜백 |

#### 사이즈 규칙 (탭 수별 자동 적용)

| 탭 수 | 전체 너비 | 탭 1개 너비 | 외부 높이 | 활성 탭 높이 |
|-------|-----------|-------------|-----------|-------------|
| 2개 | 320px | 155px | 46px | 40px |
| 3개 | 320px | 102px | 46px | 40px |
| 4개 | 320px | 75px | 46px | 40px |

#### 색상 규칙

| 요소 | 색상 |
|------|------|
| 외부 배경 | `#F3F4F7`, radius 18px |
| 활성 탭 배경 | `#FFFFFF`, radius 15px |
| 활성 탭 텍스트 | `#222222` |
| 비활성 탭 텍스트 | `#878D95` |

#### 사용 예시

```jsx
<TabButton
  tabs={['개인', '기업']}
  activeIndex={activeTab}
  onChange={setActiveTab}
/>
<TabButton tabs={['전체', '진행중', '완료']} activeIndex={0} onChange={handleChange} />
```

---

### 3-3. `<CarrierButton />` — 통신사 선택 버튼

**파일 위치:** `components/buttons/CarrierButton.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `selected` | string | `SKT` \| `KT` \| `LGU+` \| `알뜰폰` | — | 선택된 통신사 |
| `onChange` | func | — | — | 선택 변경 콜백 |

#### 스펙

- 버튼 크기: 77×46px, radius 8px
- 배경: `#FFFFFF`, 테두리: `#E5E8ED`
- 선택 시: 테두리 `#2B5AFE` 2px

#### 사용 예시

```jsx
<CarrierButton selected={carrier} onChange={setCarrier} />
```

---

### 3-4. `<Checkbox />` — 체크박스

**파일 위치:** `components/buttons/Checkbox.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `size` | string | `M` \| `S` | `M` | 크기 |
| `checked` | bool | — | `false` | 선택 상태 |
| `onChange` | func | — | — | 변경 콜백 |
| `label` | string | — | — | 옆 텍스트 (선택) |

#### 사이즈 규칙

| size | 크기 | borderRadius |
|------|------|--------------|
| `M` | 19×19px | 4px |
| `S` | 16×16px | 3px |

#### 색상 규칙

| 상태 | 배경 | 테두리 |
|------|------|--------|
| checked | `#2B5AFE` | — |
| unchecked | transparent | `#B8BABE` |

---

### 3-5. `<Radio />` — 라디오 버튼

**파일 위치:** `components/buttons/Radio.jsx`

#### Props

| prop | type | 값 | 기본값 |
|------|------|----|--------|
| `selected` | bool | — | `false` |
| `onChange` | func | — | — |
| `label` | string | — | — |

- 크기: 20×20px, 선택/미선택 2가지 상태

---

## 5. 인풋 컴포넌트

### 4-1. `<Input />` — 기본 텍스트 인풋

**파일 위치:** `components/inputs/Input.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `state` | string | `default` \| `focused` \| `error` | `default` | 인풋 상태 |
| `placeholder` | string | — | — | 플레이스홀더 텍스트 |
| `value` | string | — | — | 입력값 |
| `onChange` | func | — | — | 변경 핸들러 |
| `errorMessage` | string | — | — | 에러 메시지 (`state="error"`일 때 하단 표시) |

#### 스펙

- 크기: 320×46px, radius 8px

#### 상태별 색상

| state | 테두리 | 텍스트 |
|-------|--------|--------|
| `default` | `#E5E8ED` | `#B1B7C0` (placeholder) |
| `focused` | `#2B5AFE` 2px | `#222222` |
| `error` | `#FF4949` | `#FF4949` |

---

### 4-2. `<VerificationInput />` — 인증번호 요청 인풋

**파일 위치:** `components/inputs/VerificationInput.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `phase` | string | `idle` \| `sent` | `idle` | 인증 단계 |
| `value` | string | — | — | 입력값 |
| `timer` | string | — | `'03:00'` | 타이머 표시값 |
| `onRequest` | func | — | — | 요청/재요청 버튼 콜백 |
| `onChange` | func | — | — | 입력 변경 핸들러 |

#### 단계별 구성

| phase | 구성 |
|-------|------|
| `idle` | 입력칸(200px) + `인증번호 요청` 버튼(110px, 비활성 회색) |
| `sent` | 입력칸 + 타이머(파란색) + `재요청` 버튼(파란색) |

---

### 4-3. `<Dropdown />` — 드롭다운 인풋

**파일 위치:** `components/inputs/Dropdown.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `layout` | string | `single` \| `double` \| `year` | `single` | 드롭다운 유형 |
| `options` | string[] | — | — | 선택 항목 리스트 |
| `value` | string \| object | — | — | 선택값 |
| `placeholder` | string | — | — | 플레이스홀더 |
| `onChange` | func | — | — | 선택 변경 콜백 |

#### layout별 구성

| layout | 구성 |
|--------|------|
| `single` | 320×46px 단일 + chevron 아이콘 |
| `double` | 156px 2개 나란히 (시도 / 시군구) |
| `year` | 년도 범위 + 월 범위 복합 |

---

### 4-4. `<SplitInput />` — 분할 인풋

**파일 위치:** `components/inputs/SplitInput.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `type` | string | `phone` \| `bizNumber` \| `rrn` \| `year` | — | 분할 유형 (필수) |
| `value` | string | — | — | 전체 값 |
| `onChange` | func | — | — | 변경 핸들러 |

#### type별 분할 구성

| type | 칸 너비 | 설명 |
|------|---------|------|
| `phone` | 90 / 95 / 95px | 전화번호 3분할 |
| `bizNumber` | 90 / 80 / 110px | 사업자등록번호 3분할 |
| `rrn` | 150px + 구분선 + 150px | 주민등록번호 앞/뒤 |
| `year` | 150px + `~` + 150px | 년도 범위 |

---

### 4-5. `<AddressInput />` — 주소 검색 인풋

**파일 위치:** `components/inputs/AddressInput.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `phase` | string | `idle` \| `result` | `idle` | 검색 단계 |
| `zipCode` | string | — | — | 우편번호 |
| `address` | string | — | — | 도로명/지번 주소 |
| `detail` | string | — | — | 상세주소 |
| `onSearch` | func | — | — | 검색 버튼 콜백 |
| `onDetailChange` | func | — | — | 상세주소 변경 핸들러 |

#### phase별 구성

| phase | 구성 |
|-------|------|
| `idle` | 회색 배경 입력칸(264px) + 돋보기 버튼(46px) |
| `result` | 우편번호(264px) + 상세주소(320px) 2줄 |

---

### 4-6. `<SearchBar />` — 검색바

**파일 위치:** `components/inputs/SearchBar.jsx`

- 하단 border만 있는 스타일 (박스 없음)
- placeholder 좌측 + 돋보기 우측 배치

#### Props

| prop | type | 설명 |
|------|------|------|
| `placeholder` | string | 플레이스홀더 텍스트 |
| `value` | string | 입력값 |
| `onChange` | func | 변경 핸들러 |

---

### 4-7. `<TwoInput />` — 좌우 균등 2분할 인풋

**파일 위치:** `components/inputs/TwoInput.jsx`

- 좌우 `flex: 1`, 간격 10px
- 각 인풋은 `<Input />` 컴포넌트 재사용

#### Props

| prop | type | 설명 |
|------|------|------|
| `leftProps` | object | 좌측 Input props |
| `rightProps` | object | 우측 Input props |

---

### 4-8. `<CISelectBox />` — CI 선택 박스

**파일 위치:** `components/inputs/CISelectBox.jsx`

- 크기: ~155px, radius 8px

| 상태 | 테두리 |
|------|--------|
| `selected` | 2px `#2B5AFE` |
| `unselected` | 1px `#E5E8ED` |

---

### 4-9. `<AddressCard />` — 주소 결과 카드

**파일 위치:** `components/inputs/AddressCard.jsx`

- 크기: 320px, padding 20px, radius 8px

| 상태 | 테두리 |
|------|--------|
| `default` | 1px `#E5E8ED` |
| `selected` | 1px `#777777` |

내부 구성:
- 우편번호 텍스트
- `도로명` 태그: 배경 `#EAECFF`, 텍스트 `#2B5AFE`
- `지번` 태그: 배경 `#EAEDF1`, 텍스트 `#222222`

---

## 6. 헤더 컴포넌트

### 5-1. `<StatusBar />` — 상태 바

**파일 위치:** `components/headers/StatusBar.jsx`

- 크기: 360×44px, 배경 `#FFFFFF`
- 좌: 시간 (Pretendard SemiBold 14px, `#000000`)
- 우: 배터리 · 와이파이 · 셀 신호 아이콘

---

### 5-2. `<MainHeader />` — 메인 헤더

**파일 위치:** `components/headers/MainHeader.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `status` | string | `default` \| `back` \| `close` | `default` | 헤더 유형 |
| `onBack` | func | — | — | 뒤로가기 콜백 |
| `onClose` | func | — | — | 닫기 콜백 |

#### status별 구성

| status | 좌 | 중앙 | 우 |
|--------|-----|------|-----|
| `default` | — | WeCheck 로고 | — |
| `back` | 뒤로가기(20px) | WeCheck 로고 | — |
| `close` | 뒤로가기(20px) | WeCheck 로고 | X(20px) |

- 스펙: 360×50px, 좌우 패딩 20px
- 로고: NanumSquare ExtraBold 19px, `#2B5AFE`

---

### 5-3. `<BottomSheetHeader />` — 바텀시트 헤더

**파일 위치:** `components/headers/BottomSheetHeader.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `size` | string | `default` \| `small` | `default` | 헤더 크기 |
| `txtStyle` | string | `default` \| `middle` | `default` | 텍스트/아이콘 배치 스타일 |
| `title` | string | — | — | 헤더 타이틀 |
| `onClose` | func | — | — | X 버튼 콜백 |

#### size별 스펙

| size | 크기 | 상단 radius |
|------|------|------------|
| `default` | 360×75px | 18px |
| `small` | 320×70px | 18px |

#### txtStyle별 구성 (`default` size만 해당)

| txtStyle | 구성 |
|----------|------|
| `default` | 좌: 타이틀 + 우: X |
| `middle` | 좌: 아이콘(15px) + 중앙: 타이틀 + 우: X |

---

## 7. 일러스트 컴포넌트

### 컴포넌트명: `<Illust />`

**파일 위치:** `components/icons/Illust.jsx`

#### Props

| prop | type | 값 | 기본값 | 설명 |
|------|------|----|--------|------|
| `name` | string | 아래 name 목록 | — | 일러스트 종류 (필수) |

#### name 목록 및 스펙

| name | 크기 | 설명 | 사용 화면 |
|------|------|------|-----------|
| `phoneSmall` | 26×32px | 파란 테두리 폰 + 하단 버튼 | 인풋/폼 내 소형 |
| `phoneLock` | 44×61px | 폰 + 자물쇠 + 노란 박스(`#FFCE3C`) | 본인인증 화면 |
| `phoneVerified` | 44×61px | 폰 + 인증완료 배지 | 인증 완료 화면 |
| `phoneChat` | 51×61px | 폰 + 파란 말풍선(`#9FE4FF`) | 카카오/문자 인증 |
| `paperCheck` | 68×76px | 서류 + 초록 체크 뱃지(31×31px) | 서류 발급 완료 |
| `paperConfirm` | 70×80px | 서류 두 장 겹친 형태 | 서류 확인 |
| `network` | 87×63px | 모니터 + 네트워크 아이콘 + 오류 뱃지 | 네트워크 오류 |

#### 사용 예시

```jsx
<Illust name="phoneLock" />
<Illust name="paperCheck" />
<Illust name="network" />
```

---

## 8. 컴포넌트 파일 구조

```
src/
├── tokens/
│   ├── colors.js          # 색상 토큰
│   └── typography.js      # 타이포그래피 토큰
│
├── components/
│   ├── icons/
│   │   ├── Icon.jsx       # UI 아이콘 + 상태 아이콘
│   │   └── Illust.jsx     # 일러스트 (phone, paper, network)
│   │
│   ├── buttons/
│   │   ├── Button.jsx     # CTA 버튼 (single / double / popup)
│   │   ├── TabButton.jsx  # 세그먼트 컨트롤 (2~4탭)
│   │   ├── CarrierButton.jsx  # 통신사 선택 버튼
│   │   ├── Checkbox.jsx   # 체크박스 (M / S)
│   │   └── Radio.jsx      # 라디오 버튼
│   │
│   ├── inputs/
│   │   ├── Input.jsx          # 기본 텍스트 인풋
│   │   ├── VerificationInput.jsx  # 인증번호 요청 인풋
│   │   ├── Dropdown.jsx       # 드롭다운 (single / double / year)
│   │   ├── SplitInput.jsx     # 분할 인풋 (phone / bizNumber / rrn / year)
│   │   ├── AddressInput.jsx   # 주소 검색 인풋
│   │   ├── SearchBar.jsx      # 검색바
│   │   ├── TwoInput.jsx       # 2분할 인풋
│   │   ├── CISelectBox.jsx    # CI 선택 박스
│   │   └── AddressCard.jsx    # 주소 결과 카드
│   │
│   └── headers/
│       ├── StatusBar.jsx          # 상태 바
│       ├── MainHeader.jsx         # 메인 헤더 (default / back / close)
│       └── BottomSheetHeader.jsx  # 바텀시트 헤더 (default / small)
```

---

## 변경 이력

| 버전 | 날짜 | 내용 |
|------|------|------|
| v1.0 | 2026-05-28 | 최초 작성. wecheck-design.md 기반 컴포넌트 구조화 및 네이밍 재정의 |
| v1.1 | 2026-05-28 | 스페이싱 시스템 추가. 실제 화면 구현 기반 간격 토큰 및 레이아웃 규칙 정의 |
| v1.2 | 2026-05-28 | 레이아웃 기본 규칙(전체 필수) 추가. 360px 기준 너비 및 20px 좌우 여백 원칙 명시 |
| v1.3 | 2026-05-28 | 스페이싱 시스템 섹션을 wecheck-spacing-spec.md로 분리, 핵심 요약만 유지 |
