import React, { useEffect, useRef, useState } from 'react'
import { Connect } from '../../components/global/Connect';
import { Header } from '../../components/layouts/Header';
import { Footer } from '../../components/layouts/Footer';
import { ProjectContent } from './ProjectContent';

export const Project = () => {
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

  // const scrollRefs = useContext(NavigationContext)
  const scrollRefs = useRef(null);
  return (
    <>
      <Header scrollRefs={scrollRefs} />
      <ProjectContent />
      <Connect />
      <Footer />
    </>
  )
}
