// import React from 'react'
import './header.css'
import { HeaderInfo } from "../../inforamation.js";
import img from '../../assets/profile.jpeg'
// import header from "../../assets/headerImg.png";
const Header = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-slate-200" id="Home">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

            <div className="bg-hsl-224-89-60">
              <svg
                className="home__blob"
                viewBox="0 0 479 467"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                  />
                  <image x="50" y="60" width="360" xlinkHref={img} />
                </g>
              </svg>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-[4rem] text-[4rem] mb-4 font-medium text-gray-900">
              {HeaderInfo.heading}
            </h1>
            <p className="mb-8 leading-relaxed">{HeaderInfo.aboutMe}</p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
