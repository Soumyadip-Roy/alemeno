import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ExpandableSyllabus from "../components/ui/ExpandableSyllabus";
import StatusBadge from "../components/ui/StatusBadge";
import { fetchCourses } from "../store/coursesThunk";
import LoadingSkeleton from "../components/ui/LoadingSkeleton";

function CourseDetailsPage() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const {
    list: courses,
    currentCourse,
    loading,
  } = useSelector((state) => state.courses);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [courses, dispatch]);

  // useEffect(() => {
  //   dispatch(fetchCourseById(courseId));
  // }, [courseId, dispatch]);

  const course =
    currentCourse?.id === courseId
      ? currentCourse
      : courses.find((c) => c.id === courseId || c.id === parseInt(courseId));

  return (
    <div className='container bg-white rounded flex flex-col mx-auto mt-8 p-6 shadow-lg'>
      {loading ? (
        <LoadingSkeleton />
      ) : !course ? (
        <p>Course not found!</p>
      ) : (
        <>
          <h2 className='text-3xl font-bold mb-4'>{course.name}</h2>
          <p className='text-gray-600 mb-4'>Instructor: {course.instructor}</p>
          <p className='mb-6'>{course.description}</p>
          <div className='border p-4 rounded mb-6 flex flex-col md:flex-row'>
            <div className='flex-1'>
              <p className='mb-2'>
                <strong>Enrollment Status:</strong>{" "}
                <StatusBadge status={course.enrollmentStatus} />
              </p>
              <p className='mb-2'>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className='mb-2'>
                <strong>Schedule:</strong> {course.schedule}
              </p>
              <p className='mb-2'>
                <strong>Location:</strong> {course.location}
              </p>
              <div className='mb-2'>
                <strong>Pre-requisites:</strong>
                <ul className='list-disc pl-5'>
                  {course.prerequisites.map((pre, index) => (
                    <li key={index}>{pre}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:ml-4 mt-4 md:mt-0'>
              <img
                src={course.thumbnail}
                alt={course.name}
                className='w-128 h-64 object-cover rounded'
              />
            </div>
          </div>
          <ExpandableSyllabus syllabus={course.syllabus} />
        </>
      )}
    </div>
  );
}

export default CourseDetailsPage;
