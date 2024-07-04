import React from "react";
import { Title } from "../../components/Typos/Title";
import { Description } from "../../components/Typos/Description";
import { projectItems } from "../../utils/dataArrays";
import { Link } from "react-router-dom";

export const Projects = () => {
  const { ref, fadeUpAnimation } = useFadeAnimation();
  return (
    <section
      ref={ref}
      className="p-[5%]  md:p-[5%] py-[15%] md:py-[5%]  flex flex-col md:flex-row items-center justify-center "
    >
      <div className="flex flex-col items-center  gap-10 md:gap-5 ">
        <animated.div
          style={fadeUpAnimation}
          className="text-title-color text-center md:text-left"
        >
          <Title title="Speaking of Projects" />
        </animated.div>
        <animated.div
          style={fadeUpAnimation}
          className="text-title-color text-center md:w-[55%]"
        >
          <Description des="Browse through our portfolio of retail projects, including shops, shopping malls, and commercial retail spaces" />
        </animated.div>
        <div className="flex flex-wrap w-full justify-between md:mt-10">
          {projectItems.map((projectItem, itemIndex) => {
            return (
              <animated.div
                style={fadeUpAnimation}
                className="flex flex-col p-8 md:w-[49%] bg-[#F5F5F5] gap-6 md:gap-8 mb-10"
                key={itemIndex}
              >
                <div>
                  <img src={projectItem.img} className=" object-cover" alt="" />
                </div>
                <div className="font-inter font-semibold text-[20px] leading-7 text-black">
                  {projectItem.title}
                </div>
                <div className="text-title-color md:w-[90%]">
                  <Description des={projectItem.des} />
                </div>
                <Link
                  to={projectItem.link}
                  className="w-fit p-1 px-3 flex justify-center items-center text-white bg-title-color"
                >
                  <Description des="Read more" />
                </Link>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
