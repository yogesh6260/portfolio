import React from "react";

type Iprops = {
  Icon: string;
  Title: string;
  Description: string;
};

const ServiceCard: React.FC<Iprops> = ({ Icon, Title, Description }) => {
  return (
    <div
      className="shadow-sm shadow-white p-10 rounded-lg w-80 h-80 hover:border-b-8 hover:border-blue-500
      hover:-translate-y-2 hover:transition-all hover:duration-500 hover:ease-in-out cursor-pointer bg-white"
    >
      <div className="bg-blue-500 rounded-full p-2 w-16 h-16 flex items-center justify-center accent-white text-white">
        <img src={Icon} alt="Icon" className="object-contain w-8 h-8 invert" />
      </div>
      <h1>{Title}</h1>
      <p>{Description}</p>
    </div>
  );
};

export default ServiceCard;
