import React, { useEffect, useState } from "react";
import { Title } from "../../components/Typos/Title";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Description } from "../../components/Typos/Description";
import { faqItems } from "../../utils/dataArrays";
import { FaqMinusIcon, FaqPlusIcon } from "../../utils/icons";
import { motion } from "framer-motion";
import { useFramerAnimation } from "../../hooks/useFramerAnimation";
import { useInView } from "react-intersection-observer";

export const FAQ = ({ scrollRef }) => {
  const { titleVariants } = useFramerAnimation();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      document.getElementById("faq").classList.add("text-theme-color");
    } else {
      document.getElementById("faq").classList.remove("text-theme-color");
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
          className="p-[5%]  md:p-[5%] py-[15%] md:py-[5%] overflow-hidden flex flex-col md:flex-row items-center justify-center "
        >
          <div className="flex flex-col items-center  gap-10 md:gap-5 ">
            <motion.div
              variants={titleVariants}
              className="text-title-color text-center md:text-left"
            >
              <Title title="Frequently Asked Question" />
            </motion.div>

            <div className="flex flex-col gap-4 md:w-[55%] md:mt-10">
              {faqItems.map((faq, faqIndex) => {
                let turn = faqIndex + 1;
                return (
                  <FaqItem
                    key={faqIndex}
                    open={open}
                    turn={turn}
                    handleOpen={handleOpen}
                    title={faq.title}
                    des={faq.des}
                  />
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

const FaqItem = ({ open, turn, handleOpen, title, des }) => {
  const { titleVariants } = useFramerAnimation();
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={titleVariants}
    >
      <Accordion open={open === turn} className="bg-[#F5F5F5] mb-2 rounded-lg">
        <AccordionHeader
          onClick={() => handleOpen(turn)}
          className=" border-none"
        >
          <div className="flex relative w-full gap-5 justify-between items-center bg-[#F5F5F5] px-3">
            <span className=" text-title-color">
              <Description des={title} />
            </span>
            <span>{open === turn ? <FaqMinusIcon /> : <FaqPlusIcon />}</span>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex relative w-full gap-5 justify-between items-center px-3">
            <span className=" text-black font-inter font-medium text-[16px] leading-[30px] md:text-[18px] md:leading-[30px] w-[90%] ">
              {des}
            </span>
          </div>
        </AccordionBody>
      </Accordion>
    </motion.div>
  );
};
