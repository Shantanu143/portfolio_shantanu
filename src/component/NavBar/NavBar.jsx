// import React from 'r/eact'
import logo from "../../assets/nameLogo.png";
import SocialMedia from "../../container/socialMedia.jsx/SocialMedia";
const NavBar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-72" src={logo} />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="#Home">
              Home
            </a>
            <a className="mr-5 hover:text-gray-900" href="#Skills">
              Skills
            </a>
            <a className="mr-5 hover:text-gray-900" href="#Projects">
              Projects
            </a>
            <a className="mr-5 hover:text-gray-900" href="#Certificates">
              Certificates
            </a>
            <a className="mr-5 hover:text-gray-900" href="#Education">
              Education
            </a>
            <a className="mr-5 hover:text-gray-900" href="#ContactMe">
              Contact Me
            </a>
          </nav>
          <SocialMedia />
        </div>
      </header>
    </>
    // <div>NavBar</div>
  );
};

export default NavBar;
