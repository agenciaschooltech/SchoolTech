import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs';

export const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}