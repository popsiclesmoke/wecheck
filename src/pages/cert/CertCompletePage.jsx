import Header from '../../components/Header'

const RESULT_LIST = [
  { id: 1, img: '/img/ic_cert_list_01.png', issuer: '질병관리청', name: '주민등록등본', status: '완료' },
  { id: 2, img: '/img/ic_cert_list_02.png', issuer: '대법원', name: '가족관계증명서 외 4건', status: '완료' },
  { id: 3, img: '/img/ic_cert_list_03.png', issuer: '국민건강보험공단', name: '건강·장기요양 보험료 납부확인서', status: '완료' },
]

export default function CertCompletePage() {
  return (
    <div className="wrap">
      <Header showBack={false} />
      <div className="container">
        <div className="content cont_inn">
          <div className="scroll_yAuto">
            <div className="msgBx" style={{ paddingTop: '30px' }}>
              <div className="ic_msg">
                <img src="/img/ic_ecaComp.png" alt="" />
              </div>
              <div className="tx_msg">
                <strong>증명서 조회가 완료되었습니다</strong>
                <p>조회된 증명서가 요청 기관에<br />안전하게 전달되었습니다.</p>
              </div>
            </div>

            <hr />

            <div className="app_cert_list type2" style={{ padding: '0 0 90px' }}>
              <div className="app_cert_list_inn">
                <ul>
                  {RESULT_LIST.map((cert) => (
                    <li key={cert.id}>
                      <a href="#none">
                        <dl>
                          <dt><p><img src={cert.img} alt="" /></p></dt>
                          <dd>
                            <p className="tx_status">{cert.issuer}</p>
                            <h4>{cert.name}</h4>
                          </dd>
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
    </div>
  )
}
