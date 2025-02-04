import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './index';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">Fregata Space</div>
      <nav className="space-x-4">
        <a href="/information" className="hover:underline">{t('header.about')}</a>
        <a href="/solutions" className="hover:underline">{t('header.solutions')}</a>
        <a href="/contact" className="hover:underline">{t('header.contact')}</a>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
