import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../components/Layout'

import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

export default function AppRoutes() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
