import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useFramerAnimation } from "../../hooks/useFramerAnimation";
import { Title } from "../../components/Typos/Title";
import { Description } from "../../components/Typos/Description";
import leadership from "./../../assets/images/leadership.jpg";
import { useInView } from "react-intersection-observer";

export const Leadership = ({ scrollRef }) => {
  const { imageVariants, titleVariants } = useFramerAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      document.getElementById("leadership").classList.add("text-theme-color");
    } else {
      document.getElementById("leadership").classList.remove("text-theme-color");
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
          className="p-[5%] overflow-hidden  md:p-[5%] py-[5%] md:py-[7%]  flex flex-col  "
        >
          <div className="flex flex-col  gap-5 md:gap-5 md:w-[60%] mb-10">
            <motion.div
              variants={titleVariants}
              className="text-title-color text-left"
            >
              <Title title="Leadership" />
            </motion.div>
            <motion.div
              variants={titleVariants}
              className="text-black text-left"
            >
              <Description des="Our team has received training both internationally and locally, ensuring a deep understanding of your business needs and the surrounding operational landscape" />
            </motion.div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center ">
            <motion.div
              variants={imageVariants}
              className=" md:w-[25%] aspect-square overflow-hidden rounded-2xl"
            >
              <img src={leadership} className="object-cover" alt="" />
            </motion.div>
            <div className=" md:w-[70%]">
              <motion.div
                variants={titleVariants}
                className="text-title-color text-justify md:text-start md:w-[95%]"
              >
                <p className="mb-1">
                  <Description
                    des={`Furthermore, our company prides itself on not just offering services to clients, but also fostering a culture of excellence and reliability. With our team of experienced professionals in the field of maintenance, we ensure that every project, whether small or medium-scale, receives the utmost attention to detail and expertise.`}
                  />
                </p>
                <p className="mb-1">
                  <Description
                    des={`In addition to providing direct technical services, we also offer comprehensive service consultancy, assisting clients in making informed decisions to optimize their maintenance processes and outcomes.`}
                  />
                </p>
                <p className="mb-1">
                  <Description
                    des={`At the core of our mission is a commitment to maintaining the highest standards of quality in all aspects of our operations. It is our firm belief that by consistently delivering exceptional service, we can establish the Al Noor Al Baher Brand as a beacon of excellence in our industry.`}
                  />
                </p>
                <p>
                  <Description
                    des={`As we move forward, I extend my sincerest greetings to both our valued clients and dedicated staff. Together, let us embody the ethos that actions speak louder than words, and strive to continually exceed expectations in everything we do. For in the realm of service, it is those who translate promises into tangible results that ultimately emerge victorious`}
                  />
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};
