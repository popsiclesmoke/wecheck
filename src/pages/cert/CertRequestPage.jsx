import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function CertRequestPage() {
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
                  <span className="progress_txt">4/5</span>
                </p>
              </div>
            </div>
            <span>인증 요청</span>
          </div>

          <hr />

          <div className="scroll_yAuto2">
            <div className="selftCerti_wrap" style={{ paddingBottom: 0 }}>
              <div className="pf_im">
                <img src="/img/ic_authStep1.png" alt="" />
              </div>
              <div className="tx_wrap" style={{ marginTop: '20px', textAlign: 'center' }}>
                <strong>카카오톡으로<br />인증 요청을 보냈습니다</strong>
                <p>카카오톡 앱을 열어 인증을 완료해 주세요.</p>
              </div>
            </div>

            <div className="msgLoadingBx">
              <div className="tx_msg" style={{ minHeight: 'auto', textAlign: 'center' }}>
                <p>인증 대기 중...</p>
              </div>
            </div>

            <div className="btTxt_fix_wrap">
              <a href="#none" className="bt_link1" onClick={(e) => { e.preventDefault(); navigate('/cert/select') }}>
                <span>다른 인증 수단으로 변경</span>
              </a>
            </div>
          </div>

          <div className="bt_fix_wrap">
            <button onClick={() => navigate('/cert/view')} className="bt_b100">
              <span>인증 완료</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
