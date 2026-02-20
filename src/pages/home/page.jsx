import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HomeBackground } from '../../assets/index.js';
import { RoundLogoTransparent } from '../../assets/index.js'



export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* background Added parallax effect */}
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10 bg-fixed"
        style={{ 
          backgroundImage: `url(${HomeBackground})`,
          // scroll -0.5px perquè el fons baixi en scroll però amb delay
          transform: 'translateY(calc(var(--scroll) * (-0.15px)))',
        }}
      ></div>
      <div className="fixed inset-0 bg-black bg-opacity-50 -z-10"></div> {/* opacitat negra pel fons */}

      {/* <div className="relative flex items-center justify-center text-center h-screen">
      </div> */}
      {/* items-center -> vertical, justify-center -> horitzontal */}
      <div className="relative flex justify-center top-32">
        <img 
          src={RoundLogoTransparent} 
          alt="Mans Massatges - Agnès Casablancas" 
          className="shadow-2xl"
          style={{borderRadius:'50%'}}
          width={350}
          height={350}
        />
      </div>



    </section>
  );
}
