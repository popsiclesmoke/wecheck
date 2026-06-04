import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function CertLoadingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/cert/request'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <div className="content cont_inn">
          <div className="selftCerti_wrap d_flex">
            <div className="pf_im">
              <img src="/img/ic_animateCheck.png" alt="" />
            </div>
            <div className="tx_wrap" style={{ marginTop: '30px', textAlign: 'center' }}>
              <strong>인증서를 불러오는 중입니다</strong>
              <p>잠시만 기다려 주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
