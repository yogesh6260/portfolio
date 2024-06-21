import ProjectCard from "../components/ProjectCard";

// project img
import Project1 from "../assets/img/portfolio/app-1.jpg";
import Project2 from "../assets/img/portfolio/app-2.jpg";
import Project3 from "../assets/img/portfolio/app-3.jpg";
import Project4 from "../assets/img/portfolio/books-1.jpg";
import Project5 from "../assets/img/portfolio/books-2.jpg";
import Project6 from "../assets/img/portfolio/books-3.jpg";
import Project7 from "../assets/img/portfolio/branding-1.jpg";
import Project8 from "../assets/img/portfolio/branding-2.jpg";
import Project9 from "../assets/img/portfolio/branding-3.jpg";
import Project10 from "../assets/img/portfolio/product-1.jpg";
import Project11 from "../assets/img/portfolio/product-2.jpg";
import Project12 from "../assets/img/portfolio/product-3.jpg";

const Portfolio = () => {
  return (
    <div className="mt-20 md:mx-32 mx-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold after:border-b-2 after:border-blue-500 text-center">
        portfolio
      </h1>
      <div className="mt-4 border-b-4 border-blue-500 w-14 " />
      <p className="text-gray-700 mt-10">
        His needs result from something he wants to escape from
      </p>
      <div className="flex flex-wrap gap-6 mt-16 w-full">
        <ProjectCard
          Image={Project1}
          Name="App 1"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project2}
          Name="App 2"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project3}
          Name="App 3"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project4}
          Name="Book 1"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project5}
          Name="Book 2"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project6}
          Name="Book 3"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project7}
          Name="Branding 1"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project8}
          Name="Branding 2"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project9}
          Name="Branding 3"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project10}
          Name="Product 1"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project11}
          Name="Product 2"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
        <ProjectCard
          Image={Project12}
          Name="Product 3"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          DemoLink=""
        />
      </div>
    </div>
  );
};

export default Portfolio;
