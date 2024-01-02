// certificates
import msCertificate from "../src/assets/Certificates/Microsoft.jpg";
import googleCertificate from "../src/assets/Certificates/Google.jpg";
import devTownCertificate from "../src/assets/Certificates/devTown.jpg";
import greateLearningCertificate from "../src/assets/Certificates/GreatLearning.jpg";

// logos
import htmlLogo from "../src/assets/tech_logo/html5.svg";
import cssLogo from "../src/assets/tech_logo/css3-alt.svg";
import jsLogo from "../src/assets/tech_logo/js.svg";
import bootstrapLogo from "../src/assets/tech_logo/bootstrap.svg";
import tailwindLogo from "../src/assets/tech_logo/tailwindcss.svg";
import reactLogo from "../src/assets/tech_logo/react.svg";
import angularLogo from "../src/assets/tech_logo/angular.svg";
import nodeLogo from "../src/assets/tech_logo/node-js.svg";

// projects

import vst from "../src/assets/projects/vst.png";
import coffe from "../src/assets/projects/coffe.png";
import gpt from "../src/assets/projects/gpt.png";
import clothes from "../src/assets/projects/clothes.png";

// education

import finish from "../src/assets/edu/graducation.svg";
import college from "../src/assets/edu/college.svg";
import school from "../src/assets/edu/school.svg";

export const HeaderInfo = {
  heading: "Welcome to Shantanu Nirpal's Portfolio",
  aboutMe:
    "Hello, I'm Shantanu Nirpal, a dedicated Front-End Web Developer with a passion for creating engaging and responsive digital experiences. Proficient in HTML, CSS, and JavaScript, I specialize in turning design concepts into seamless, interactive websites.I've delved into the world of JavaScript frameworks, mastering both Angular and React.js to build dynamic and efficient user interfaces. Constantly evolving, I am currently expanding my skill set to include Express.js and MongoDB, venturing into the realm of backend development to create robust and scalable web applications.  In my journey as a developer, I've had the pleasure of working on diverse projects that showcase my commitment to clean code, intuitive design, and user-centric functionality. From crafting visually appealing layouts to implementing complex functionalities, each project reflects my dedication to staying at the forefront of technology.  Feel free to explore my portfolio and witness the fusion of creativity and code. If you have a project in mind or simply want to connect, I'm always eager to collaborate on exciting ventures. Thank you for visiting, and I look forward to the opportunity of bringing your digital ideas to life.",
};

export const Technology = [
  {
    id: 1,
    title: "HTML",
    description:
      "Mastering HTML has been the cornerstone of my journey. As the fundamental markup language of the web, it has empowered me to structure content seamlessly, laying the groundwork for captivating and accessible web experiences.",
    img: htmlLogo,
  },
  {
    id: 2,
    title: "CSS",
    description:
      "CSS has been my palette for bringing creativity to life. With a keen eye for design, I've harnessed the power of CSS to style web applications, ensuring a visually appealing and responsive user interface.",

    img: cssLogo,
  },
  {
    id: 3,
    title: "Bootstrap",
    description:
      "Bootstrap has played a pivotal role in my development toolkit. Its grid system and pre-designed components have allowed me to create sleek, mobile-friendly interfaces efficiently, enhancing the user experience across various devices.",

    img: bootstrapLogo,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    description:
      "Embracing a utility-first approach, Tailwind CSS has revolutionized my styling workflow. Its modular and customizable nature empowers me to craft unique designs with speed and precision, ensuring a tailored and efficient development process.",

    img: tailwindLogo,
  },
  {
    id: 5,
    title: "JavaScript",
    description:
      "During my journey of learning JavaScript, I embraced the power of scripting to enhance web interactivity. From conquering basic syntax to delving into advanced frameworks, each line of code marked a milestone in my quest for proficiency in this versatile language",
    img: jsLogo,
  },
  {
    id: 6,
    title: "React.Js",
    description:
      "Venturing into the world of JavaScript frameworks, React has been my go-to for building dynamic and interactive user interfaces. Its component-based architecture has elevated the user experience of my projects, making them more scalable and maintainable.",

    img: reactLogo,
  },
  {
    id: 7,
    title: "Angular.Js",
    description:
      "Angular has been instrumental in developing structured and feature-rich web applications. Its robust framework has enabled me to create powerful single-page applications with a focus on modularity and maintainability.",
    img: angularLogo,
  },
  {
    id: 8,
    title: "Express.js and MongoDB (Learning)",
    description:
      "Currently, I am delving into the backend realm with Express.js and MongoDB. Express.js facilitates the creation of robust server-side applications, while MongoDB, a NoSQL database, provides the flexibility to handle diverse data structures. This journey into backend technologies completes my skill set, allowing me to architect end-to-end solutions for a seamless user experience.",
    img: nodeLogo,
  },
];

