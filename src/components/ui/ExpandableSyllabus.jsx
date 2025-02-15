import React, { useState } from "react";

function ExpandableSyllabus({ syllabus }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='my-4'>
      <button
        onClick={toggleExpand}
        className='text-blue-500 mb-8 flex items-center'>
        <span className='mr-2'>{isExpanded ? "⤴️" : "⤵️"}</span>
        <span>{isExpanded ? "Hide Syllabus" : "Show Syllabus"}</span>
      </button>

      {isExpanded && (
        <ul className='list-disc pl-5'>
          {syllabus.map((item, index) => (
            <li
              key={item.week}
              className={`mb-2 p-2 rounded ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}>
              <strong>
                Week {item.week}: {item.topic}
              </strong>
              <p className='text-gray-700'>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpandableSyllabus;
