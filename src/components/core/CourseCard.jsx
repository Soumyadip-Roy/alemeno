import React from "react";
import { Link } from "react-router-dom";
import HighlightText from "../ui/HighlightText";

const CourseCard = ({ course, searchTerm }) => {
  return (
    <div className='bg-white shadow-md rounded p-4 mb-4 flex flex-col md:flex-row items-center transform transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]'>
      <img
        src={course.thumbnail}
        alt={course.name}
        className='w-64 h-36 object-cover rounded mr-4'
      />
      <div className='flex-1'>
        <h3 className='text-xl font-bold'>
          <HighlightText text={course.name} searchTerm={searchTerm} />
        </h3>
        <p className='text-gray-600'>
          Instructor:{" "}
          <HighlightText text={course.instructor} searchTerm={searchTerm} />
        </p>
        <p className='text-gray-600'>Status: {course.enrollmentStatus}</p>
        <p className='text-gray-600'>Likes: {course.likes}</p>
      </div>
      <div>
        <Link
          to={`/course/${course.id}`}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
