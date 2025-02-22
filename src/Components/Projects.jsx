import { useState } from "react";
import { assets, projectsData } from "../Assets/assets";
import Project from "./Project";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [CardsToShow, setCardsToShow] = useState(1);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Projects"
      className="py-8 md:py-16"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[45px]">
            Projects{" "}
            <span className="font-extralight underline underline-offset-4 decoration-2">
              Completed
            </span>
          </h2>
          <p className="text-(--text-color) my-3 max-w-[350px] mx-auto">
            Crafting Spaces, Building Legacies—Explore Our Portfolio
          </p>
        </div>
        <div className="flex items-center justify-end my-8">
          <button
            onClick={prevProject}
            className="bg-gray-200 p-3 mr-2 rounded cursor-pointer"
          >
            <img src={assets.left_arrow} alt="previous" />
          </button>
          <button
            onClick={nextProject}
            className="bg-gray-200 p-3 mr-2 rounded cursor-pointer"
          >
            <img src={assets.right_arrow} alt="next" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / CardsToShow}%)`,
            }}
          >
            {projectsData.map((project) => {
              const { id, title, price, location, image } = project;
              return (
                <Project
                  key={id}
                  title={title}
                  price={price}
                  location={location}
                  image={image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
