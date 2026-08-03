import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileImg } from './../../assets/index.js' 

import './../../styles/home/profile.css';

const PresentationCard = ({}) => {
  const { t } = useTranslation();
  
  return (
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
  );
};

export default PresentationCard;