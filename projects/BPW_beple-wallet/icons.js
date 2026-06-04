/**
 * BPW 공유 아이콘 컴포넌트
 * 모든 아이콘은 currentColor 기반으로 사용처에서 color로 제어
 * 크기는 style="width:100%;height:100%"로 통일, 사용처에서 부모 크기로 제어
 */
const BPW_ICONS = {
  /* ── 기존 아이콘 ── */
  checkCircle: `<svg style="width:100%;height:100%" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill="var(--color-primary)" fill-opacity="0.1"/>
    <svg x="16" y="22" width="32" height="22" viewBox="0 0 31.968 22.1756" preserveAspectRatio="none" overflow="visible">
      <path d="M31.3351 0.635376C31.1411 0.434409 30.9086 0.274571 30.6515 0.165405C30.3944 0.0562395 30.1179 0 29.8386 0C29.5593 0 29.2827 0.0562395 29.0256 0.165405C28.7685 0.274571 28.536 0.434409 28.342 0.635376L11.9271 17.0494L3.61414 8.73639C3.21711 8.33936 2.67855 8.11627 2.11707 8.11627C1.55558 8.11627 1.01715 8.33936 0.620117 8.73639C0.223088 9.13342 7.11175e-08 9.67191 0 10.2334C-7.11172e-08 10.7949 0.223088 11.3334 0.620117 11.7304L10.4301 21.5394C10.6187 21.7481 10.8508 21.9131 11.1099 22.0228C11.369 22.1325 11.6489 22.1842 11.9301 22.1744C12.211 22.1827 12.4905 22.1302 12.7494 22.0206C13.0083 21.911 13.2404 21.7469 13.4301 21.5394L31.3351 3.62537C31.5353 3.43127 31.6946 3.19895 31.8033 2.94214C31.9121 2.68533 31.968 2.40925 31.968 2.13037C31.968 1.85149 31.9121 1.57548 31.8033 1.31866C31.6946 1.06185 31.5353 0.829473 31.3351 0.635376Z" fill="var(--color-primary)"/>
    </svg>
  </svg>`,

  /* ── 네비게이션 아이콘 ── */

  /** 뒤로가기 화살표 (헤더) — stroke 기반 chevron left */
  arrowBack: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 뒤로가기 화살표 (filled) — PIN 키패드용 */
  arrowBackFilled: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M20 11H7.83L12.42 6.41L11 5L4 12L11 19L12.41 17.59L7.83 13H20V11Z" fill="currentColor"/></svg>`,

  /** 긴 왼쪽 화살표 — 금액 입력 등 */
  arrowLeftLong: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M21 12H3M9 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 오른쪽 화살표 (가이드 단계 표시) */
  arrowRight: `<svg style="width:100%;height:100%" viewBox="0 0 32 16" fill="none"><path d="M2 8h24M20 2l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 닫기(X) */
  close: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

  /** 셰브론 오른쪽 (목록 화살표) */
  chevronRight: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 셰브론 아래 (드롭다운, 접기/펼치기) */
  chevronDown: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /* ── 체크 아이콘 ── */

  /** 체크마크 (일반) — 완료 화면, 결제 완료 등 */
  check: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 체크마크 (대형, 32px 뷰박스) — 완료 상태 */
  checkLg: `<svg style="width:100%;height:100%" viewBox="0 0 32 32" fill="none"><path d="M7 16.5l6 6 12-13" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 체크마크 (32px 뷰박스, 심플) — KYC/가입 완료 */
  checkMd: `<svg style="width:100%;height:100%" viewBox="0 0 32 32" fill="none"><path d="M6 16L13 23L26 9" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 체크마크 (소형 12px) — 체크박스, 라디오 */
  checkSm: `<svg style="width:100%;height:100%" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 체크마크 (13px 전체선택) — 약관 전체동의 */
  checkAll: `<svg style="width:100%;height:100%" viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5.5 10L11 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 체크마크 (14px 유형선택) — 사용자 유형 선택 */
  checkOption: `<svg style="width:100%;height:100%" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /* ── 액션 아이콘 ── */

  /** 플러스 (충전) — 퀵액션 */
  plus: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 아래 화살표 (출금) — 퀵액션 */
  arrowDown: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="19 12 12 19 5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 위 화살표 (송금/전송) — 거래내역 */
  arrowUp: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><line x1="12" y1="19" x2="12" y2="5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="5 12 12 5 19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 번개/플래시 (즉시결제) */
  flash: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 복사 (소형) — 주소 복사 등 */
  copy: `<svg style="width:100%;height:100%" viewBox="0 0 12 12" fill="none"><rect x="3.5" y="0.5" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="0.5" y="3.5" width="8" height="9" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>`,

  /** 복사 (대형) — 환불 주소 등 */
  copyLg: `<svg style="width:100%;height:100%" viewBox="0 0 14 14" fill="none"><rect x="4" y="1" width="9" height="10" rx="1.2" stroke="currentColor" stroke-width="1.4"/><rect x="1" y="4" width="9" height="10" rx="1.2" stroke="currentColor" stroke-width="1.4" fill="var(--color-bg)"/></svg>`,

  /** 새로고침/변환 */
  refresh: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><polyline points="23 4 23 10 17 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="1 20 1 14 7 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 백스페이스/삭제 — PIN 입력 키패드 */
  backspace: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" stroke-width="2"/><line x1="18" y1="9" x2="12" y2="15" stroke="currentColor" stroke-width="2"/><line x1="12" y1="9" x2="18" y2="15" stroke="currentColor" stroke-width="2"/></svg>`,

  /* ── 탭바 아이콘 ── */

  /** 홈 */
  home: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 알림/벨 */
  bell: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 신용카드/결제 */
  creditCard: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 바 차트 */
  barChart: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 더보기 (가로 점 3개) */
  moreHorizontal: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="12" r="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="5" cy="12" r="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /* ── 정보/상태 아이콘 ── */

  /** 정보 (i) — 안내 텍스트 옆 */
  infoCircle: `<svg style="width:100%;height:100%" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M8 7v4M8 5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

  /** 경고 원형 — 빈 상태 표시 */
  alertCircle: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 경고 삼각형 — 잔액 부족 등 */
  alertTriangle: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 캘린더 — 날짜 선택 */
  calendar: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 시계 (소형) — 타이머/유효기간 */
  clock: `<svg style="width:100%;height:100%" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.4"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,

  /* ── 커머스/결제 아이콘 ── */

  /** 쇼핑백/상점 — 가맹점 아이콘 */
  shoppingBag: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M3 3h18l-2 9H5L3 3z" stroke="currentColor" stroke-width="2"/><path d="M5 12l-1 9h16l-1-9" stroke="currentColor" stroke-width="2"/></svg>`,

  /** 쇼핑카트 (바퀴 포함) — 결제 확인 가맹점 */
  shoppingCart: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M3 3h18l-2 9H5L3 3z" stroke="currentColor" stroke-width="2"/><path d="M5 12l-1 9h16l-1-9" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="20" r="1" stroke="currentColor" stroke-width="2"/><circle cx="15" cy="20" r="1" stroke="currentColor" stroke-width="2"/></svg>`,

  /* ── 설정/기능 아이콘 ── */

  /** 지문/생체인증 */
  fingerprint: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 지구본/언어 */
  globe: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 자물쇠/보안 */
  lock: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 로그아웃 */
  logOut: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="16 17 21 12 16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 수정/편집 */
  edit: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 전화 */
  phone: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** 문서/파일 — 빈 거래 내역 */
  fileText: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="10 9 9 9 8 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  /** QR코드 (미니) — QR 스캔 버튼 */
  qrCode: `<svg style="width:100%;height:100%" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="2" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="2" y="13" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="4" y="4" width="3" height="3" fill="currentColor"/><rect x="15" y="4" width="3" height="3" fill="currentColor"/><rect x="4" y="15" width="3" height="3" fill="currentColor"/><path d="M14 14h1v1h-1zM16 14h1v1h-1zM14 16h1v1h-1zM17 16h2v2h-2zM16 16h1" stroke="currentColor" stroke-width="1.2"/></svg>`,

  /** 영수증/명세서 (소형) */
  receipt: `<svg style="width:100%;height:100%" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M4.5 4.5h5M4.5 7h5M4.5 9.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,

  /* ── 상태바 아이콘 ── */

  /** 와이파이 — 상태바 */
  wifi: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>`,

  /** 배터리 — 상태바 */
  battery: `<svg style="width:100%;height:100%" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`
};

document.querySelectorAll('[data-icon]').forEach(function(el) {
  var name = el.dataset.icon;
  if (BPW_ICONS[name]) el.innerHTML = BPW_ICONS[name];
});
