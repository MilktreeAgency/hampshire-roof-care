import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import WhyChooseUs from '../components/WhyChooseUs';
import CommonProblems from '../components/CommonProblems';
import ServicesBento from '../components/ServicesBento';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import HomeFAQs from '../components/HomeFAQs';
import AreasStrip from '../components/AreasStrip';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';

interface HomeProps {
  setIsQuoteModalOpen: (open: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ setIsQuoteModalOpen }) => {
  return (
    <>
      <SEO 
        title="Expert Roofing Services in Hampshire"
        description="Professional roof repairs, replacements, and maintenance across Hampshire. Free site surveys, honest advice, and quality workmanship. Serving Southampton, Winchester, New Forest, and surrounding areas."
        canonical="/"
        ogType="website"
      />
      <Hero setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <TrustStrip setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <ServicesBento setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <WhyChooseUs setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <CommonProblems setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <Process setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <Testimonials setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <HomeFAQs setIsQuoteModalOpen={setIsQuoteModalOpen} />
      <AreasStrip />
      <FinalCTA setIsQuoteModalOpen={setIsQuoteModalOpen} />
    </>
  );
};

export default Home;
