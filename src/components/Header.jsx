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
            to="/products" 
            className={`nav-link ${isActive('/products') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.products')}
          </Link>
          <Link 
            to="/pricing" 
            className={`nav-link ${isActive('/pricing') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.pricing')}
          </Link>
          <Link 
            to="/getStarted" 
            className={`nav-link ${isActive('/getStarted') ? 'text-gray-500 font-black mx-2' : ''}`}
          >
            {t('header.getStarted')}
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

