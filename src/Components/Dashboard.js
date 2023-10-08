import React from "react";
import HTML5 from "../Assets/HTML5.png";
import css3 from "../Assets/Css 3.png";
import JavaScript from "../Assets/jslogo.png";
import reactLogo from "../Assets/React.png";
import node from "../Assets/Node js.png";
import tailwind from "../Assets/Tailwind.jpg";
import mongodb from "../Assets/mongodb.png";
import python from "../Assets/Python.png";
import myPhoto from "../Assets/myphoto.jpg";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
} from "feather-icons-react/build/IconComponents";
import PPH from "../Assets/PPH.png";
import Resume from "../Assets/Documents/Resume.pdf"
import fiver from "../Assets/fiverr.png";
const Dashboard = () => {
  return (
    <>
      <div className="mainContainer flex  h-screen max-sm:flex max-sm:flex-col max-sm:flex-nowrap">
        <div className="infoDIv flex flex-col justify-between mt-10  w-[130rem] max-sm:w-screen max-sm:text-center ">
          <div className="flex flex-col justify-between h-20 overflow-hidden">
            <div className="text-5xl max-sm:text-4xl space-y-5 py-4 text-center text-gray-500  animate-text-scroll">
              <h1>Hi..</h1>
              <h1>नमस्ते</h1>
              <h1>你好</h1>
              <h1>Hola...</h1>
              <h1>Bonjour...</h1>
              <h1>やあ..</h1>
              <h1>Hello...</h1>
              <h1>Hai...</h1>
              <h1>Hallo...</h1>
              <h1>أهلاً..</h1>
            </div>
          </div>
          <h1 className="text-6xl max-sm:text-5xl text-center">
            I Am Rutvik..
          </h1>
          <p className="p-10 text-center text-md font-semibold text-gray-700 max-sm:flex-nowrap">
            I Am Self Learned,Passionate Coder withover <b>1.5 years</b> of
            Experience.I Completed Many Freelance Project As Well As Company
            Project with Good Response And Desired Output.If you Are Seeking For
            A Good <b>MERN Developer</b> Than Your Search Is over Now...
          </p>
          <div className="flex justify-center space-x-5 my-3">
            
            <a href={Resume} download="Rutvik_MERN_Resume"
             
              className="border font-semibold p-2 rounded-md hover:bg-gray-700 hover:text-white "
            >
              Download CV
            </a>
            <button className="border font-semibold p-2 rounded-md  hover:bg-gray-700 hover:text-white  transition-opacity">
              Contact Me
            </button>
          </div>
          <div className="h-64 w-full  bg-gray-300">
            {/* Skill logos */}
            <h1 className="text-md font-bold  text-center mt-2">Key Skills</h1>
            <h1 className="text-2xl font-medium text-gray-500 text-center">
              This Is My Playground....
            </h1>
            <div className=" Logos mt-6  flex justify-around w-full space-x-3 text-gray-500 max-sm:flex max-sm:flex-wrap max-sm:justify-evenly overflow-hidden">
              <div className="w-fit h-fit flex justify-between flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="html_logo"
                  src={HTML5}
                />
                <span className="text-lg text-center font-medium">HTML 5</span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={css3}
                />
                <span className="text-lg text-center font-medium">CSS 3</span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={JavaScript}
                />
                <span className="text-lg text-center font-medium">
                  JavaScript
                </span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={reactLogo}
                />
                <span className="text-lg text-center font-medium">
                  React Js
                </span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={node}
                />
                <span className="text-lg text-center font-medium">Node Js</span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={mongodb}
                />
                <span className="text-lg text-center font-medium">MongoDB</span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={tailwind}
                />
                <span className="text-lg text-center font-medium">
                  Tailwind
                </span>
              </div>
              <div className="w-fit h-fit flex flex-col ">
                <img
                  className="w-14 h-14 rounded-full mx-auto object-cover"
                  alt="css3_logo"
                  src={python}
                />
                <span className="text-lg text-center font-medium">Python</span>
              </div>
            </div>
            {/* Social Media  */}
          </div>
        </div>
        <div className="relative lg:rounded-tl-[27rem]  imgDiv bg-gray-500 max-h-screen w-full p-2">
          {/* Image Here */}
          <img
            className="m-auto w-72 border-2 border-white h-80 object-cover rounded-full"
            src={myPhoto}
            alt="Rutvik"
          />
          <div>
            <h1 className="text-md font-bold  text-center mt-6">
              Social Media
            </h1>
            <h1 className="   text-2xl font-medium text-white  text-center">
              Let's Connect....
            </h1>
            <div className="socialIcons mt-2 flex justify-center space-x-3">
              <Link
                className="text-white border rounded-md p-1 h-9 w-9 hover:text-gray-500 hover:bg-white cursor-pointer"
                to={"mailto:r.amarcholi@gmail.com"}
              >
                <Mail />
              </Link>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rutvik-amarcholi-4462981a3/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="text-white border  rounded-md p-1 h-9 w-9 hover:text-gray-500 hover:bg-white cursor-pointer" />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/Rutvikk04", "_blank")
                }
              >
                <Github className="text-white border  rounded-md p-1 h-9 w-9 hover:text-gray-500 hover:bg-white cursor-pointer" />
              </button>
            </div>
          </div>
          {/* freelance Accounts */}
          <div className=" w-full mt-4 ">
            <h1 className="text-md font-bold  text-center mt-2">
              Remote Works
            </h1>
            <h1 className="   text-2xl font-medium text-white  text-center">
              Hire Me As Freelancer....
            </h1>
            <div className="socialIcons mt-2 flex justify-center space-x-3">
              <Link
                className="text-white  cursor-pointer"
                to={"mailto:r.amarcholi@gmail.com"}
              >
                <img
                  className="rounded-full h-12 w-12"
                  src={PPH}
                  alt="peoplePerHour"
                />
              </Link>
              <Link
                className="text-white  object-cover cursor-pointer"
                to={"mailto:r.amarcholi@gmail.com"}
              >
                <img
                  className="rounded-full h-12 w-12"
                  src={fiver}
                  alt="fiverr"
                />
              </Link>
              <Link
                className="text-white  object-cover cursor-pointer"
                to={"mailto:r.amarcholi@gmail.com"}
              >
                <svg
                  className="w-12 h-12 bg-white rounded-full"
                  viewBox="0 0 512 153"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096.075-.3c1.536-8.62 6.409-23.089 21.402-23.089 11.244 0 20.39 9.146 20.39 20.39-.038 11.207-9.183 20.353-20.39 20.353zm0-61.395c-19.154 0-33.996 12.444-40.03 32.909-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993 21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359 22.601 0 41.005-18.516 41.005-41.118 0-22.564-18.404-40.967-41.005-40.967z"
                    fill="#6FDA44"
                  />
                  <path d="M244.043 37.557l13.306 53.636 14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636 13.306-53.636h16.754v.038zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042 0 22.677 18.403 41.043 41.042 41.043 22.677 0 41.08-18.366 41.08-41.043 0-22.676-18.403-41.042-41.08-41.042zm0 65.218c-13.343 0-24.138-10.795-24.138-24.138 0-13.344 10.832-24.138 24.138-24.138 13.344 0 24.138 10.794 24.138 24.138 0 13.306-10.794 24.138-24.138 24.138zm90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392h-7.084zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578V115.03h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065l-30.697-41.754z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
