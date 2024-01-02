import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../inforamation";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font" id="Projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Exploring the Digital Realm: My Portfolio Projects
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Dive into a showcase of my digital endeavors, where each project
            tells a unique story of innovation and craftsmanship. From crafting
            immersive web experiences to delving into cutting-edge technologies,
            my projects reflect a journey of continuous learning, passion, and a
            commitment to delivering exceptional results in the dynamic world of
            web development.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 -mb-10 justify-center">
          {Project.map((projectInfo) => {
            const {
              id,
              description,
              img,
              tech,
              title,
              gitHubeRepo,
              liveProject,
            } = projectInfo;

            return (
              <motion.div
                key={id}
                className="sm:w-1/2 mb-10 px-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <motion.img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={img}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  {title}
                </h2>
                <span className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">
                  {tech}
                </span>
                <p className="leading-relaxed text-base mb-4">{description}</p>

                <a
                  href={liveProject}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2 "
                >
                  Live Project
                </a>
                <a
                  href={gitHubeRepo}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  GitHub Repository
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
