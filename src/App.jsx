// import React from 'react'

import Certificates from "./component/Certificates/Certificates";
import ContactMe from "./component/ContactMe/ContactMe";
import Education from "./component/Education/Education";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import NavBar from "./component/NavBar/NavBar";
import Projects from "./component/Project/Projects";
import Skills from "./component/Skills/Skills";
import {ScrollContainer} from "react-scroll-motion";

const App = () => {
  return (
    <>
      <ScrollContainer>
        <NavBar />
        <Header />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <ContactMe />
        <Footer />
        {/* <Animation /> */}
      </ScrollContainer>
    </>
  );
};

export default App;
