import React from 'react';
import './App.css'

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Comprovar que la conf està inicialitzada!!!

// Importar pags
import { UC } from './pages'
import { Home, SobreMi, Massatges, Test } from './pages'

// Importar components
import { Header, Footer } from './static_components/index.js'



// FOR DEPLOYMENT

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content (només rutes de pags, les de components són per test/debug*/}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<UC />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/massatges" element={<Massatges />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

// // FOR CONSTRUCTION
// function App() {
//   const { t } = useTranslation();

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Header */}
//         {/* Main Content (només rutes de pags, les de components són per test/debug*/}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<UC />} />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }


export default App;




