import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Educations } from "../../inforamation";

const Education = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      if (!element) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const elementTop = element.offsetTop;

      // Adjust the threshold based on your scroll trigger point
      if (scrollY > elementTop - window.innerHeight) {
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
    <section className="bg-slate-200 dark:text-gray-100" id="Education">
      <div className="container mx-auto flex flex-col p-6">
        <h2 className="py-4 text-3xl font-bold text-center">Education</h2>
        <div className="divide-y dark:divide-gray-700">
          {Educations.map((data) => {
            const {
              degreeName,
              id,
              img,
              instituteName,
              marks,
              yearOfCompletion,
            } = data;

            return (
              <motion.div
                key={id}
                ref={elementRef}
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={controls}
                transition={{ duration: id / 2 }}
              >
                <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    <img src={img} alt={instituteName} className="w-16 h-16" />
                  </div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="text-xs tracki uppercase dark:text-violet-400">
                      {yearOfCompletion}
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      {degreeName}
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      {marks}
                    </span>
                    <span className="dark:text-gray-300">{instituteName}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
