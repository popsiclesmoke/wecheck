import Header from '../../components/Header'

export default function AuthCompletePage() {
  return (
    <div className="wrap">
      <Header showBack={false} showClose={false} />
      <div className="container">
        <div className="content cont_inn">
          <div className="msgBx" style={{ paddingTop: '30px' }}>
            <div className="ic_msg">
              <img src="/img/ic_check.png" alt="" />
            </div>
            <div className="tx_msg">
              <strong>인증이 완료되었습니다</strong>
              <p>모든 인증이 완료되었습니다.<br />창을 닫아도 됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
