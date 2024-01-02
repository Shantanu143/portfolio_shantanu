// import React from 'react'
import { HeaderInfo } from "../../inforamation.js";
const Header = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="Home">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {/* Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten */}
              {HeaderInfo.heading}
            </h1>
            <p className="mb-8 leading-relaxed">{HeaderInfo.aboutMe}</p>
            <div className="flex justify-center">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
