import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function NetworkErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="wrap">
      <Header showBack={false} />
      <div className="container">
        <div className="content cont_inn">
          <div className="msgBx" style={{ paddingTop: '30px' }}>
            <div className="ic_msg">
              <img src="/img/ic_networkError.png" alt="" />
            </div>
            <div className="tx_msg">
              <strong>네트워크 오류</strong>
              <p>인터넷 연결을 확인하고<br />다시 시도해 주세요.</p>
            </div>
          </div>
          <div className="bt_fix_wrap">
            <button onClick={() => navigate('/')} className="bt_b100">
              <span>다시 시도</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
