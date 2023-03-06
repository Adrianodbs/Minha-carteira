import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignIn from '../pages/SignIn'

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
