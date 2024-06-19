import React from "react";
import Profile from "../assets/img/profile1-img.jpeg";
import Bar from "../components/Bar";

const About = () => {
  return (
    <div className="shadow-md shadow-gray-300 rounded-md md:p-10 p-5 flex md:flex-row flex-col md:gap-5 gap-4 md:mx-32 mx-5 md:mt-20 mt-10 bg-white">
      <div className="md:w-1/2 w-full flex flex-col gap-5 md:h-full">
        <div className="flex md:flex-row flex-col gap-5 h-1/2 items-center">
          <img
            src={Profile}
            alt="profile img"
            className="md:w-52 md:h-52 w-full h-full md:object-contain object-cover"
          />
          <div className="hidden md:flex flex-col">
            <p className="text-sm text-gray-500 ">
              <b className="text-black">Name: &nbsp;&nbsp;&nbsp;</b>
              Yogesh Tiwari
            </p>
            <p className="text-sm text-gray-500">
              <b className="text-black">Profile: &nbsp;&nbsp;</b>
              Full Stack Developer
            </p>
            <p className="text-sm text-gray-500">
              <b className="text-black">Email: &nbsp;&nbsp;&nbsp;&nbsp;</b>
              yogeshtiwari6260@gmail.com
            </p>
            <p className="text-sm text-gray-500">
              <b className="text-black">Phone: &nbsp;&nbsp;</b>
              +91 6260811979
            </p>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center">
            <p className="text-gray-800 text-lg font-semibold">
              Yogesh Tiwari{" "}
            </p>
            <b className="text-black text-sm font-bold">
              (Full Stack Developer)
            </b>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-1/2">
          <p className="font-bold text-lg">Skills</p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-bold">HTML</span>
            <Bar percentage="100%" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-bold">CSS</span>
            <Bar percentage="80%" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-bold">JAVASCRIPT</span>
            <Bar percentage="80%" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-bold">REACT</span>
            <Bar percentage="80%" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:gap-5 h-full items-center md:items-start mt-10 md:mt-0">
        <h1 className="border-b-4 pb-2 w-fit border-blue-500 text-2xl font-bold ">
          About me
        </h1>
        <p className="text-justify text-gray-500 mt-10">
          Curabitur is not the best time for the players who have read the book.
          It was an architrave, it was a layer of financing and, at the same
          time, the airline. It's a wise mass, the valley is not even from the
          kids, it's only necessary. There is no airline developer. <br />
          <br /> Mauris flatters the elit, needs the tincidunt nibh pulvinar a.
          Vivamus suscepti tortor eget felis porttitor volutpat. The building
          and the yard are more important than the vehicle element, but it is
          important to the owner. ferry at sea <br />
          <br /> There is no airline developer. Everyone wants to except, the
          price to be in lacinia, for that element. There is no airline
          developer. Mauris flatters the elit, needs the tincidunt nibh pulvinar
          a.
        </p>
      </div>
    </div>
  );
};

export default About;
