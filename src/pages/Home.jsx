import React from 'react';
import { useTranslation } from 'react-i18next';
import { About } from '../components/index.js';

import { HomeBackground } from '../assets/index.js';



export default function Home() {
  const { t } = useTranslation();
  // const bgPath = '/src/assets/def_bg.png';

  return (
    <section className="bg-gray-100 text-gray-800">
      {/* Secció Hero */}
      <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" 
           style={{ backgroundImage: `url(${HomeBackground})` }}>
 
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* això per enfosquir el background un pèl*/}

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
