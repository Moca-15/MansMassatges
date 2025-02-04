import { useTranslation } from 'react-i18next';

export default function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    { key: 'security', title: t('solutions.security.title'), description: t('solutions.security.description'), features: t('solutions.security.features', { returnObjects: true}) },
    { key: 'performance', title: t('solutions.performance.title'), description: t('solutions.performance.description'), features: t('solutions.performance.features', { returnObjects: true}) },
    { key: 'ai', title: t('solutions.ai.title'), description: t('solutions.ai.description'), features: t('solutions.ai.features', { returnObjects: true}) },
  ];

  return (
    <section id="solutions" className="p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('solutions.headline')}</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div key={solution.key} className="border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold">{solution.title}</h3>
            <p className="mt-2">{solution.description}</p>

            <ul className="mt-4 list-disc list-inside text-gray-600">
                {solution.features.map((feature, index) => (
                  <li key={index} className="mt-2">
                    {feature}
                  </li>
                ))}
              </ul>
              
          </div>
        ))}
      </div>
    </section>
  );
}