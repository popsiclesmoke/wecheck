import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function CertViewLoadingPage() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          navigate('/cert/complete')
          return 100
        }
        return p + 5
      })
    }, 150)
    return () => clearInterval(interval)
  }, [navigate])

  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <div className="content cont_inn">
          <div className="selftCerti_wrap d_flex">
            <div className="pf_im">
              <img src="/img/ic_animateEca.png" alt="" />
            </div>
            <div className="tx_wrap" style={{ marginTop: '30px', textAlign: 'center' }}>
              <strong>증명서를 조회하고 있습니다</strong>
              <p>잠시만 기다려 주세요.</p>
            </div>
            <div style={{ marginTop: '20px', width: '100%', maxWidth: '200px' }}>
              <div style={{
                height: '4px',
                background: '#e5e8ed',
                borderRadius: '2px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: '#2b5afe',
                  borderRadius: '2px',
                  transition: 'width 0.15s',
                }} />
              </div>
              <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '13px', color: '#878d95' }}>
                {progress}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
