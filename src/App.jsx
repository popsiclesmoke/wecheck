import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import TermsPage from './pages/terms/TermsPage'
import AuthMethodPage from './pages/auth/AuthMethodPage'
import CertSelectPage from './pages/cert/CertSelectPage'
import CertLoadingPage from './pages/cert/CertLoadingPage'
import CertRequestPage from './pages/cert/CertRequestPage'
import CertViewLoadingPage from './pages/cert/CertViewLoadingPage'
import CertCompletePage from './pages/cert/CertCompletePage'
import InputPage from './pages/input/InputPage'
import NetworkErrorPage from './pages/error/NetworkErrorPage'
import SessionExpiredPage from './pages/error/SessionExpiredPage'
import AuthCompletePage from './pages/error/AuthCompletePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/auth-method" element={<AuthMethodPage />} />
        <Route path="/cert/select" element={<CertSelectPage />} />
        <Route path="/cert/loading" element={<CertLoadingPage />} />
        <Route path="/cert/request" element={<CertRequestPage />} />
        <Route path="/cert/view" element={<CertViewLoadingPage />} />
        <Route path="/cert/complete" element={<CertCompletePage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/error/network" element={<NetworkErrorPage />} />
        <Route path="/error/session" element={<SessionExpiredPage />} />
        <Route path="/auth/complete" element={<AuthCompletePage />} />
      </Routes>
    </BrowserRouter>
  )
}
