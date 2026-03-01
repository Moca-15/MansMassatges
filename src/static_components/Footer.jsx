import React from 'react';
import { useTranslation } from 'react-i18next';
import './../styles/footer.css'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo & Social */}
        <div className="footer-col brand-col">
          <img 
            src="/logo.png" 
            alt={t('footer.logo.alt')} 
            className="footer-logo"
          />
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <div className="social-links">
            <a 
              href="https://instagram.com/yourpractice" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t('footer.socials.instagramAria', 'Instagram')}
              className="social-link"
            >
              {/* Instagram SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>{t('footer.socials.instagram', 'Instagram')}</span>
            </a>
            
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t('footer.social.whatsappAria', 'WhatsApp')}
              className="social-link"
            >
              {/* WhatsApp SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>{t('footer.socials.whatsapp', 'WhatsApp')}</span>
            </a>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-col contact-col">
          <ul className="footer-list">
            <li>
              <a href="tel:+34676689868" className="footer-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {t('footer.contact.phone_number')}
              </a>
            </li>
            <li>
              <a href="mailto:agnes.casablancas@gmail.com" className="footer-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {t('footer.contact.mail')}
              </a>
            </li>
            <li className="footer-address">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>{t('footer.contact.location')}</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Helpful Links */}
        <div className="footer-col links-col">
          <ul className="footer-list">
            <li><a href="/privacy" className="footer-link">{t('footer.links.privacy', 'Privacy Policy')}</a></li>
            <li><a href="/cookies" className="footer-link">{t('footer.links.cookies', 'Cookies Policy')}</a></li>
            <li><a href="/legal" className="footer-link">{t('footer.links.legal', 'Legal & Terms of Service')}</a></li>
          </ul>
        </div>

      </div>
      

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            {t('footer.bottom.rights')}
          </p>
          <div className="credits">
            <a href="https://github.com/Moca-15">{t('footer.bottom.credits')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;