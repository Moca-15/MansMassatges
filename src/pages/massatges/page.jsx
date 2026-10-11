import React from 'react';
import './../../styles/massatges.css';

import massageImage1 from '../../assets/images/massage1.jpg';
import massageImage2 from '../../assets/images/massage2.jpg';
import massageImage3 from '../../assets/images/massage1.jpg';
import massageImage4 from '../../assets/images/massage2.jpg';

const ServicesPage = () => {
  // TOSSA
  // Fita
  // RElaxant Valeriana
  // relaxant spa momentum
  const services = [
    {
      id: 1,
      image: massageImage1,
      duration: "60' (Esquena-Braços) / 90' (Cos Sencer)",
      price: '65€ / 80€',
    },
    {
      id: 2,
      image: massageImage2,
      duration: "60'",
      price: '55€',
    },
    {
      id: 3,
      image: massageImage3,
      duration: "90'",
      price: '120€',
    },
    {
      id: 4,
      image: massageImage4,
      duration: "120'",
      price: '145€',
    },
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      {/* <section className="services-hero">
        <h1>Our Massage Treatments</h1>
        <div className="services-hero-divider" />
        <p className="services-hero-subtitle">
          Each session is tailored to your unique needs. Discover the treatment that resonates with your body.
        </p>
      </section> */}

      {/* Introduction */}
      {/* <section className="services-intro">
        <div className="services-intro-content">
          <p>
            Whether you seek deep relief from chronic tension, a soothing escape from daily stress, 
            or specialised care during a transformative time in your life, our range of massage 
            therapies offers a path back to balance. All treatments begin with a brief consultation 
            to understand your goals and any areas of concern.
          </p>
        </div>
      </section> */}

      {/* Service 1 - Light Background */}
      <section className="service-section service-light">
        <div className="service-wrapper">
          <div className="service-image-container">
            <div className="service-image-frame">
              <img src={services[0].image} alt="Swedish massage treatment" className="service-image" />
            </div>
            <div className="service-image-accent" />
          </div>
          <div className="service-content">
            <span className="service-tag">Descontracturant</span>
            <h2>Massatge Tossa</h2>
            <div className="service-divider" />
            <p className="service-description">
              Massatge enfocat a alleujar la tensió muscular, reduir contractures i alliberar les zones més carregades del cos. Ideal per a persones amb tensió acumulada, sobrecàrreg muscular, molèsties cervicals, dorsals o lumbars, estrès o cansament físic.
Mirjançant maniobres profundes i especifiques, es treballen les àrees amb més reigidesa, afavorint la relaxació muscular, la mobilitat i una major sensació de benestar.
            </p>

            <p className="service-list-title">
              Ideal per persones amb: 
            </p>
            <ul className="service-ideal">
                <li>
                  <span className="ideal-icon">◦</span>
                  Sobrecàrrega muscular
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Tensió postural
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Estrès
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Molèsties lleus derivades de l'activitat física
                </li>
            </ul>

            <p className="service-list-title">
              Beneficis: 
            </p>
            <ul className="service-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                Ajuda a relaxar la musculatura
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Pot afavorir una millor mobilitat
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Afavoreix la circulació sanguínia
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Proporciona una sensació de benestar i relaxació general
              </li>
            </ul>
            <p className="service-description">
              Tothom qui vulgui millorar el seu benestar general

            </p>

            <div className="service-meta">
              <div className="service-duration">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>{services[0].duration}</span>
              </div>
              <div className="service-price">
                <span>{services[0].price}</span>
              </div>
            </div>
            <a href="/booking" className="service-cta">Book This Treatment</a>
          </div>
        </div>
      </section>

      {/* Service 2 - Dark Background */}
      <section className="service-section service-dark">
        <div className="service-wrapper ">
          <div className="service-content">
            <span className="service-tag service-tag-alt">Esportiu</span>
            <h2>Massatge Fita</h2>
            <div className="service-divider" />
            <p className="service-description">
              Massatge pensat per a persones actives i esportistes que busquen preparar la musculatura, afavorir la recuperació i alleujar la tensió muscular.
              Mitjançant tècniques específiques i una intensitat adaptada a cada persona, treballarem per a mantenir la musculatura en bones condicions .
            </p>
            <p className="service-list-title">
              Ideal per persones amb: 
            </p>
            <ul className="service-ideal">
                <li>
                  <span className="ideal-icon">◦</span>
                  Mantenir en forma la teva musculatura en períodes d'entrenament intensos o cotinuats
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Preparar la musculatura abans d'una competició o una activitat d'alt rendiment
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  La recuperació muscular després d'una competició o una activitat d'alt rendiment
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Prevenir i evitar lesions!!
                </li>
            </ul>

            <p className="service-list-title">
              Beneficis: 
            </p>
            <ul className="service-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                Afavoreix la recuperació muscuar
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Millora la circulació sanguínia
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Contribueix a prevenir sobrecàrrega i lesions
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Ajuda a disminuir la sensació de fatiga
              </li>
            </ul>
            <p className="service-list-title">
              Indicat per:
            </p>
            <p className="service-description">
              Esportistes i persones físicament actives
            </p>

            <div className="service-meta">
              <div className="service-duration">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>{services[1].duration}</span>
              </div>
              <div className="service-price">
                <span>{services[1].price}</span>
              </div>
            </div>
            <a href="/booking" className="service-cta service-cta-alt">Book This Treatment</a>
          </div>
          <div className="service-image-container">
            <div className="service-image-frame">
              <img src={services[1].image} alt="Deep tissue massage treatment" className="service-image" />
            </div>
            <div className="service-image-accent service-image-accent-alt" />
          </div>
        </div>
      </section>


      {/* Service 3 - Light Background */}
      <section className="service-section service-light">
        <div className="service-wrapper">
          <div className="service-image-container">
            <div className="service-image-frame">
              <img src={services[2].image} alt="Prenatal massage treatment" className="service-image" />
            </div>
            <div className="service-image-accent" />
          </div>
          <div className="service-content">
            <span className="service-tag">PREMIUM</span>
            <h2>Massatge Relaxant Valeriana</h2>
            <div className="service-divider" />
            <p className="service-description">
              En aquest ritual treballarem aplicant gradualment diferents tècniques de massatge, una relaxació completa del cos i de la ment, diguem que desconnectaràs per reconnectar de nou. 
La llum adecuada, els olis més escollits, les milors essènies i una música envolvent…,  tot plegat farà que visquis una experiència confortable que et durà al benestar i a la relaxació total. Es recomanable després d'un Ritual Relaxant Valeriana no facis cap gran esforç, d'aquesta manera, notaràs molt més els beneficis d'aquest massatge.
            </p>
           <p className="service-list-title">
              Ideal per persones amb: 
            </p>
            <ul className="service-ideal">
                <li>
                  <span className="ideal-icon">◦</span>
                  Si pateixes estrès, nerviosisme o ansietat lleu
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Notes molt cansament físic i mental
                </li>
                <li>
                  <span className="ideal-icon">◦</span>
                  Tens dificultat per relaxar-te i descansar.
                </li>
            </ul>

            <p className="service-list-title">
              Beneficis: 
            </p>
            <ul className="service-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                Redueix l'estrès
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Disminueix la tensió muscular.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Ajuda a desconnectar de les cabòries quitidianes.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Aporta sensació de lleugeresa.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Pot afavorir el descans.
              </li>              
            </ul>

            <div className="service-meta">
              <div className="service-duration">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>{services[2].duration}</span>
              </div>
              <div className="service-price">
                <span>{services[2].price}</span>
              </div>
            </div>
            <a href="/booking" className="service-cta">Book This Treatment</a>
          </div>
        </div>
      </section>

      {/* Service 4 - Dark Background */}
      <section className="service-section service-dark">
        <div className="service-wrapper  service-wrapper-reverse">
          <div className="service-image-container">
            <div className="service-image-frame">
              <img src={services[2].image} alt="Prenatal massage treatment" className="service-image" />
            </div>
            <div className="service-image-accent" />
          </div>
          <div className="service-content">
            <span className="service-tag">PREMIUM</span>
            <h2>Massatge Relaxant Valeriana</h2>
            <div className="service-divider" />
            <p className="service-description">
              Dues hores, una experiència diferent.
Un treball corporal complet en el que combino diferents tècniques de spa amb el so envolvent dels Gongs tibetans farem un recorregut pel cos que serà profunda i relaxant.
Quedaràs com nova.
            </p>
            <div className="service-meta">
              <div className="service-duration">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>{services[2].duration}</span>
              </div>
              <div className="service-price">
                <span>{services[2].price}</span>
              </div>
            </div>
            <a href="/booking" className="service-cta">Book This Treatment</a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="services-cta-banner">
        <h2>No estàs segur de quin és el massatge adequat?</h2>
        <p>Contacta'm de manera gratuïta i t'ajudaré a triar el tractament que s'adapta a tu</p>
        <a href="/contact" className="banner-cta">Contact Us</a>
      </section>
    </div>
  );
};

export default ServicesPage;
