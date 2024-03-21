import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs';
import CourseDetails from '../pages/CourseDetails';
import Login from '../pages/Login';

export const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        {/* <Route path='/courses' element={<Courses />} /> */}
        <Route path='/courses/:course' element={<CourseDetails />} />
        <Route path='/courses/:course/:lesson' element={<CourseDetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}