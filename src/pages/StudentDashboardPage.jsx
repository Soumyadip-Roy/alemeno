import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../components/ui/ProgressBar";
import { markCourseCompleted, fetchCourses } from "../store/coursesSlice";
import LoadingSkeleton from "../components/ui/LoadingSkeleton";

const loggedInStudent = {
  id: 123,
  name: "Soumyadip Roy",
};

function StudentDashboardPage() {
  const dispatch = useDispatch();
  const { list: courses, loading } = useSelector((state) => state.courses);

  //
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [courses, dispatch]);

  const enrolledCourses = courses.filter((course) =>
    course.students.some((student) => student.id === loggedInStudent.id)
  );

  const handleMarkCompleted = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div className='container flex flex-col mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Student Dashboard</h2>
      {loading && <LoadingSkeleton count={7} />}
      {!loading && enrolledCourses.length
        ? enrolledCourses.map((course) => (
            <div
              key={course.id}
              className='bg-white shadow-md rounded p-4 mb-4 flex flex-col md:flex-row items-center'>
              <img
                src={course.thumbnail}
                alt={course.name}
                className='w-42 h-24 object-cover rounded mr-4'
              />
              <div className='flex-1'>
                <h3 className='text-xl font-bold'>{course.name}</h3>
                <p className='text-gray-600'>Instructor: {course.instructor}</p>
                <p className='text-gray-600'>Due Date: {course.dueDate}</p>
                <div className='mt-2'>
                  <ProgressBar progress={course.progress} />
                </div>
              </div>
              <div className='mt-8 md:mt-14 md:ml-16'>
                {course.progress < 100 ? (
                  <button
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600m'
                    onClick={() => handleMarkCompleted(course.id)}>
                    Mark as Completed
                  </button>
                ) : (
                  <span className='text-green-600 font-bold'>Completed</span>
                )}
              </div>
            </div>
          ))
        : !loading && <p>You are not enrolled in any courses.</p>}
    </div>
  );
}

export default StudentDashboardPage;
