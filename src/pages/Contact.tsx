import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "../App.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mt-20 md:mx-32 mx-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold after:border-b-2 after:border-blue-500 text-center">
        contact
      </h1>
      <div className="mt-4 border-b-4 border-blue-500 w-14 " />
      <p className="text-gray-700 mt-10">
        His needs result from something he wants to escape from
      </p>
      <div className="shadow-lg shadow-slate-300 w-full md:h-32 md:p-10 p-5 flex md:flex-row flex-col md:items-center items-start gap-3 md:justify-between md:mt-14 mt-10">
        <div className="flex gap-5 items-center justify-center">
          <div className="md:w-16 md:h-16 w-10 h-10 md:p-2 p-1 rounded-full flex items-center justify-center border-blue-500 border contact-icon-container">
            <LocationOnOutlinedIcon
              className="contact-icon"
              fontSize="medium"
            />
          </div>
          <div>
            <h1 className="text-black md:text-lg text-sm md:font-semibold font-bold">
              Address
            </h1>
            <p className="text-sm text-gray-600">Satna, M.P, INDIA</p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          {" "}
          <div className="md:w-16 md:h-16 w-10 h-10 md:p-2 p-1 rounded-full flex items-center justify-center border-blue-500 border contact-icon-container">
            <PhoneOutlinedIcon className="contact-icon" fontSize="medium" />
          </div>
          <div>
            <h1 className="text-black md:text-lg text-sm md:font-semibold font-bold">
              Telephone
            </h1>
            <p className="text-sm text-gray-600">+91 6260811979</p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          {" "}
          <div className="md:w-16 md:h-16 w-10 h-10 md:p-2 p-1 rounded-full flex items-center justify-center border-blue-500 border contact-icon-container">
            <EmailOutlinedIcon className="contact-icon" fontSize="medium" />
          </div>
          <div>
            <h1 className="text-black md:text-lg text-sm md:font-semibold font-bold">
              Email
            </h1>
            <p className="text-sm text-gray-600">yogeshtiwari6260@gmail.com</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
