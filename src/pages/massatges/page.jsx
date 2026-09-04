import React from 'react';
import './../../styles/massatges.css';

import massageImage1 from '../../assets/images/massage1.jpg';
import massageImage2 from '../../assets/images/massage2.jpg';
import massageImage3 from '../../assets/images/massage1.jpg';

const ServicesPage = () => {
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
      duration: '60 / 90 min',
      price: '€75 / €100',
    },
    {
      id: 3,
      image: massageImage3,
      duration: '60 / 90 min',
      price: '€80 / €105',
    },
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <h1>Our Massage Treatments</h1>
        <div className="services-hero-divider" />
        <p className="services-hero-subtitle">
          Each session is tailored to your unique needs. Discover the treatment that resonates with your body.
        </p>
      </section>

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
            <ul className="service-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                Redueix la sensació de regidesa i sobrecàrrega
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Redueix l'estrès i la sensación de cansament.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Millora la mobilitat i la flexibilitat muscular.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Afavoreix la relaxació física i mental.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Afavoreix la circulación sanguínia.
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Afavoreix una millor recuperación després de l'esforç físic.
              </li>

            </ul>
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
        <div className="service-wrapper service-wrapper-reverse">
          <div className="service-content">
            <span className="service-tag service-tag-alt">Therapeutic</span>
            <h2>Deep Tissue Massage</h2>
            <div className="service-divider" />
            <p className="service-description">
              A focused, firm-pressure massage targeting the deeper layers of muscle and connective tissue. 
              Using slow, deliberate strokes and sustained pressure, this treatment releases chronic patterns 
              of tension, adhesions, and stubborn knots throughout the body.
            </p>
            <ul className="service-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                Relieves chronic muscle pain and stiffness
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Breaks down scar tissue and adhesions
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Improves range of motion and posture
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Aids recovery from injury and overuse
              </li>
            </ul>
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
            <span className="service-tag">Specialised Care</span>
            <h2>Prenatal Massage</h2>
            <div className="service-divider" />
            <p className="service-description">
              A gentle, nurturing massage designed specifically for the changing needs of expectant mothers. 
              Using safe positioning with supportive cushions and pillows, this treatment relieves the 
              common discomforts of pregnancy while promoting deep relaxation for both mother and baby.
            </p>
            <ul className="service-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                Reduces back pain, leg cramps, and joint discomfort
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Decreases swelling in hands, feet, and ankles
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Improves sleep quality and reduces anxiety
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                Promotes hormonal balance and overall wellbeing
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

      {/* CTA Banner */}
      <section className="services-cta-banner">
        <h2>Not Sure Which Treatment Is Right For You?</h2>
        <p>Get in touch for a free consultation. We'll help you choose the perfect massage for your needs.</p>
        <a href="/contact" className="banner-cta">Contact Us</a>
      </section>
    </div>
  );
};

export default ServicesPage;
