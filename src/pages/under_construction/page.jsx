// UnderConstruction.jsx
import React from 'react';
import './../../styles/under_construction.css'

import { HomeBackground } from '../../assets/index.js';
import { LogoBlue } from '../../assets/index.js';



const UnderConstruction = () => {
  return (
    <section>
        <div className="fixed inset-0 bg-cover bg-center -z-10 bg-fixed"
            style={{backgroundImage: `url(${HomeBackground})`}}
        ></div>
        <div className="fixed inset-0 bg-black bg-opacity-50 -z-10"></div> {/* opacitat negra pel fons */}

        

        <div className="construction-container">
            <div className="construction-content">
                <div className="icon-container">
                    <img 
                        src={LogoBlue} 
                        alt="Under Construction" 
                        className="construction-icon"
                    />
                </div>
                
                <h3 className="title-big">En Construcció</h3>
                <h2 className="title-smol">En construcción · En Construction · Under Construction</h2>
                {/* <h2 className="title-smol"></h2>
                <h2 className="title-smol"></h2> */}

                <p className="message-big">
                    Aquesta pàgina no està disponible actualment. Contacta +34 676 68 98 68 per a més informació.
                </p>
                <p className="message-smol">
                    Esta página no está disponible. Contacta +34 676 68 98 68 para más información. 
                </p>
                <p className="message-smol">
                    This website is currently unavailable. Contact +34 676 68 98 68 for more information.
                </p>
                <p className="message-smol">
                    Ce cite web n'est pas disponible. Contactez +34 676 68 98 68 pour plus d'information.
                </p>
            </div>
        </div>

    </section>
    
  );
};

export default UnderConstruction;