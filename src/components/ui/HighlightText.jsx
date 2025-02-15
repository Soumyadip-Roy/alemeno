import React from "react";

const HighlightText = ({ text, searchTerm }) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <span key={index} className='bg-yellow-300 rounded'>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightText;
