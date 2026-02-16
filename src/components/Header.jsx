import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './index';
import { NameLogo } from '../assets/index.js';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header-container">
      {/* esquerra */}
      <div className="linked-image left-container ml-4">
        {/* Logo imatge en comptes de text, likejada a homepage. h-8 és l'alçada */}
        <Link to="/home" className="flex items-center">
          <img src={NameLogo} alt="Fregata Space" className="h-16 w-auto" />
        </Link>
      </div>

      {/* centre */}
      <nav className="flex flex-1 justify-center">
        <div className="nav-links-container">
          <Link 
            to="/information" 
            className={`nav-link ${isActive('/information') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.about')}
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.services')}
          </Link>
          <Link 
            to="/information" 
            className={`nav-link ${isActive('/information') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.cupons')}
          </Link>
          <Link 
            to="/information" 
            className={`nav-link ${isActive('/information') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.contact')}
          </Link>
          <Link 
            to="/information" 
            className={`nav-link ${isActive('/information') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.bookings')}
          </Link>
        </div>
      </nav>

      {/* dreta */}
      <div className="right-container">
        <LanguageSwitcher />
      </div>
    </header>
  );
}

