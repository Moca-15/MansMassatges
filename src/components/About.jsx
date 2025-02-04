import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    
    <div id="about-section" className="py-16 px-6 bg-white text-center">
    <h2 className="text-3xl font-bold text-gray-800">
      {t('about.headline')}
    </h2>
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      {t('about.content')}
    </p>
  </div>    

  );
}
