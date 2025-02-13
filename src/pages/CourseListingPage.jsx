import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/coursesSlice";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";

function CourseListingPage() {
  const dispatch = useDispatch();
  const {
    list: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Fetch courses
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [courses, dispatch]);

  // Filtered courses
  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  // Search
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCourses(courses);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = courses.filter(
        (course) =>
          course.name.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      );
      setFilteredCourses(filtered);
    }
  };

  // a utility function to shuffle the courses :)
  const shuffleCourses = (courses) => {
    for (let i = courses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [courses[i], courses[j]] = [courses[j], courses[i]];
    }
    return courses;
  };

  return (
    <div className='container flex flex-col mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Courses</h2>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading courses...</p>}
      {!loading && error && <p>Error loading courses: {error}</p>}
      {!loading && !error && (
        <>
          {filteredCourses.length ? (
            <div>
              {shuffleCourses([...filteredCourses]).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p>No courses found.</p>
          )}
        </>
      )}
    </div>
  );
}

export default CourseListingPage;
