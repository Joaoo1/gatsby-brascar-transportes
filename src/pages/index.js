import React, { useState, useEffect } from "react"

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BugdetSection from '../components/BugdetSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import GallerySection from '../components/GallerySection'
import Footer from '../components/Footer'

import { SectionContainer, Container } from './styles'

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>{
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  },[scrolled])

  return(
    <> 
      <Navbar scrolled={scrolled}/>
      <Header />
      <Container>
        <SectionContainer>
          <BugdetSection/>
          <ServicesSection/>
          <AboutSection/>
          <GallerySection/>
        </SectionContainer>
      </Container>
      <Footer />
    </>
    ) 
}
