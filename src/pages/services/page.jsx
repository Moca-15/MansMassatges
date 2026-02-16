import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { About, Services } from '../../components/index.js';

import { HomeBackground } from '../../assets/index.js';



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
      <Services/>
      <Services/>
      <Services/>



    </section>
  );
}
