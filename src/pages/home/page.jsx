import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './../../styles/home.css'


import { HomeBackground, LogoGris } from '../../assets/index.js';
import { LogoGrisFull } from '../../assets/index.js'

import { Massage1 } from '../../assets/index.js';
import { Massage2 } from '../../assets/index.js';
import { ProfileImg } from './../../assets/index.js' 


import { Slideshow } from '../../static_components/index.js';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useTranslation();
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % services.length);
  //   }, 9000); // temps que triga a canviar la slide

  //   return () => clearInterval(timer);
  // }, []);

  const handleSlideChange = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    }
    
    // Reset timer on manual slide change
    resetTimer();
    
    // Reset transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleIndicatorClick = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setCurrentSlide(index);
      setIsTransitioning(true);
      resetTimer(); // Reset timer on indicator click
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };



  return (
    
    <section> {/* wrapper de tot */}
      {/* background wt logo */}
      <section className='landing-section'>
        <div className="landing-container">
          <div className="background-container"
            style={{ 
              backgroundImage: `url(${HomeBackground})`,
              // scroll -0.5px perquè el fons baixi en scroll però amb delay
              transform: 'translateY(calc(var(--scroll) * (-0.15px)))',
            }}
          ></div>
          <div className="background-container background-overlay"></div> {/* opacitat negra pel fons */}

          {/* items-center -> vertical, justify-center -> horitzontal */}
          <div className="relative flex items-center justify-center top-32">
            <img src={LogoGrisFull} 
              alt="Mans Massatges - Agnès Casablancas" 
              className="shadow-2xl"
              style={{borderRadius:'50%'}}
              width={350}
              height={350}
            />
          </div>
        </div>
        
      </section>



      <Slideshow/>

      {/* SOBRE MI: TODO: afegir botó */}
      <section className="about-section">
            <div className="about-container">
              <div className="about-image-wrapper">
                <img 
                  src={ProfileImg} 
                  alt="Professional Massage Therapist" 
                  className="about-image"
                />
              </div>
              <div className="about-content">
                <h2 className="about-title">
                  {t('home.about.title', 'About Agnès Casablancas')}
                </h2>
                
                <p className="about-description">
                  {t('home.about.description')}
                </p>
      
              </div>
            </div>
      </section>



      
      
      {/* <seciton style={{ backgroundColor: '#EEE9E3'}}>
        <div className="relative flex items-center left-64" style={{ backgroundColor: '#EEE9E3'}}>
          <img 
            src={ProfileImg} 
            alt="Mans Massatges - Agnès Casablancas" 
            className="shadow-2xl"
            style={{borderRadius:'50%'}}
            width={250}
            height={250}
          />
        </div> 
      </seciton> */}

    </section>
  );
}
