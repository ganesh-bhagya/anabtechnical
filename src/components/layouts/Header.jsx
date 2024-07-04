import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { navigationItems } from "../../utils/dataArrays";
import { CloseHeaderIcon, MenuIcon } from "../../utils/icons";
import { ContactButton } from "../ContactButton";
import { motion } from "framer-motion";

export const Header = ({ scrollRefs }) => {
  const [visibleMObile, setVisibleMObile] = useState(false);
  const handleFadeIn = () => {
    setVisibleMObile((pre) => !pre);
    document.body.style.overflow = visibleMObile ? "visible" : "hidden";
  };
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  return (
    <section
      className={`w-full fixed z-50 py-3 md:py-1 bg-white ${
        showButton && "glass-effect"
      } px-[5%] md:px-[5%] flex flex-row justify-between items-center border bottom-border border-b-2`}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Link to="/">
          <img src={logo} className=" h-[60px] md:h-[76px]" alt="" />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="hidden xl:flex w-[45%] justify-around"
      >
        {navigationItems.map((item, itemIndex) => {
          if (item.type === "internal") {
            return (
              <button
                key={itemIndex}
                id={item.id}
                onClick={() => scrollToDiv(item.id)}
                className={`
               text-black hover:text-theme-color transition-colors duration-300 `}
              >
                <NavigationItem title={item.title} />
              </button>
            );
          } else if (item.type === "external") {
            return (
              <Link
                id={item.id}
                to={item.link}
                className={` ${
                  currentUrl === item.link ? "text-theme-color " : "text-black"
                } hover:text-theme-color transition-colors duration-300 `}
              >
                <NavigationItem title={item.title} />
              </Link>
            );
          }
        })}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="xl:hidden"
        onClick={handleFadeIn}
      >
        <MenuIcon />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="hidden xl:inline-flex"
      >
        <ContactButton />
      </motion.div>

      {/* mobile header  */}
      <div
        className={`fixed w-full inset-0 top-0 left-0 bottom-0 bg-white flex flex-col h-[100vh]  transition transform duration-500 ease-in-out fade-up-enter-active ${
          visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `}
      >
        <div className="flex items-center justify-between w-full p-[20px]">
          <Link className="">
            <img src={logo} className=" w-[61px] " alt="" />
          </Link>
          <span onClick={handleFadeIn}>
            <CloseHeaderIcon />
          </span>
        </div>
        <div className="w-full flex flex-col gap-3 pt-[10%] flex-1 bg-gradient-to-br from-[#59B8FF] to-[#26FC7670]">
          {navigationItems.map((item, itemIndex) => {
            if (item.type === "internal") {
              return (
                <button
                  key={itemIndex}
                  onClick={() => scrollToDivMobile(item.id)}
                  className={`
                  text-black hover:text-theme-color font-semibold text-center font-outfit text-[30px] leading-[54px] duration-300 `}
                >
                  {item.title}
                </button>
              );
            } else if (item.type === "external") {
              return (
                <Link
                  to={item.link}
                  onClick={handleFadeIn}
                  className={` ${
                    currentUrl === item.link
                      ? "text-theme-color "
                      : "text-black"
                  } hover:text-theme-color font-semibold text-center font-outfit text-[30px] leading-[54px]  `}
                >
                  {item.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

const NavigationItem = ({ title }) => {
  return <div className=" font-dm font-bold text-lg leading-6">{title}</div>;
};
