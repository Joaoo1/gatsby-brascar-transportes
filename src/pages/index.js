import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BugdetSection from '../components/BugdetSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import ReviewsSection from '../components/ReviewsSection'
import GallerySection from '../components/GallerySection'
import Footer from '../components/Footer'

import { SectionContainer, Container } from './_styles'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <>
      <Helmet>
        <title>Brascar transportes de veiculos</title>
        <meta
          name="description"
          content="Transporte de veículos para todo o Brasil, de forma segura e ágil"
        />
      </Helmet>
      <Navbar scrolled={scrolled} />
      <Header id="home" />
      <Container>
        <SectionContainer>
          <BugdetSection id="bugdet" />
          <ServicesSection id="services" />
          <AboutSection id="about" />
          <ReviewsSection />
          <GallerySection />
        </SectionContainer>
      </Container>
      <Footer id="contact" />
    </>
  )
}
