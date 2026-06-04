const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname);
const PORT = 8766;

const SCREENS = [
  { id: 'AUTH-001', file: 'A00.위체크메인.html' },
  { id: 'AUTH-002', file: 'T13.위체크메인_공지팝업_1개.html' },
  { id: 'AUTH-003', file: 'T13_1.위체크메인_공지팝업_스크롤.html' },
  { id: 'AUTH-004', file: 'T13_2.위체크메인_공지팝업_2개이상.html' },
  { id: 'AUTH-005', file: 'A02.위체크메인_약관동의.html' },
  { id: 'AUTH-006', file: 'Z10.서비스이용약관.html' },
  { id: 'AUTH-007', file: 'Z12.개인(신용)정보수집및이용동의.html' },
  { id: 'AUTH-008', file: 'Z13.개인(신용)정보3자제공동의.html' },
  { id: 'AUTH-009', file: 'C00.인증방식선택.html' },
  { id: 'AUTH-010', file: 'C10.간편인증서_인증서선택.html' },
  { id: 'AUTH-011', file: 'C10_1.간편인증서_인증서선택_장차법P.html' },
  { id: 'AUTH-012', file: 'C10_2.간편인증서_인증서선택_1열.html' },
  { id: 'AUTH-013', file: 'C11.간편인증서_인증서선택_로딩.html' },
  { id: 'AUTH-014', file: 'C11_1.간편인증서_PASS통신사선택_팝업.html' },
  { id: 'AUTH-015', file: 'C11_2.간편인증서_휴대폰인증통신사선택.html' },
  { id: 'AUTH-016', file: 'C12_0.간편인증서_인증서선택_인증요청.html' },
  { id: 'AUTH-017', file: 'C12_1.간편인증서_인증서선택_인증요청.html' },
  { id: 'AUTH-018', file: 'C12_2.간편인증서_인증요청_보안문자입력.html' },
  { id: 'AUTH-019', file: 'C12_3.간편인증서_인증요청_인증번호입력.html' },
  { id: 'AUTH-020', file: 'T12.간편인증서_알림미수신팝업.html' },
  { id: 'AUTH-021', file: 'E00.인증완료.html' },
  { id: 'AUTH-022', file: 'E15.세션만료.html' },
];

const SCREENS_BASE = 'projects/WCK_we-check/domains/AUTH_authentication/screens';
const OUT_DIR = path.join(ROOT, 'capture-output');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// Simple static file server
const server = http.createServer((req, res) => {
  const filePath = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' }[ext] || 'text/plain';
    res.writeHead(200, { 'Content-Type': `${mime}; charset=utf-8` });
    res.end(data);
  });
});

async function capture() {
  await new Promise(r => server.listen(PORT, r));
  console.log(`Server running on http://localhost:${PORT}`);

  const browser = await chromium.launch();
  const results = [];

  for (const { id, file } of SCREENS) {
    const url = `http://localhost:${PORT}/${SCREENS_BASE}/${encodeURIComponent(file)}`;
    const outFile = path.join(OUT_DIR, `${id}.png`);
    const page = await browser.newPage();
    await page.setViewportSize({ width: 360, height: 680 });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: 360, height: 680 } });
    await page.close();
    results.push({ id, file, path: outFile });
    console.log(`✓ ${id} — ${file}`);
  }

  await browser.close();
  server.close();
  console.log(`\n완료! ${results.length}개 캡처 → ${OUT_DIR}`);
  return results;
}

capture().catch(e => { console.error(e); process.exit(1); });
