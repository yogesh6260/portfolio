import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = document.querySelectorAll("section");
  const topButton = document.getElementById("top");
  let currentSection: string = "";

  window.onscroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
        setActiveSection(currentSection);
      }
    });
    if (currentSection === "home") {
      topButton?.classList.add("hidden");
    } else {
      topButton?.classList.remove("hidden");
    }
  };

  const handleNav = (sectionId: string) => {
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight: number =
        document.getElementById("header")?.offsetHeight ?? 0;
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="md:overflow-auto overflow-hidden md:w-auto md:h-auto w-screen">
      <nav
        id="header"
        className="md:flex justify-between items-center z-10 bg-black h-20 w-full px-32 fixed hidden"
      >
        <h1 className="text-white font-bold text-3xl">DevFolio</h1>
        <ul className="flex items-center gap-6">
          <li
            className={`${
              activeSection === "home" ? "nav-link-active" : "nav-link"
            }`}
          >
            <a onClick={() => handleNav("home")}>Home</a>
          </li>
          <li
            className={`${
              activeSection === "about" ? "nav-link-active" : "nav-link"
            }`}
          >
            <a onClick={() => handleNav("about")}>About</a>
          </li>
          <li
            className={`${
              activeSection === "services" ? "nav-link-active" : "nav-link"
            }`}
          >
            <a onClick={() => handleNav("services")}>Services</a>
          </li>
          <li
            className={`${
              activeSection === "portfolio" ? "nav-link-active" : "nav-link"
            }`}
          >
            <a onClick={() => handleNav("portfolio")}>Portfolio</a>
          </li>
          <li
            className={`${
              activeSection === "contact" ? "nav-link-active" : "nav-link"
            }`}
          >
            <a onClick={() => handleNav("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
        <Stats />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <a
        id="top"
        onClick={handleTop}
        className="hidden md:w-12 md:h-12 w-8 h-8 md:p-2 p-1 rounded-full bg-blue-600 fixed right-2 bottom-5 flex items-center justify-center cursor-pointer"
      >
        <ArrowUpwardIcon htmlColor="white" />
      </a>
    </div>
  );
}

export default App;
