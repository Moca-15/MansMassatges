import React from 'react';
import { useTranslation } from 'react-i18next';
import { About, Solutions, Process, Features, Industries, Testimonials } from '../components/index' 

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 text-gray-800">
      {/* Secció About (que també es mostra a la pàgina principal)*/}
      <About />
      <hr class="dotted"></hr>
      {/* Secció Solutions */}
      <Solutions />
      <hr class="dotted"></hr>
      {/* Secció Process */}
      <Process />
      <hr class="dotted"></hr>
      {/* Secció Features */}
      <Features />
      <hr class="dotted"></hr>
      {/* Secció Industries */}
      <Industries />
      <hr class="dotted"></hr>
      {/* Secció Testimonials */}
      <Testimonials />
    </section>
  );
}