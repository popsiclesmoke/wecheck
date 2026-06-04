import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const AUTH_METHODS = [
  {
    id: 'simple',
    title: '간편인증 로그인',
    desc: '카카오, 네이버 등 스마트폰 앱을 통해 본인 인증이 가능한 쉽고 간편한 인증서',
  },
  {
    id: 'browser',
    title: '브라우저인증서',
    desc: '웹 브라우저나 클라우드에 저장하여 별도 프로그램 설치 없이 이용하는 공동인증서',
  },
  {
    id: 'finance',
    title: '금융인증서',
    desc: '금융결제원의 클라우드에 보관하여 여섯자리 숫자, 지문, 패턴 등으로 간편하게 사용하는 인증서',
  },
]

export default function AuthMethodPage() {
  const navigate = useNavigate()

  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <div className="content cont_inn">
          <div className="loading_wrap">
            <div className="cycle_wrap progress">
              <div className="cycle_inner">
                <p className="progress_box">
                  <span className="progress_txt">2/5</span>
                </p>
              </div>
            </div>
            <span>인증 수단 선택</span>
          </div>

          <hr />

          <div className="scroll_yAuto2">
            <div className="title_group">
              <div className="dsc_wrap">
                <p>
                  증명서 조회를 위해 <span className="progressStepSum">총 3번</span>의 인증을 진행합니다.<br />
                  인증 수단을 선택해 주세요.
                </p>
              </div>
            </div>

            <hr />

            <div className="methodOpt_list">
              <ul>
                {AUTH_METHODS.map((method) => (
                  <li key={method.id}>
                    <a href="#none" onClick={(e) => { e.preventDefault(); navigate('/cert/select') }}>
                      <dl>
                        <dt><h4>{method.title}</h4></dt>
                        <dd><p>{method.desc}</p></dd>
                      </dl>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
