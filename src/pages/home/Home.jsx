import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/layouts/Header";
import { Footer } from "../../components/layouts/Footer";
import { Hero } from "./Hero";
import { WhoWeAre } from "./WhoWeAre";
import { VnM } from "./VnM";
import { Projects } from "./Projects";
import { FAQ } from "./FAQ";
import { Connect } from "../../components/global/Connect";
import NavigationContext from "../../contexts/NavigationContext";
import { Leadership } from "./Leadership";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const scrollRefs = useContext(NavigationContext)



  return (
    <>
      <Header scrollRefs={scrollRefs} />
      <Hero />
      <WhoWeAre scrollRef={scrollRefs.abtus} />
      <VnM />
      <Leadership scrollRef={scrollRefs.leadership} />
      <FAQ scrollRef={scrollRefs.faq} />
      <Connect />
      <Footer scrollRefs={scrollRefs} />
    </>
  );
};
