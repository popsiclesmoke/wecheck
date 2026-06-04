import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const CERT_LIST = [
  { id: 1, img: '/img/ic_cert_list_01.png', issuer: '질병관리청', name: '주민등록등본' },
  {
    id: 2,
    img: '/img/ic_cert_list_02.png',
    issuer: '대법원',
    name: '가족관계증명서 외 4건',
    sub: ['가족관계증명서', '주민등록표등본', '주민등록표초본', '초중등학교졸업(예정)증명', '출입국사실증명'],
  },
  { id: 3, img: '/img/ic_cert_list_03.png', issuer: '국민건강보험공단', name: '건강·장기요양 보험료 납부확인서' },
]

export default function MainPage() {
  const navigate = useNavigate()

  return (
    <div className="wrap">
      <Header showBack={false} />
      <div className="container">
        <div className="content cont_inn">
          <div className="scroll_yAuto">
            <div className="title_group">
              <div className="tit_wrap">
                <h3>
                  <span className="brandName">{'{벤츠파이낸셜}'}</span>에서<br />
                  <span className="productName">{'{중소기업청년자금대출}'}</span>을 위한<br className="break" />
                  증명서 조회를 진행합니다
                </h3>
              </div>
            </div>

            <hr />

            <div>
              <div className="app_cert_list">
                <div className="app_cert_list_inn">
                  <ul>
                    {CERT_LIST.map((cert) => (
                      <CertItem key={cert.id} cert={cert} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr />

            <div className="bt_fix_wrap">
              <button onClick={() => navigate('/terms')} className="bt_b100">
                <span>시작하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CertItem({ cert }) {
  const hasSubList = cert.sub && cert.sub.length > 0

  return (
    <li className={hasSubList ? 'js_wrap' : ''}>
      <a href="#none" className={hasSubList ? 'selected js_click' : ''}>
        <dl>
          <dt><p><img src={cert.img} alt="" /></p></dt>
          <dd>
            <p className="tx_status">{cert.issuer}</p>
            <h4>{cert.name}</h4>
          </dd>
        </dl>
      </a>
      {hasSubList && (
        <div className="layer js_show">
          <ul>
            {cert.sub.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
    </li>
  )
}
