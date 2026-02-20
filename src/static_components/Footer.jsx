import React from 'react';
import { useTranslation } from 'react-i18next';
import { RoundLogoTransparent } from '../assets/index.js';

// Import social media icons
import instagramIcon from '../assets/icons/instagram.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Grid for the 4 columns */}
        <div className="grid grid-cols-4 gap-8 items-center">

          {/* Column 1 - Logo */}
          <div className="flex flex-col items-center">
            <img 
              src={RoundLogoTransparent} 
              alt="Mans Massatges - Agnès Casablancas" 
              className="shadow-2xl"
              style={{borderRadius:'50%'}}
              width={150}
              height={150}
            />
          </div>
          {/* <div className='flex'>
            <span>goodmorning hello user!</span>
            <span class="divider" /> <img src={RoundLogoTransparent} />
          </div> */}



          {/* Columns 2, 3, 4 (together to display logos below :) ) */}
          <div className="col-span-3">
            {/* divider */}
            <div className="grid grid-cols-3 gap-8 mb-8 pb-16 border-b border-gray-700"> 
              {/* Column 2 - Company */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-bold mb-4">{t('footer.company')}</h3>
                <ul className="space-y-2 text-center">
                  <li>
                    <a href="/policies" className="text-gray-400 hover:text-white transition">
                      {t('footer.policies')}
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-gray-400 hover:text-white transition">
                      {t('footer.terms')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Features */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-bold mb-4">{t('footer.features')}</h3>
                <ul className="space-y-2 text-center">
                  <li>
                    <a href="/products" className="text-gray-400 hover:text-white transition">
                      {t('footer.ai')}
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-gray-400 hover:text-white transition">
                      {t('footer.pricing')}
                    </a>
                  </li>
                  <li>
                    <a href="/examples" className="text-gray-400 hover:text-white transition">
                      {t('footer.examples')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 - Support */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-bold mb-4">{t('footer.support')}</h3>
                <ul className="space-y-2 text-center">
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white transition">
                      {t('footer.contact')}
                    </a>
                  </li>
                  <li>
                    <a href="/getStarted" className="text-gray-400 hover:text-white transition">
                      {t('footer.guide')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social icons centered below columns 2-4 */}
            <div className="flex items-center justify-center space-x-6 py-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <img src={instagramIcon} alt="Instagram" className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
