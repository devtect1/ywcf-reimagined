import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <FacilitiesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;