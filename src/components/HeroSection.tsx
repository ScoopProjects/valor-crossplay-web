
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-dark-bg/70"></div>
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-transparent to-neon-purple/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-neon-purple/10 animate-glow"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-neon-blue rounded-full animate-glow opacity-50"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-neon-purple rounded-full animate-bounce opacity-80"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-neon-blue rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-neon-purple rounded-full animate-glow opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center animate-glow">
            <span className="text-4xl font-bold text-white">V</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse-glow">
          <span className="text-neon-blue">VALOR</span>
          <span className="text-neon-purple">NETWORK</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          🛡️ Join ValorNetwork – The Ultimate Cross-Platform Factions Experience!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-neon-gradient text-white px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 animate-glow"
          >
            🚀 Join Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            💬 Discord
          </Button>
        </div>
      </div>

      {/* Scroll indicator - repositioned */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center bg-dark-bg/30 backdrop-blur-sm">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
