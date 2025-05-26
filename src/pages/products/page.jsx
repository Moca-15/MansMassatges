import React from 'react';
import { useTranslation } from 'react-i18next';
import { People1, Cars1, Pets1, RoadVid } from '../../assets/index.js';

export default function Products() {
  const { t } = useTranslation();


//  a powerful ai camera analysis tool for all your needs
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* video background */}
      <div className="background">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src={RoadVid} type="video/mp4" />
        </video>
      </div>
      <div className="background bg-gradient-to-r from-black via-black/60 to-transparent"></div>
     
      {/* títol i eslogan */}
      <div className="h-[70vh] pb-10 flex items-end relative z-10 inset-0 bg-gradient-to-t from-black via-black/20 to-transparent">
        <div className="px-10">
            <h1 className="text-6xl font-bold text-white mb-4">
                {t('products.slogan')}
            </h1>
            <p className="text-2xl text-white/7 ">
                {t('products.subtitle')}
            </p>
        </div>
      </div>
      
      {/* Products horizontal scroll */}
      <div className="bg-black text-white py-40 snap-y">
        <div className="container mx-auto px-20">
          <div className="flex overflow-x-auto gap-10 pb-8 snap-x snap-mandatory">
            {/* Camera 1: people */}
            <div className="min-w-[80vw] snap-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]">
                <div>
                  <h2 className="text-4xl font-bold mb-6">{t('products.camera1.title')}</h2>
                  <p className="text-lg text-gray-300 mb-8">{t('products.camera1.description')}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t('products.learnMore')}
                  </button>
                </div>
                <div className="relative">
                  <img 
                    src={People1} 
                    alt="People Detection Camera" 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Camera 2: security / surveillance */}
            <div className="min-w-[80vw] snap-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]">
                <div>
                  <h2 className="text-4xl font-bold mb-6">{t('products.camera2.title')}</h2>
                  <p className="text-lg text-gray-300 mb-8">{t('products.camera2.description')}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t('products.learnMore')}
                  </button>
                </div>
                <div className="relative">
                  <img 
                    src={Pets1} 
                    alt="Pet Detection Camera" 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Camera 3: cars */}
            <div className="min-w-[80vw] snap-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]">
                <div>
                  <h2 className="text-4xl font-bold mb-6">{t('products.camera3.title')}</h2>
                  <p className="text-lg text-gray-300 mb-8">{t('products.camera3.description')}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                    {t('products.learnMore')}
                  </button>
                </div>
                <div className="relative">
                  <img 
                    src={Cars1} 
                    alt="Vehicle Detection Camera" 
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}