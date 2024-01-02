import React from "react";
import { motion } from "framer-motion";
import { Certificate } from "../../inforamation";

const Certificates = () => {
  return (
    <section className="text-gray-600 body-font bg-rose-100" id="Certificates">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Exploring the Digital Realm: My Certificates
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Explore my achievements and certifications, each representing a
            milestone in my journey of continuous learning and professional
            growth.
          </p>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 justify-center">
              {Certificate.map((data) => {
                const { id, description, img, title } = data;

                return (
                  <motion.div
                    key={id}
                    className="sm:w-1/2 mb-10 px-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="rounded-lg h-96 overflow-hidden">
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
                    <p className="leading-relaxed text-base mb-4">
                      {description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Certificates;
