import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t('testimonials.list', { returnObjects: true });

  return (
    <section id="testimonials" className="p-8 bg-white text-gray-800">
      <h2 className="text-2xl font-bold text-center">{t('testimonials.headline')}</h2>
      <div className="mt-8 space-y-6">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="border-l-4 border-blue-600 pl-4 italic">
            <p>{testimonial.quote}</p>
            <footer className="mt-2 text-right font-bold">{testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
