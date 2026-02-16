import React from 'react';
import './Courses.css';
import CourseNavigation from '../components/CourseNavigation';

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-heading-container">
        <h2 className="courses-heading">Courses We Offer</h2>
      </div>
      <CourseNavigation />
    </div>
  );
};

export default Courses;
