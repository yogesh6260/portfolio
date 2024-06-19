import React from "react";
import "../App.css";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="shadow-lg shadow-slate-300 w-full h-auto md:p-10 p-7 my-10 bg-white">
      <form method="POST" onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex md:flex-row flex-col gap-5 w-full">
          <input
            type="text"
            className="input-container md:w-1/2 w-full"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="input-container md:w-1/2 w-full 
        "
            placeholder="Your email"
          />
        </div>
        <div className="w-full flex flex-col gap-5 mt-5">
          <input
            type="text"
            placeholder="subject"
            className="input-container"
          />
          <textarea placeholder="message" className="input-container h-40" />
        </div>
        <button className="hover:bg-blue-600 w-40 md:h-12 h-10 p-5 bg-blue-500 items-center justify-center flex rounded-3xl self-center mt-10 text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
