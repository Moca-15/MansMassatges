import { React } from 'react';
import './../../styles/profile.css';
import { Profile } from '../../assets';
import { HomeBackground } from '../../assets/index.js';



export default function App() {
  return (
    <section className='relative'>
        <div className="background"></div>
        <div className="app">
            <div className="content">
                <div className='image-wrapper'>
                    <img 
                        src={Profile}
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
