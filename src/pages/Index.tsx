
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServerInfoPanel from '@/components/ServerInfoPanel';
import FeaturesSection from '@/components/FeaturesSection';
import CrossplaySection from '@/components/CrossplaySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <HeroSection />
      <ServerInfoPanel />
      <FeaturesSection />
      <CrossplaySection />
    </div>
  );
};

export default Index;
