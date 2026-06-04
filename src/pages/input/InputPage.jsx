import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function InputPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', birth: '', phone: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const isValid = form.name && form.birth && form.phone

  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <div className="content cont_inn">
          <div className="loading_wrap">
            <div className="cycle_wrap progress">
              <div className="cycle_inner">
                <p className="progress_box">
                  <span className="progress_txt">1/5</span>
                </p>
              </div>
            </div>
            <span>정보 입력</span>
          </div>

          <hr />

          <div className="scroll_yAuto2" style={{ paddingBottom: '90px' }}>
            <div className="layout_frmTemplate">
              <div className="registation_card">
                <div className="frm2_group">
                  <label htmlFor="name">이름</label>
                  <div className="frm2_control">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="이름을 입력해 주세요"
                    />
                  </div>
                </div>

                <div className="frm2_group" style={{ marginTop: '20px' }}>
                  <label htmlFor="birth">생년월일</label>
                  <div className="frm2_control">
                    <input
                      type="text"
                      id="birth"
                      name="birth"
                      value={form.birth}
                      onChange={handleChange}
                      placeholder="예) 19901231"
                      maxLength={8}
                    />
                  </div>
                </div>

                <div className="frm2_group" style={{ marginTop: '20px' }}>
                  <label htmlFor="phone">휴대폰번호</label>
                  <div className="frm2_control">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="예) 01012345678"
                      maxLength={11}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bt_fix_wrap">
            <button
              onClick={() => navigate('/auth-method')}
              className={`bt_b100${isValid ? '' : ' disabled'}`}
              disabled={!isValid}
            >
              <span>다음</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
