import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const CERTS = [
  { id: 'kakao', img: '/img/ic_authMeans_01.png', name: '카카오톡' },
  { id: 'naver', img: '/img/ic_authMeans_02.png', name: '네이버' },
  { id: 'pass', img: '/img/ic_authMeans_03.png', name: 'PASS' },
  { id: 'kb', img: '/img/ic_authMeans_04.png', name: 'KB국민은행' },
  { id: 'payco', img: '/img/ic_authMeans_05.png', name: 'PAYCO' },
  { id: 'samsung', img: '/img/ic_authMeans_06.png', name: '삼성패스' },
]

export default function CertSelectPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <div className="content cont_inn">
          <div className="loading_wrap">
            <div className="cycle_wrap progress">
              <div className="cycle_inner">
                <p className="progress_box">
                  <span className="progress_txt">3/5</span>
                </p>
              </div>
            </div>
            <span>인증서 선택</span>
          </div>

          <hr />

          <div className="scroll_yAuto2" style={{ paddingBottom: '90px' }}>
            <div className="title_group">
              <div className="dsc_wrap">
                <p>사용하실 간편인증 앱을 선택해 주세요.</p>
              </div>
            </div>

            <div className="cardOpt_list">
              <ul>
                {CERTS.map((cert) => (
                  <li key={cert.id}>
                    <a
                      href="#none"
                      className={selected === cert.id ? 'on' : ''}
                      onClick={(e) => { e.preventDefault(); setSelected(cert.id) }}
                    >
                      <dl>
                        <dt><img src={cert.img} alt="" /></dt>
                        <dd><h4>{cert.name}</h4></dd>
                      </dl>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bt_fix_wrap">
            <button
              onClick={() => navigate('/cert/request')}
              className={`bt_b100${selected ? '' : ' disabled'}`}
              disabled={!selected}
            >
              <span>다음</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
