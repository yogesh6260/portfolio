import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../App.css";

const Footer = () => {
  return (
    <div className="w-full h-56 bg-blue-500 flex flex-col items-center gap-3 justify-center mt-5 text-white">
      <p>&copy; Copyright DevFolio All Rights Reserved</p>
      <div className="flex items-center justify-center gap-2">
        <div className="footer-social-icon-container">
          <XIcon className="footer-social-icon" />
        </div>
        <div className="footer-social-icon-container">
          <FacebookIcon className="footer-social-icon" />
        </div>
        <div className="footer-social-icon-container">
          <InstagramIcon className="footer-social-icon" />
        </div>
        <div className="footer-social-icon-container">
          <LinkedInIcon className="footer-social-icon" />
        </div>
        <div className="footer-social-icon-container">
          <GitHubIcon className="footer-social-icon" />
        </div>
      </div>
      <p className="text-sm mt-10">
        Designed by{" "}
        <a className="text-slate-300" href="#about">
          Yogesh Tiwari ❤️
        </a>
      </p>
    </div>
  );
};

export default Footer;
