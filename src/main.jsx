import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'tailboot-lite/css/responsive.css';
import DashboardPage from './DashboardPage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<DashboardPage/>} />
    </Routes>
  </BrowserRouter>
)
