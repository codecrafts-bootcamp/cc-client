/* eslint-disable arrow-body-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import CourseDetails from '../pages/courseDetails';
import Courses from '../pages/courses';
import Home from '../pages/home';
import Jobs from '../pages/jobs';
import NotFound from '../pages/notFound';
import Pricing from '../pages/pricing';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="courses/:courseId" element={<CourseDetails />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;