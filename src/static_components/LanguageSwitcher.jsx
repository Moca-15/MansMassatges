import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flagUrls = {
    en: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
    es: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="button flex items-center space-x-2 bg-blue-500 text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img 
          src={flagUrls[i18n.language]} 
          alt={`${i18n.language} flag`} 
          className="w-6 h-4"
        />
        <span>{i18n.language.toUpperCase()}</span>

        {/* crea la fletxeta del dropdown */}
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white rounded shadow-lg z-10">
          {Object.entries(flagUrls).map(([code, url]) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className={`flex items-center space-x-2 w-full px-3 py-2 hover:bg-gray-100 ${
                i18n.language === code ? 'bg-gray-100' : ''
              }`}
            >
              <img src={url} alt={`${code} flag`} className="w-6 h-4" />
              <span>{code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
