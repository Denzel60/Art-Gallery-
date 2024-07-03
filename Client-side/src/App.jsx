import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Form/Login.jsx'
import Register from './pages/Form/Register.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        < Header />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path="/" element={< Home />} />
        </Routes>
        < Footer />
      </BrowserRouter>
    </>
  )
}

export default App
