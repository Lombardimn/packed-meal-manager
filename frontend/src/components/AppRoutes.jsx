import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { RegisterPage } from '../pages/register/RegisterPage'
import { HomePage } from '../pages/home/HomePage'
import { Management } from '../pages/management/manager'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/management" element={<Management />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<h1>Perfil</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/clients" element={<HomePage/>} />
        <Route path="/new-client" element={<h1>Nuevo cliente</h1>} />
        <Route path="/update-client/:id" element={<h1>actualizar cliente</h1>} />
        <Route path="/query" element={<h1>consulta clientes</h1>} />
        <Route path="/query/:id" element={<h1>consulta de cliente</h1>} />
      </Routes>
    </BrowserRouter>
  )
}