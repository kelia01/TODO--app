import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Layout from './components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App />}/>
      <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
