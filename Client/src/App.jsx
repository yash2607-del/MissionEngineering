import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ClassroomCourse from './pages/ClassroomCourse';
import LiveOnlineCourse from './pages/LiveOnlineCourse';
import RecordedCourse from './pages/RecordedCourse';
import TestSeries from './pages/TestSeries';
import Coaching from './pages/Coaching';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import LEET from './pages/LEET';
import Placement from './pages/Placement';
import Polytechnic from './pages/Polytechnic';
import FeeStructure from './pages/FeeStructure';
import SemesterCoaching from './pages/SemesterCoaching';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/classroom-course" element={<ClassroomCourse />} />
            <Route path="/live-online-course" element={<LiveOnlineCourse />} />
            <Route path="/recorded-course" element={<RecordedCourse />} />
            <Route path="/test-series" element={<TestSeries />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leet" element={<LEET />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/polytechnic" element={<Polytechnic />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/semester-coaching" element={<SemesterCoaching />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
