import React from "react";

type Iprops = {
  percentage: string;
};

const Bar: React.FC<Iprops> = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-300 h-3">
      <div className={`w-[${percentage}] h-full bg-blue-500`} />
    </div>
  );
};

export default Bar;
