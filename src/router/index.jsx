import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs';
import CourseDetails from '../pages/CourseDetails';
import Login from '../pages/Login';
import CoursesShowcase from '../pages/CoursesShowcase';
import MyCourses from '../pages/MyCourses';

export const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas sem autenticação */}
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/courses' element={<Courses />} /> */}

        {/* Rotas com autenticação */}
        <Route path='/courses/:course' element={<CourseDetails />} />
        <Route path='/courses/:course/:lesson' element={<CourseDetails />} />
        <Route path='/courses-showcase' element={<CoursesShowcase />} />
        <Route path='/my-courses' element={<MyCourses />} />
      </Routes>
    </BrowserRouter>
  )
}