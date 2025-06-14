
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CrossplaySection from '@/components/CrossplaySection';
import ServerInfoPanel from '@/components/ServerInfoPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CrossplaySection />
      <ServerInfoPanel />
    </div>
  );
};

export default Index;
