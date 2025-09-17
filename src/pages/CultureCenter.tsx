import CultureNavbar from '@/components/culture/CultureNavbar';
import CultureHero from '@/components/culture/CultureHero';
import CulturePrograms from '@/components/culture/CulturePrograms';
import CultureNews from '@/components/culture/CultureNews';
import CultureFooter from '@/components/culture/CultureFooter';

const CultureCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-culture-light to-background">
      <CultureNavbar />
      <CultureHero />
      <CulturePrograms />
      <CultureNews />
      <CultureFooter />
    </div>
  );
};

export default CultureCenter;