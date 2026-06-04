# Figma Capture Workflow — WCK_we-check / SRCH_search

> 생성일: 2026-06-01
> 대상 도메인: SRCH_search (2개 화면)

---

## 1. HTTP 서버 실행

프로젝트 루트(`d:\RAY_AX_PROJECT_v1.0.0`)에서 아래 명령어를 실행합니다.

```
npx http-server . -p 8766 --cors
```

---

## 2. captureId 발급

브라우저 콘솔 또는 capture HTML 파일에서 자동 발급됩니다.
별도 발급 없이 캡처 URL에 접속하면 자동 처리됩니다.

---

## 3. SCREENS 배열 (SRCH_search — 2개)

```js
const SCREENS = [
  { id: "SRCH-001", file: "projects/WCK_we-check/domains/SRCH_search/screens/D00.기관검색.html",         name: "기관 검색·선택" },
  { id: "SRCH-002", file: "projects/WCK_we-check/domains/SRCH_search/screens/D01.증명서종류선택.html",   name: "증명서 종류 선택" },
];
```

---

## 4. 브라우저 실행 URL

HTTP 서버 실행 후 아래 URL을 브라우저에서 엽니다.

```
http://localhost:8766/projects/WCK_we-check/domains/SRCH_search/screens/index.html
```

각 개별 화면 직접 접근:
```
http://localhost:8766/projects/WCK_we-check/domains/SRCH_search/screens/D00.기관검색.html
http://localhost:8766/projects/WCK_we-check/domains/SRCH_search/screens/D01.증명서종류선택.html
```

---

## 5. Figma 업로드 정보

```
Figma 파일 키:   vdaqrCXUx1e3ENpKYqi2Ee
Figma 파일명:    Wecheck
업로드 페이지:   SRCH_search (신규 생성)
캡처 크기:       360 × 680 px
```

---

## 6. 완료 확인 절차

1. 브라우저에서 캡처 URL 접속 확인
2. 2개 화면이 순차적으로 캡처되는지 확인
3. Figma `SRCH_search` 페이지에 2개 프레임 업로드 확인
4. 완료 후 "완료" 입력

---

## 7. 폰트 변환 절차

캡처 완료 후 Figma에서 아래 플러그인을 실행합니다.

```
1. Figma 데스크탑 앱 실행
2. Plugins → Development → Pretendard Font Converter 실행
3. "Pretendard로 변환" 버튼 클릭
   (플러그인 위치: common/tools/figma-plugin/)
```
