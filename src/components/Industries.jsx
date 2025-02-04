import { useTranslation } from 'react-i18next';

export default function Industries() {
  const { t } = useTranslation();

  const industriesIdx = t('industries.listIdx', { returnObjects: true });

  const industries = t('industries.list', { returnObjects: true });

  return (
    <section id="process" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('industries.headline')}</h2>
      <ol className="mt-8 space-y-4">
        {industriesIdx.map((ind, index) => (
          <li key={index} className="flex items-start">
            <span className="font-bold text-lg mr-4">{index + 1}. {ind}:</span>
            <p>{industries[index]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