export const Project = [
  {
    id: 1,
    title: "VST Builder Showcase",
    tech: "HTML / CSS / JavaScript / Bootstrap",
    description:
      "Embarking on my web development journey, I collaborated with my first client to create a VST Builder website. Using HTML and CSS, I not only brought the client's vision to life but also gained invaluable insights into CSS animations, optimizing website loading times, and deploying on Hostinger hosting. The implementation of the Swiper library (Owl Carousel) added a dynamic touch, enhancing the user experience.",
    img: vst,
    liveProject: "https://vstbuildcon.com/index.html",
    gitHubeRepo: "https://github.com/Shantanu143/VST",
  },
  {
    id: 2,
    title: "Brew Haven - React Coffee Shop",
    tech: "HTML / CSS / JavaScript / React.js",
    description:
      "As part of a college mini project, I ventured into React to build 'Brew Haven,' a coffee-selling website. This project not only marked my introduction to React but also served as a platform to showcase my design and coding skills. While currently a front-end project, my future plans include implementing a backend to enhance the website's functionality and user experience.",
    img: coffe,
    liveProject: "https://shantanu143.github.io/coffee-site/",
    gitHubeRepo: "https://github.com/Shantanu143/coffee-site",
  },
  {
    id: 3,
    title: "Chat GPT Showcase",
    tech: "HTML / CSS / JavaScript / React.js",
    description:
      "Inspired by a React course, I decided to turn a Figma design into reality with the creation of ReactChat Hub. This project served as a delightful exploration of React features and file structuring. The process was not only fun but also educational, providing hands-on experience in implementing dynamic features and maintaining a clean code structure",
    img: gpt,
    liveProject: "https://master--gpt-3-openai-s.netlify.app/",
    gitHubeRepo: "https://github.com/Shantanu143/GPT-3",
  },
  {
    id: 4,
    title: "Threadify - Angular E-commerce",
    tech: "HTML / CSS / TypeScript / Angular",
    description:
      "For a purposeful hands-on learning experience, I developed Threadify, an e-commerce clothing website using Angular. This project allowed me to delve into the intricacies of structuring an Angular application, implementing TypeScript, Angular pipes, and fetching data from APIs. The result is a fully functional website showcasing not just clothes but also my mastery of Angular concepts",
    img: clothes,
    liveProject: "https://clothingbrandwebsite.netlify.app/",
    gitHubeRepo: "https://github.com/Shantanu143/Clothing-Website-",
  },
];

export const Certificate = [
  {
    id: 1,
    title: "Microsoft Learn Student Ambassador Certificate",
    description:
      "In recognition of exemplary dedication and proficiency, I received the Microsoft Learn Student Ambassador Certificate for Front-End Web Development using JavaScript and React.js. Awarded in April 2023, this certificate not only acknowledges my active participation and completion but also highlights my commitment to mastering essential skills in the dynamic field of web development. As a Microsoft Student Ambassador, I continue to leverage these skills to contribute to the ever-evolving landscape of technology.",

    img: msCertificate,
  },
  {
    id: 2,
    title: "Google DSC - KIIT Chapter Certificate",
    description:
      "I am proud to have received the Developer Student Club Google Certificate from the KIIT Chapter in May 2023. This certificate recognizes my active participation and successful completion of the Front-End Web Development using JavaScript and React.js program. Through this experience, I honed my skills, collaborated with peers, and gained insights into the latest practices in web development. Being part of the Google Developer Student Club community has enriched my learning journey, fostering an environment of innovation and collaboration.",
    img: googleCertificate,
  },
  {
    id: 3,
    title: "Devoted Supporter Recognition",
    description:
      "I am honored to have received the Certificate of Appreciation from Devtown, presented in recognition of my continuous support in helping grow our community. Awarded to Shantanu Rameshwar Nirpal, this certificate reflects a commitment to fostering collaboration, sharing knowledge, and contributing to the collective growth of the Devtown community. I am proud to be part of a community that values and acknowledges the dedication of its members.",
    img: devTownCertificate,
  },
  {
    id: 4,
    title: "Great Learning Academy - Front-End Development Certificate",
    description:
      "I am delighted to be awarded the Certificate of Completion for the free online course in Front-End Development with HTML from Great Learning Academy. Presented to Shantanu Nirpal, this certificate signifies the successful culmination of dedicated efforts in mastering essential skills in HTML. The course, completed in June 2022, has played a pivotal role in shaping my foundation in front-end development, and I am grateful for the knowledge and expertise gained through this learning experience.",
    img: greateLearningCertificate,
  },
];

export const Educations = [
  {
    id: 1,
    yearOfCompletion: "2021-2024",
    degreeName: "BACHELOR OF COMPUTER APPLICATION ",
    marks: "7.99 CGPA",
    instituteName: "Deogiri Institute Of Technology and Management Studies.",
    img: finish,
  },
  {
    id: 2,
    yearOfCompletion: "2020-2021",
    degreeName: "12TH HSC",
    marks: "85%",
    instituteName: "Raje Shahaji College ",
    img: college,
  },
  {
    id: 3,
    yearOfCompletion: "2018-2019",
    degreeName: "10TH SSC",
    marks: "78.40%",
    instituteName: "Shaneshwer Secondary School",
    img: school,
  },
];

export const ContactMeInfo = {
  phone: "+91 9284008059",
  email: "shantanunirapal@gmail.com",
  addRes: "Q5CF+PHR, Limbe Jalgaon, Maharashtra 431133",
};


