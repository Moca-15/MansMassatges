import React from 'react';
import './App.css'

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Comprovar que la conf està inicialitzada!!!

// Importar pags
import { Home } from './pages'

// Importar components
import { Header, Footer } from './static_components/index.js'

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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />


          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




