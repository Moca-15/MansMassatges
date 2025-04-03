import React from 'react';
import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Comprovar que la conf està inicialitzada!!!


// Importar pags
import { Home, Information, Products, Pricing, GetStarted, Checkout }  from './pages/index.js'

// Importar components
import { Header, Footer } from './components/index.js'


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
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/getStarted" element={<GetStarted />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* <Route path="/policies" element={<Policies />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/examples" element={<Examples />} /> */}


          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




