import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage'
import { RegisterPage } from './pages/register/RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<h1>Perfil</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/clients" element={<h1>clientes</h1>} />
        <Route path="/new-client" element={<h1>Nuevo cliente</h1>} />
        <Route path="/update-client/:id" element={<h1>actualizar cliente</h1>} />
        <Route path="/query" element={<h1>consulta clientes</h1>} />
        <Route path="/query/:id" element={<h1>consulta de cliente</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App