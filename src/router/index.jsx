import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CourseDetails from "../pages/CourseDetails";
import Login from "../pages/Login";
import CoursePage from "../pages/CoursesPage";
import ResumeCourse from "../pages/ResumeCourse";
import Contact from "../pages/Contact";
import Plans from "../pages/Plans";
import AreaDoAluno from "../pages/AreaDoAluno";

export const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses/:resume" element={<ResumeCourse />} />
        <Route path="/courses/:course" element={<CourseDetails />} />
        <Route path="/courses/:course/:lesson" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans/:course" element={<Plans />} />
        <Route path="/area_do_aluno" element={<AreaDoAluno />} />
      </Routes>
    </BrowserRouter>
  );
};
