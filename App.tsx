import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Pages
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import AreaPage from './pages/AreaPage';
import GuidePage from './pages/GuidePage';
import { ContactPage, AboutPage, ReviewsPage, FAQPage, PrivacyPage } from './pages/GeneralPages';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-primary-800 selection:text-white overflow-x-hidden flex flex-col">
        <Navbar setIsQuoteModalOpen={setIsQuoteModalOpen} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home setIsQuoteModalOpen={setIsQuoteModalOpen} />} />

            {/* Services Routes */}
            <Route path="/services" element={<ServicePage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/services/:slug" element={<ServicePage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />

            {/* Areas Routes */}
            <Route path="/areas" element={<AreaPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/areas/:slug" element={<AreaPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />

            {/* Guides Routes */}
            <Route path="/guides" element={<GuidePage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/guides/:slug" element={<GuidePage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />

            {/* General Routes */}
            <Route path="/contact" element={<ContactPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/about" element={<AboutPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/reviews" element={<ReviewsPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/faqs" element={<FAQPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/terms" element={<PrivacyPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
            <Route path="/cookie-policy" element={<PrivacyPage setIsQuoteModalOpen={setIsQuoteModalOpen} />} />
          </Routes>
        </main>
        <Footer setIsQuoteModalOpen={setIsQuoteModalOpen} />
        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </Router>
  );
};

export default App;