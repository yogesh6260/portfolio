import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import LinkIcon from "@mui/icons-material/Link";
import "../App.css";

type IProps = {
  Image: string;
  Name: string;
  Description: string;
  DemoLink: string;
};

const ProjectCard: React.FC<IProps> = ({
  Image,
  Name,
  Description,
  DemoLink,
}) => {
  const handleLink = () => {
    window.open(DemoLink, "_blank");
  };
  return (
    <div className="shadow-gray-400 relative shadow-sm w-80 rounded-md cursor-pointer transition duration-300">
      <img src={Image} alt="Project img" className="object-cover w-full" />
      <div className=" bg-white p-5 h-28 absolute bottom-5 mx-4 w-72 hidden transition duration-300">
        <div className="flex w-full items-center gap-5">
          <div className="w-[80%] flex flex-col gap-1">
            <h2 className="text-black text-lg">{Name}</h2>
            <p className="text-sm text-gray-500">{Description}</p>
          </div>
          <div className="w-[20%] flex gap-1 items-center justify-center">
            <ZoomInIcon className="text-gray-500 hover:text-blue-500" />
            <LinkIcon
              className="text-gray-500 hover:text-blue-500"
              onClick={handleLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
