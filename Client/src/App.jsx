import React, { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const ClassroomCourse = lazy(() => import('./pages/ClassroomCourse'));
const LiveOnlineCourse = lazy(() => import('./pages/LiveOnlineCourse'));
const RecordedCourse = lazy(() => import('./pages/RecordedCourse'));
const TestSeries = lazy(() => import('./pages/TestSeries'));
const Coaching = lazy(() => import('./pages/Coaching'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const LEET = lazy(() => import('./pages/LEET'));
const Placement = lazy(() => import('./pages/Placement'));
const Polytechnic = lazy(() => import('./pages/Polytechnic'));
const FeeStructure = lazy(() => import('./pages/FeeStructure'));
const SemesterCoaching = lazy(() => import('./pages/SemesterCoaching'));
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

import ProtectedRoute from './auth/ProtectedRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  const hideFooter =
    location.pathname === '/login' ||
    location.pathname === '/admin-dashboard';

  const hideHeader = 
    location.pathname === '/login' || 
    location.pathname === '/admin-dashboard';

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      {!hideHeader && <Header />}

      <main className="main-content">
        <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Navigate to="/login" replace />} />

            <Route path="/student-dashboard" element={<Navigate to="/admin-dashboard" replace />} />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
