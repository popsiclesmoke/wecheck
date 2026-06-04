import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function SessionExpiredPage() {
  const navigate = useNavigate()
  return (
    <div className="wrap">
      <Header showBack={false} />
      <div className="container">
        <div className="content cont_inn">
          <div className="msgBx" style={{ paddingTop: '30px' }}>
            <div className="ic_msg">
              <img src="/img/ic_warning.png" alt="" />
            </div>
            <div className="tx_msg">
              <strong>세션이 만료되었습니다</strong>
              <p>장시간 미사용으로 세션이 만료되었습니다.<br />처음부터 다시 시작해 주세요.</p>
            </div>
          </div>
          <div className="bt_fix_wrap">
            <button onClick={() => navigate('/')} className="bt_b100">
              <span>처음으로</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
