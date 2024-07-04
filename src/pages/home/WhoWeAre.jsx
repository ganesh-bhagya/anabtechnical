import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Title } from "../../components/Typos/Title";
import { Description } from "../../components/Typos/Description";
import whatwe from "./../../assets/images/what-we-do.svg";
import { useFramerAnimation } from "../../hooks/useFramerAnimation";
import { useInView } from "react-intersection-observer";

export const WhoWeAre = ({ scrollRef }) => {
  const { cardVariants, titleVariants } = useFramerAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      document.getElementById("abtus").classList.add("text-theme-color");
    } else {
      document.getElementById("abtus").classList.remove("text-theme-color");
    }
  }, [inView]);

  return (
    <>
      <div ref={ref}>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          ref={scrollRef}
          className="p-[5%]  md:p-[5%] py-[15%] md:py-[7%] md:pb-[3%] overflow-x-hidden flex flex-col md:flex-row "
        >
          <div className="flex flex-col md:items-start gap-10 md:gap-5 md:w-[49%]">
            <motion.div
              variants={titleVariants}
              className="text-title-color text-center md:text-left"
            >
              <Title title="Who We Are?" />
            </motion.div>
            <motion.div variants={cardVariants} className=" md:hidden">
              <img src={whatwe} className="object-cover" alt="" />
            </motion.div>
            <motion.div
              variants={titleVariants}
              className="text-title-color text-center md:text-start md:w-[85%]"
            >
              <Description
                des="At Al Noor Al Baher Technical Services, 
          we are more than just a maintenance and cleaning services company
           we are your partners in transforming spaces and enhancing lives.
            With a rich legacy of excellence and a commitment to quality,
           we have established ourselves as leaders in the industry."
              />
            </motion.div>
          </div>
          <motion.div
            variants={cardVariants}
            className="hidden md:block md:w-[49%]"
          >
            <img src={whatwe} className="object-cover" alt="" />
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};
