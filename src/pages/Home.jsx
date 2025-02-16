import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { About } from '../components/index.js';

import { HomeBackground } from '../assets/index.js';



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
    <section className="relative min-h-screen text-gray-800">
      {/* background Added parallax effect */}
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10 bg-fixed"
        style={{ 
          backgroundImage: `url(${HomeBackground})`,
          // scroll -0.5px perquè el fons baixi en scroll però amb delay
          transform: 'translateY(calc(var(--scroll) * (-0.15px)))',
        }}
      ></div>
      <div className="fixed inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Secció Hero */}
      <div className="relative min-h-screen flex items-center justify-center text-center">
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
            {t('hero.headline')} 
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            {t('hero.subheadline')}
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
              onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaLearnMore')}
            </button>
            <button
              className="px-6 py-3 text-blue-600 bg-white border border-blue-600 hover:bg-gray-100 rounded-md transition"
              onClick={() => alert(t('hero.ctaRequestDemo'))}
            >
              {t('hero.ctaRequestDemo')}
            </  button>
          </div>
        </div>
      </div>

      {/* Secció About */}

      <About />


    </section>
  );
}
