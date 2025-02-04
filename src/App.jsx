import React from 'react';
import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Comprovar que la conf està inicialitzada!!!


// Importar pags
import { Home, Information }  from './pages/index.js'

// Importar components
import { Header, Footer } from './components/index.js'
import { About, Solutions, ContactForm } from './components/index.js'

import Process from './components/Process.jsx';

import Features from './components/Features.jsx';
import Hero from './components/Hero.jsx';
import Industries from './components/Industries.jsx';
import Testimonials from './components/Testimonials.jsx';


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
            <Route path="/information" element={<Information />} />
            <Route path="/contact" element={<ContactForm />} />


            {/* <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/process" element={<Process />} />
            <Route path="/features" element={<Features />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/testimonials" element={<Testimonials />} /> */}

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




