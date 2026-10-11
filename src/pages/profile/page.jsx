import { React } from 'react';
import './../../styles/profile.css';
import { ProfileImg } from '../../assets';


/*
export default function App() {
  return (
    <section className='relative'>
        <div className="background"></div>
        <div className="app">
            <div className="content">
                <div className='image-wrapper'>
                    <img 
                        src={ProfileImg}
                        alt="Profile Image" 
                        className="main-image"
                    />
                </div>
                <div className='text-wrapper'>
                    <p className="text-snippet">
                    Fa deu anys vaig començar en el mon del quiromassatge, tenia un objectiu clar: cuidar.
                    Em vaig formar amb els millors professors i em vaig posar a treballar, primer en hotels, després a domicilis.
                    L'experiència en hotels de luxe em va ensenyar l'exigència i el detall, però poc a poc vaig voler crear els meus propis protocols de massatge i alhora que oferir més comoditat als meus clients,  això em va portar a especialitzar-me en el massatge a domicili.
                    Entenent que cada  cos és un únic i per tant té unes necessitats diferents, personalitzo el meu servei, adaptant-me a les circumstàncies  de cadascú i fent servir la tècnica més adecuada en cada cas.
                    </p>
                    <p className='text-snippet'>
                    Per això m'he centrat en tres àrees:
                    </p>
                    <ul className='enumeration'>
                        <li className='text-snippet'>Massatge Esportiu</li>
                        <li className='text-snippet'>Massatge Descontracturant</li>
                        <li className='text-snippet'>Massatge Relaxant</li>
                    </ul>
                    <p className='text-snippet'>
                    Tant si sents que necessites preparar el teu cos abans o després d'un entrenament  intens, una cursa, etc. amb un massatge esportiu, com si el que busques és alliberar nusos musculars amb un massatge descontracturant o vols evadir-te de l'estrès diari amb un massatge relaxant, la meva mà s'adapta a tu.
                    </p>
                    <p className='text-snippet'>
                    Amb una simple cita concertada, jo em desplaço a casa teva amb tot el material necessari.
                    </p>
                    <p className='text-snippet'>
                    Són deu  anys escoltant i cuidant cossos. Son deu anys cuidant-vos amb les meves mans
                    </p>
                </div>
            
            
        </div>
        
        </div>
    </section>
  );
}
*/



// const AboutPage = () => {
//   return (
//     <div className="about-page">
//       {/* Hero Section */}
//       <div className="about-hero">
//         <div className="about-hero-overlay" />
//         <div className="about-hero-content">
//           <h1 className="about-hero-title">Meet Your Therapist</h1>
//           <div className="about-hero-divider" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="about-main">
//         <div className="about-content-wrapper">
//           {/* Image Section */}
//           <div className="about-image-section">
//             <div className="about-image-frame">
//               <img
//                 src={ProfileImg}
//                 alt="Massage therapist in a calm, professional setting"
//                 className="about-image"
//               />
//             </div>
//             <div className="about-image-accent" />
//           </div>

//           {/* Text Section */}
//           <div className="about-text-section">
//             <h2 className="about-section-tag">About</h2>
//             <div className="about-text-divider" />

//             <div className="about-credentials">
//               <div className="about-credential-item">
//                 <span className="about-credential-dot" />
//                 <p className="about-credential-text"></p>
//               </div>
//               <div className="about-credential-item">
//                 <span className="about-credential-dot" />
//                 <p className="about-credential-text"></p>
//               </div>
//               <div className="about-credential-item">
//                 <span className="about-credential-dot" />
//                 <p className="about-credential-text"></p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Philosophy Cards */}
//         <div className="about-philosophy-grid">
//           <div className="about-philosophy-card">
//             <h3 className="about-philosophy-title">My Philosophy</h3>
//             <div className="about-philosophy-divider" />
//             <div className="about-philosophy-content">
//               {/* Placeholder for philosophy text */}
//             </div>
//           </div>

//           <div className="about-philosophy-card">
//             <h3 className="about-philosophy-title">My Approach</h3>
//             <div className="about-philosophy-divider" />
//             <div className="about-philosophy-content">
//               {/* Placeholder for approach text */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



// AboutPage.jsx



const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      {/* <section className="about-hero">
        <h1>About Me</h1>
        <div className="about-hero-divider" />
        <p className="about-hero-subtitle">
          A space where calm, care, and expert hands meet.
        </p>
      </section> */}

      {/* Presentation Section */}
      <section className="about-section">
        <div className="about-wrapper">
          {/* Image */}
          <div className="about-image-container">
            <div className="about-image-frame">
              <img
                src={ProfileImg}
                alt="Imatge"
                className="about-image"
              />
            </div>
            <div className="about-image-accent" />
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="about-tag">Qui sóc</span>
            <div className="about-divider" />

            <p className="about-description">
              Soc l'Agnès. Vaig néixer a Barcelona però fa molts anys que el Pirineu és casa meva. He viscut al Pallars i a l'Aran, actualment estic establerta a la Cerdanya.
            </p>

            <p className="about-description">
              Fa deu anys que em dedico professionalment als massatges i a l'ensenyament del ioga (Hatha, Vinyasa, Yin, Prenatal, Oncològic). Aquesta trajectòria m'ha permès desenvolupar una manera de treballar atenta, propera i adaptada a cada persona.
              Em vaig formar inicialment en tècniques de quiromassatge i massatge esportiu. Amb els anys, he continuat ampliant els meus coneixements amb tècniques de spa, massatges orientals i formació en kinesiologia. La formació contínua i l'experiència són la base de la meva feina. 

            </p>

            <p className="about-description">
              Treballar a domicili em permet personalitzar els massatges i adaptar-los a les necessitats de cada persona, tot això en un entorn familiar i còmode. Crear els meus propis protocols, escollir tots els elements que fan que cada massatge es converteixi en una experiència de 5 estrelles i, cuidar fins l'últim detall. 
            </p>

            <p className="about-description">
              En aquest camí, Jordi Casalta i Rafa Cortés han estat dos referents importants. D'ells he après coneixements tècnics i una manera d'entendre l'ofici basada en la humilitat, la sensibilitat i el respecte.
            </p>

            <p className="about-description">
              La meva manera de treballar uneix experiència, tècnica i tracte humà: escoltar, adaptar i cuidar.
            </p>



            <a href="/massatges" className="about-cta">Descobreix els massatges</a>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="about-values-strip">
        <ul className="values-strip-list">
          <li>Respecte</li>
          <li>Humilitat</li>
          <li>Honestedat</li>
          <li>Autenticitat</li>
          <li>Calma</li>
        </ul>
      </section>



      {/* CTA */}
      <section className="about-cta-banner">
        <h2>Vols reservar la teva sessió?</h2>
        <p>Estaré encantada d'acompanyar-te en aquest camí cap al benestar.</p>
        <a href="/contact" className="banner-cta">Contacta amb mi</a>
      </section>
    </div>
  );
};

export default AboutPage;