import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './index';
import { NameLogo } from '../assets/index.js';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header-container">
      {/* esquerra */}
      <div className="linked-image left-container ml-4">
        {/* Logo imatge en comptes de text, likejada a homepage. h-8 és l'alçada */}
        <a href="/home" className="flex items-center">
          <img src={NameLogo} alt="Fregata Space" className="h-16 w-auto" />
        </a>
      </div>
      {/* centre */}
      <nav className="flex flex-1 justify-center">
        <div className="nav-links-container">
          <a href="/information" className="nav-link">{t('header.about')}</a>
          <a href="/products" className="nav-link">{t('header.products')}</a>
          <a href="/pricing" className="nav-link">{t('header.pricing')}</a>
          <a href="/getStarted" className="nav-link">{t('header.getStarted')}</a>
        </div>
      </nav>
      {/* dreta */}
      <div className="right-container">
        <LanguageSwitcher />
      </div>
    </header>
  );
}

