import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const TERMS = [
  { id: 'service', label: '서비스 이용약관 (필수)', required: true },
  { id: 'privacy', label: '개인(신용)정보 수집 및 이용 동의 (필수)', required: true },
  { id: 'third', label: '개인(신용)정보 제3자 제공 동의 (필수)', required: true },
]

export default function TermsPage() {
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState({})
  const [allAgreed, setAllAgreed] = useState(false)

  const handleAll = (checked) => {
    setAllAgreed(checked)
    const next = {}
    TERMS.forEach((t) => { next[t.id] = checked })
    setAgreed(next)
  }

  const handleOne = (id, checked) => {
    const next = { ...agreed, [id]: checked }
    setAgreed(next)
    setAllAgreed(TERMS.every((t) => next[t.id]))
  }

  const allRequired = TERMS.filter((t) => t.required).every((t) => agreed[t.id])

  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <div className="content cont_inn">
          <div className="scroll_yAuto" style={{ paddingBottom: '90px' }}>
            <div className="title_group">
              <div className="tit_wrap">
                <h3>서비스 이용을 위한<br />약관에 동의해 주세요</h3>
              </div>
            </div>

            <div className="termsCond_wrap">
              <div className="termsCond_head">
                <div className="frm_group">
                  <label>
                    <input
                      type="checkbox"
                      checked={allAgreed}
                      onChange={(e) => handleAll(e.target.checked)}
                    />
                    <i></i>
                    <span>전체 동의</span>
                  </label>
                </div>
              </div>

              <div className="termsCond_list type2" style={{ marginTop: '10px' }}>
                <ul>
                  {TERMS.map((term) => (
                    <li key={term.id} className="agg_list_lv1">
                      <div className="frm_group">
                        <label>
                          <input
                            type="checkbox"
                            checked={!!agreed[term.id]}
                            onChange={(e) => handleOne(term.id, e.target.checked)}
                          />
                          <i></i>
                          <span>{term.label}</span>
                        </label>
                      </div>
                      <a href="#none" className="agg_list_lv1_item">
                        <span className="blind">약관 보기</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bt_fix_wrap">
            <button
              onClick={() => navigate('/auth-method')}
              className={`bt_b100${allRequired ? '' : ' disabled'}`}
              disabled={!allRequired}
            >
              <span>다음</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
