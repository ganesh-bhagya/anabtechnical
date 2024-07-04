import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigationItems, socialLinks } from "../../utils/dataArrays";
import pattern from "./../../assets/images/footer-pattern.png"
import logo from "./../../assets/images/logo.png"
import background from "./../../assets/images/footer-back.png"
import { Description } from "../Typos/Description";

export const Footer = ({ scrollRefs }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const navigate = useNavigate();
  const scrollToDiv = (rerName) => {
    const isHomePage = window.location.pathname === "/";
    if (!isHomePage) {
      navigate(`/?scrollTo=${rerName}`);
    } else {
      if (rerName === "abtus") {
        scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "leadership") {
        scrollRefs.leadership.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "faq") {
        scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const scrollToDivMobile = (rerName) => {
    handleFadeIn();
    const isHomePage = window.location.pathname === "/";
    if (!isHomePage) {
      navigate(`/?scrollTo=${rerName}`);
    } else {
      if (rerName === "abtus") {
        scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "leadership") {
        scrollRefs.leadership.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "faq") {
        scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const isServicesLink = new URLSearchParams(window.location.search).get(
      "scrollTo"
    );
    if (isServicesLink !== null) {
      const navigationTimeout = setTimeout(() => {
        if (isServicesLink === "abtus") {
          scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
        } else if (isServicesLink === "leadership") {
          scrollRefs.leadership.current.scrollIntoView({ behavior: "smooth" });
        } else if (isServicesLink === "faq") {
          scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
        }

        const urlWithoutQueryParam = window.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQueryParam);
      }, 1000);

      return () => clearTimeout(navigationTimeout);
    }
  }, [scrollRefs]);

  const currentYear = new Date().getFullYear();
  return (
    <section className="w-full flex flex-col overflow-x-hidden items-center ">
      <div className="w-full bg-cover bg-center h-6" style={{ backgroundImage: `url(${pattern})` }}>
      </div>
      <div className="w-full relative overflow-hidden py-[15%] md:py-[5%] bg-[#1A1A22] px-[5%] md:px-[5%] flex flex-col md:flex-row justify-between items-start">
        <div className=" w-[30%] absolute right-0 bottom-0 opacity-20">
          <img
            src={background}
            className=" object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col  gap-5 md:w-[55%]">

          <Link to="/">
            <img
              src={logo}
              className=" h-[60px] md:h-[76px]"
              alt=""
            />
          </Link>
          <div className="text-white md:w-[70%]">
            <Description des=" At Al Noor Al Baher Technical Services, we are more than just a maintenance and cleaning services company we are your partners in transforming spaces and enhancing lives." />

          </div>

          <div className=" md:flex gap-5  md:mt-5 mt-8">
            <span className=" text-white">
              <Description des="Follow us on" />
            </span>
            <div className="flex gap-5 md:mt-0 mt-3">
              {socialLinks.map((item, itemIndex) => {
                const IconComponent = item.icon;
                return (
                  <a key={itemIndex} href={item.link} className=" cursor-pointer" target="_blank">
                    <IconComponent className="bg-white" />
                  </a>
                );
              })}
            </div>
          </div>


        </div>
        <div className=" flex flex-col md:gap-5 gap-3 md:mt-0 mt-8">
          <span className=" text-theme-color font-semibold font-inter  text-lg leading-7">
            Links
          </span>
          <div className="flex flex-col items-start justify-start gap-4 mt-3">
            {navigationItems.map((item, itemIndex) => {
              if (item.type === "internal") {
                return (
                  <button
                    key={itemIndex}
                    onClick={() => scrollToDiv(item.id)}
                    className={`text-white `}
                  >
                    <Description des={item.title} />
                  </button>
                )
              } else if (item.type === "external") {
                return (
                  <Link
                    to={item.link}
                    className={` ${currentUrl === item.link ? "text-theme-color" : "text-white"
                      } `}
                  >
                    <Description des={item.title} />
                  </Link>
                )
              }
            })}
          </div>


        </div>
        <div className=" flex flex-col md:gap-5 gap-3 md:w-[25%] md:mt-0 mt-8">
          <span className=" text-theme-color font-semibold font-inter  text-lg leading-7">
            Contact Us
          </span>
          <span className="text-white mt-3">
            <Description des="00097 1563 663 441" />
          </span>
          <span className=" text-white">
            <a href="mailto:info@anabtechnical.com">
              <Description des="info@anabtechnical.com" />
            </a>
          </span>
        </div>

      </div>
      <div className="w-full py-3 bg-theme-color px-[5%] md:px-[10%] md-h:[38px] text-center justify-between font-inter font-semibold text-[14px] leading-[18px] text-black">
        © {currentYear} Al Noor Al Baher Technical Services. All Rights Reserved.
      </div>
    </section>
  );
};
