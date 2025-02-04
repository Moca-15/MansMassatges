import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const featuresIdx = t('features.listIdx', { returnObjects: true });

  const features = t('features.list', { returnObjects: true });

  return (
    <section id="process" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('features.headline')}</h2>
      <ul className="mt-8 space-y-4">
        {featuresIdx.map((ft, index) => (
          <li key={index} className="flex items-start">
            <span className="font-bold text-lg mr-4">{ft}</span>
            <p>{features[index]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
