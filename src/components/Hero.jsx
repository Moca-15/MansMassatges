import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">{t('homepage.headline')}</h1>
      <p className="mt-4 text-lg">{t('homepage.subheadline')}</p>
      <div className="mt-6 space-x-4">
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          {t('homepage.ctaLearnMore')}
        </button>
        <button className="bg-blue-700 px-4 py-2 rounded">
          {t('homepage.ctaRequestDemo')}
        </button>
      </div>
    </section>
  );
}