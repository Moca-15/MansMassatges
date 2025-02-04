import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center">{t('contact.headline')}</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
        <input type="text" placeholder={t('contact.name')} className="w-full p-2 border rounded" />
        <input type="email" placeholder={t('contact.email')} className="w-full p-2 border rounded" />
        <input type="text" placeholder={t('contact.company')} className="w-full p-2 border rounded" />
        <textarea placeholder={t('contact.message')} className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
          {t('contact.submit')}
        </button>
      </form>
    </section>
  );
}
