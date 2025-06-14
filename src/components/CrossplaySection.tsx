
const CrossplaySection = () => {
  const platforms = [
    { name: 'Mobile', icon: '📱', status: '✅' },
    { name: 'Xbox', icon: '🎮', status: '✅' },
    { name: 'PlayStation', icon: '🎮', status: '✅' },
    { name: 'Switch', icon: '🎮', status: '✅' },
    { name: 'PC', icon: '💻', status: '✅' },
  ];

  return (
    <div className="py-16 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-neon-blue">Cross-Platform</span> Compatible
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Everyone plays together—no limits, no excuses.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-dark-bg rounded-lg border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:transform hover:scale-110"
            >
              <div className="text-4xl mb-2">{platform.icon}</div>
              <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
              <div className="text-2xl">{platform.status}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-neon-gradient p-6 rounded-lg">
            <p className="text-white text-lg font-semibold">
              🌟 Play anywhere, anytime, with anyone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossplaySection;
