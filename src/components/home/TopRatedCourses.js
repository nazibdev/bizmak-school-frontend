import React from "react";

const TopRatedCourses = ({ courses }) => {
  return (
    <div className="top-rated-courses ">
      <h2 className="text-center">Top Rated Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <div key={index}>
            <h3 align="center">{course.title}</h3>
            <p>{course.description}</p>
            <p>Rating: {course.rating}/5</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedCourses;