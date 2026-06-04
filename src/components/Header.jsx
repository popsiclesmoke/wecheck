import { useNavigate } from 'react-router-dom'

export default function Header({ onBack, onClose, showBack = true, showClose = true }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) onBack()
    else navigate(-1)
  }

  const handleClose = () => {
    if (onClose) onClose()
  }

  return (
    <div className="header">
      <div className="header_inn">
        <div className="left">
          {showBack && (
            <button onClick={handleBack} className="bt_back">
              <span className="blind">이전</span>
            </button>
          )}
        </div>
        <div className="center">
          <h1><img src="/img/logo_WeCheck.png" alt="WeCheck" style={{ height: '15px' }} /></h1>
        </div>
        <div className="right">
          {showClose && (
            <button onClick={handleClose} className="bt_popClose">
              <span className="blind">종료</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
