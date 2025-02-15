import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/coursesThunk";
import CourseCard from "../components/core/CourseCard";
import SearchBar from "../components/ui/SearchBar";
import LoadingSkeleton from "../components/ui/LoadingSkeleton";

function CourseListingPage() {
  const dispatch = useDispatch();
  const {
    list: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch courses
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [courses, dispatch]);

  // Filter courses when search term changes
  useEffect(() => {
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
  }, [searchTerm, courses]);

  return (
    <div className='container flex flex-col mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Courses</h2>
      <SearchBar onSearch={setSearchTerm} />

      {loading ? (
        <LoadingSkeleton count={6} />
      ) : error ? (
        <p>Error loading courses: {error}</p>
      ) : filteredCourses.length ? (
        <div>
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}

export default CourseListingPage;
