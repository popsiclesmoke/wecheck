# Figma HTML 캡처 워크플로우 — 프로젝트 세팅

> **Claude Code 지시사항**
> 이 파일은 새 프로젝트에서 Figma HTML 캡처 워크플로우를 세팅할 때 사용합니다.
> 아래 `[SETUP]` 섹션을 모두 채운 뒤, 하단의 **세팅 완료 후 지시사항**을 실행하세요.

---

## 이 워크플로우가 하는 일

1. HTML로 작성된 디자인 화면들을 Figma 파일에 자동으로 올림
2. 브라우저 1개를 열면 전체 화면을 순차적으로 자동 캡처하여 전송
3. 폰트는 Gothic A1(캡처) → 커스텀 폰트(플러그인 변환) 방식으로 처리

---

## [SETUP] 프로젝트 기본 정보

```
프로젝트명:          [입력]
프로젝트 루트 경로:  [입력] (예: projects/BPW_beple-wallet)
설명:               [입력] (이 프로젝트가 무엇인지 한 줄 설명)
```

---

## [SETUP] 프로젝트 구조

HTML 화면 파일들과 공통 리소스의 위치를 기입합니다.

```
HTML 화면 파일 위치:      [입력] (예: projects/BPW_beple-wallet/screens/)
디자인 토큰 CSS 파일:     projects/[PROJECT]/design/tokens.css
프로젝트 아이콘 JS 파일:  projects/[PROJECT]/icons.js
캡처 작업 파일 위치:      [입력] (예: projects/BPW_beple-wallet/screens/figma-capture/)
```

---

## [SETUP] 화면 목록

캡처할 HTML 화면 목록을 아래 표에 기입합니다.
`CSS 클래스`는 통합 캡처 HTML에서 각 화면을 구분할 클래스명입니다 (예: .s01, .s02 ...).

| # | 파일명 | 화면 이름 | CSS 클래스 |
|---|--------|----------|-----------|
| 01 | [입력] | [입력] | [입력] |
| 02 | [입력] | [입력] | [입력] |
| 03 | [입력] | [입력] | [입력] |
| ... | ... | ... | ... |

---

## [SETUP] Figma 정보

```
Figma 파일 키(fileKey):     [입력] (URL의 /design/{여기}/ 부분)
Figma 파일명:               [입력]
삽입 대상 페이지:            [입력] (예: Page 1)
디자인 가이드 파일 키:       [입력] (없으면 "없음")
```

---

## [SETUP] 폰트 정보

```
사용 중인 커스텀 폰트:   Pretendard
폰트 파일 형식:          .otf
Figma 변환 플러그인:     Pretendard Font Converter (common/tools/figma-plugin/)
```

---

## [SETUP] 캡처 타이밍 설정

기본값을 그대로 사용해도 됩니다. 폰트 로딩이 느리면 `FIGMA_DELAY`를 늘립니다.

```
FIGMA_DELAY (폰트 로딩 대기, ms): 3000   ← 변경 필요 시 수정
NAV_DELAY   (화면 간 이동 대기, ms): 9000  ← 변경 필요 시 수정
HTTP 서버 포트:                    8766   ← 충돌 시 변경
```

---

## 기술 제약 사항 (변경 불가, 참고용)

> 이 섹션은 도구(Figma capture.js)의 동작 방식에서 비롯된 제약이므로 수정하지 않습니다.

| 제약 | 내용 |
|------|------|
| 캡처 1회 제한 | `captureForDesign()`은 페이지 로드당 1회만 동작. 루프 호출 불가. |
| 서버 위치 | HTTP 서버는 반드시 **프로젝트 루트**에서 실행 (CSS 상대경로 문제) |
| 브라우저 throttling | 다수 브라우저 동시 오픈 시 background 탭 setTimeout throttle → pending 고착 |
| 커스텀 폰트 | Figma 클라우드가 로컬 폰트 미인식 → Gothic A1 캡처 후 플러그인 변환 필요 |
| fontStyle 누락 | HTML에 커스텀 폰트 직접 사용 시 Figma에서 fontStyle(Bold/SemiBold 등) 누락 |

---

## 세팅 완료 후 Claude Code 지시사항

> **Claude Code:** 위 `[SETUP]` 섹션이 모두 채워진 경우 아래 작업을 수행합니다.

1. `[SETUP]` 섹션의 내용을 바탕으로 이 파일과 **같은 폴더**에 `figma-capture-workflow.md`를 생성합니다.
2. `figma-capture-workflow.md`에는 설정 내용이 반영된 실제 작업 흐름만 포함합니다 (설정 섹션 제외).
3. 워크플로우 파일에 포함할 내용:
   - 서버 실행 명령어 (프로젝트 루트 경로 반영)
   - captureId 발급 방법
   - 캡처 파일 구조 (SCREENS 배열 포함)
   - 브라우저 실행 URL
   - 폴링 및 완료 확인 절차
   - 폰트 변환 절차 (common/tools/figma-plugin/ 참조)
4. 캡처용 HTML 통합 파일이 없는 경우, 프로젝트 구조에 맞게 새로 생성합니다.
