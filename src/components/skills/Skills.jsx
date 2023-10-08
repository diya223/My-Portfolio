import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5 } from "react-icons/io";


import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPandas,
  SiBootstrap,
  SiDjango,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML/CSS"} value={95} />
                <ProgressBar logo={<FaReact />} name={"ReactJs"} value={88} />
                <ProgressBar logo={<IoLogoNodejs />} name={"NodeJs"} value={85}/>
                <ProgressBar logo={<SiExpress />} name={"ExpressJs"} value={86}/>
                <ProgressBar logo={<SiDjango />} name={"Django"} value={85} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiBootstrap />}
                black={"white"}
                white={"black"}
                skill={"Bootstrap"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"black"}
                white={"white"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiJavascript />}
                black={"white"}
                white={"black"}
                skill={"Javascript"}
              />
              <SkillBox
                className=""
                logo={
                  <SiPandas/>
                }
                black={"white"}
                white={"black"}
                skill={"Pandas"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;