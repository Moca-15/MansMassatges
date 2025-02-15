import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './index';
import { NameLogo } from '../assets/index.js';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <a href="/home" className="">
          <img src={NameLogo} alt="Fregata Space" className="h-8" />
        </a>
      </div>
      <nav className="space-x-4">
        <a href="/information" className="hover:underline">{t('header.about')}</a>
        <a href="/solutions" className="hover:underline">{t('header.solutions')}</a>
        <a href="/contact" className="hover:underline">{t('header.contact')}</a>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
