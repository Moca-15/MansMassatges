import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './../../styles/home.css'


import { HomeBackground } from '../../assets/index.js';
import { RoundLogoTransparent } from '../../assets/index.js'
import { Profile } from '../../assets/index.js'
import { Massage1 } from '../../assets/index.js';
import { Massage2 } from '../../assets/index.js';



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
      <section className='relative'>
        <div className="relative h-screen">
          <div 
            className="fixed inset-0 bg-cover bg-center -z-10 bg-fixed"
            style={{ 
              backgroundImage: `url(${HomeBackground})`,
              // scroll -0.5px perquè el fons baixi en scroll però amb delay
              transform: 'translateY(calc(var(--scroll) * (-0.15px)))',
            }}
          ></div>
          <div className="fixed inset-0 bg-black bg-opacity-50 -z-10"></div> {/* opacitat negra pel fons */}

          {/* items-center -> vertical, justify-center -> horitzontal */}
          <div className="relative flex items-center justify-center top-32">
            <img 
              src={RoundLogoTransparent} 
              alt="Mans Massatges - Agnès Casablancas" 
              className="shadow-2xl"
              style={{borderRadius:'50%'}}
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>



      {/* Profile */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img 
              src={Profile} 
              alt="Agnès Casablancas - Professional Massage Therapist" 
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">
              {t('home.about.title', 'About Agnès Casablancas')}
            </h2>
            
            <p className="about-description">
              {t('home.about.description1', 
                'With over 15 years of experience in therapeutic massage, Agnès specializes in helping clients find relief from chronic pain, reduce stress, and restore balance to their bodies. Her holistic approach combines traditional techniques with modern understanding of anatomy and physiology.'
              )}
            </p>
            <p className="about-description">
              {t('home.about.description2',
                'Every session is personalized to address your specific needs, whether you\'re dealing with muscle tension, recovering from an injury, or simply seeking a moment of tranquility in your busy life.'
              )}
            </p>

            {/* Features List */}
            <ul className="about-features">
              <li className="about-feature-item">
                <span className="about-feature-icon">✓</span>
                <span>
                  {t('home.about.feature1', 'More than 15 years of professional experience')}
                </span>
              </li>
              <li className="about-feature-item">
                <span className="about-feature-icon">✓</span>
                <span>
                  {t('home.about.feature2', 'Specialized in deep tissue and sports massage')}
                </span>
              </li>
                            <li className="about-feature-item">
                <span className="about-feature-icon">✓</span>
                <span>
                  {t('home.about.feature3', 'Certified in prenatal and postnatal massage')}
                </span>
              </li>
              <li className="about-feature-item">
                <span className="about-feature-icon">✓</span>
                <span>
                  {t('home.about.feature4', 'Member of the International Massage Association')}
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            {/* <Link to="/home" className="about-button">
              {t('home.about.button', 'Learn more about Agnès')}
            </Link> */}
          </div>
        </div>
      </section>




      
      <section className="py-20 px-4" style={{ backgroundColor: '#F9F5F0' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            
            {/* Left side - Round Image */}
            <div className="w-full md:w-5/12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-amber-700/10 blur-3xl transform -translate-y-4 translate-x-4"></div>
                <img 
                  src={Massage1} // Replace with your actual image import
                  alt="Massage therapy session"
                  className="relative z-10 w-48 h-48 md:w-10 md:h-10 rounded-full object-cover shadow-2xl border-8 border-white"
                  style={{borderRadius:'50%'}}
                  // width={350}
                  // height={350}
                />
                {/* Optional decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-700/20 rounded-full blur-2xl"></div>
              </div>
            </div>
            
            {/* Right side - Descriptive Text */}
            <div className="w-full md:w-7/12 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
                {t('home.aboutTitle') || 'Experience True Relaxation'}
              </h2>
              
              <div className="w-20 h-1 bg-amber-700"></div>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t('home.aboutText1') || 'With over 15 years of experience in therapeutic massage, Agnès Casablancas provides a personalized approach to wellness and relaxation. Each session is tailored to your specific needs, combining traditional techniques with modern therapeutic practices.'}
                </p>
                
                <p>
                  {t('home.aboutText2') || 'Our tranquil studio is designed to transport you away from the stresses of daily life. From the moment you walk in, you\'ll be enveloped in a calming atmosphere where healing and relaxation take center stage.'}
                </p>
                
                <p>
                  {t('home.aboutText3') || 'Whether you\'re seeking relief from chronic pain, recovering from an injury, or simply need to unwind, we offer a variety of massage modalities to address your unique concerns.'}
                </p>
              </div>
              
              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Personalized treatments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">15+ years experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Calm, peaceful studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Holistic approach</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <button className="group inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span>{t('home.learnMoreAbout') || 'Learn more about Agnès'}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>  
      </section>
      {/* <seciton style={{ backgroundColor: '#EEE9E3'}}>
        <div className="relative flex items-center left-64" style={{ backgroundColor: '#EEE9E3'}}>
          <img 
            src={Profile} 
            alt="Mans Massatges - Agnès Casablancas" 
            className="shadow-2xl"
            style={{borderRadius:'50%'}}
            width={250}
            height={250}
          />
        </div> 
      </seciton> */}







      {/* <section className="relative py-16" style={{ backgroundColor: '#EEE9E3' }}>
        <div className="w-full overflow-hidden">
          
            //  Slideshow Container 
            <div className="relative w-full">
              //  Main Slide 
              <div className="relative w-full">
                //  Slide Image with Overlay 
                <div className="relative w-full" style={{height:'600px'}}>
                  <img 
                    src={services[currentSlide].image}
                    alt={services[currentSlide].name}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                    style={{animation:isTransitioning ? 'fadeIn 0.5s ease-in-out' : 'none'}}
                  />
                  
                  // {/* Gradient Overlay 
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  
                  // {/* Slide Content 
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-4xl font-light mb-3">
                      {services[currentSlide].name}
                    </h3>
                    <p className="text-lg mb-4 max-w-2xl opacity-90">
                      {services[currentSlide].description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-medium" style={{ color: services[currentSlide].color }}>
                        {services[currentSlide].price}
                      </span>
                      <span className="text-sm opacity-75">
                        {services[currentSlide].duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              // {/* Slide Indicators 
              <div className="flex justify-center gap-3 mt-6">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8' 
                        : 'w-2'
                    }`}
                    style={{ 
                      backgroundColor: index === currentSlide ? '#484D51' : '#A7C4B5',
                      opacity: index === currentSlide ? 1 : 0.5
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              // {/* Navigation Arrows 
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all opacity-75 hover:opacity-100"
                style={{ color: '#484D51' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all opacity-75 hover:opacity-100"
                style={{ color: '#484D51' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            


            

            {/* Thumbnail Preview (Optional)
            <div className="hidden md:flex justify-center gap-4 mt-8">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-4 ring-offset-2' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ ringColor: '#A7C4B5' }}
                >
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div> 

            {/* View All Services Button 
            <div className="text-center mt-12">
              <button 
                className="px-8 py-3 rounded-full font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#A7C4B5', color: '#484D51' }}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section> */}




    </section>
  );
}
