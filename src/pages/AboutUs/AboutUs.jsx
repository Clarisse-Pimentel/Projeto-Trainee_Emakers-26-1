import style from "./AboutUs.module.css";
import React from 'react';
import Navbar from '../../components/NavBar/NavBar.jsx';
import HeroSection from './HeroSection';
import PurposeSection from './PurpouseSection.jsx';
import VideoSection from './VideoSection';
import TestimonialsSection from './TestimonialSection';
import HistorySection from './HistorySection';
import Footer from '../../components/Footer/Footer.jsx';

const AboutUs = () => {
  return (
    <div className={style.page}>
      <Navbar />
      <main>
        <HeroSection />        
        <PurposeSection />     
        <VideoSection />       
        <TestimonialsSection />
        <HistorySection />    
      </main>
      <Footer />              
    </div>
  );
}

export default AboutUs;