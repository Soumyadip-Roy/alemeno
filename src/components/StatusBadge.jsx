import React from "react";

const StatusBadge = ({ status }) => {
  let bgColor, textColor;
  textColor = "text-white font-bold";

  switch (status.toLowerCase()) {
    case "closed":
      bgColor = "bg-red-500";

      break;
    case "in progress":
      bgColor = "bg-green-500";
      break;
    case "open":
      bgColor = "bg-blue-500";
      break;
    default:
      bgColor = "bg-gray-500";
  }

  return (
    <span className={`px-2 py-1 rounded ${bgColor} ${textColor}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
