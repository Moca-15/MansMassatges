import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng); // Persist selection
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
      >
        ES
      </button>
    </div>
  );
}
