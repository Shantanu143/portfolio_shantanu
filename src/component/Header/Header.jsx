// import React from 'react'
import { HeaderInfo } from "../../inforamation.js";
// import header from "../../assets/headerImg.png";
const Header = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-slate-200" id="Home">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
         <h1 className="title-font sm:text-[4rem] text-[4rem] mb-4 font-medium text-gray-900">
            {HeaderInfo.heading}
          </h1>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed">{HeaderInfo.aboutMe}</p>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Header;
