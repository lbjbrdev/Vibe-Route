import { Routes, Route, Navigate } from 'react-router-dom'

import { SignInPage } from '../pages/SignIn'
import { SignUpPage } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}
