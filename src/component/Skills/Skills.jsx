// import React from 'react'
import { Technology } from "../../inforamation";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
const Skills = () => {
  const controls = useAnimation();

  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust the threshold based on your scroll trigger point
      if (scrollY > 200) {
        controls.start({ opacity: 1, y: 0, scale: 1 });
      } else {
        controls.start({ opacity: 0, y: 50, scale: 0.5 });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <section className="text-gray-600 body-font bg-rose-100" id="Skills">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {Technology.map((tech) => {
            const { id, title, img, description } = tech;

            return (
              <>
                <motion.div
                  ref={elementRef}
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  animate={controls}
                  transition={{ duration: id / 2 }}
                >
                  <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      {id}
                    </div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        {/* <span>{img}</span> */}
                        <img className="w-12 h-12" src={img} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                          {title}
                        </h2>
                        <p className="leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
