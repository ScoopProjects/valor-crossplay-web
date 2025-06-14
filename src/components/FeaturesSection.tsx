
const FeaturesSection = () => {
  const features = [
    {
      icon: '⚔️',
      title: 'Full-featured Factions',
      description: 'Create alliances, raid enemies, and dominate the battlefield'
    },
    {
      icon: '💰',
      title: 'Balanced Economy',
      description: 'Custom shops and trading systems for fair gameplay'
    },
    {
      icon: '🔥',
      title: 'Competitive PvP Events',
      description: 'KOTH battles and tournaments with epic rewards'
    },
    {
      icon: '🏰',
      title: 'Claim & Build',
      description: 'Protect your land and build unraidable fortresses'
    },
    {
      icon: '🧑‍🤝‍🧑',
      title: 'Active Community',
      description: 'Dedicated staff and growing player base'
    },
    {
      icon: '🚀',
      title: 'Lag-free Performance',
      description: 'Optimized servers for all devices and platforms'
    }
  ];

  return (
    <div className="py-16 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-neon-purple">Valor</span>?
          </h2>
          <p className="text-gray-400 text-lg">Experience the best Minecraft Factions server</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-dark-card border border-gray-800 rounded-lg p-8 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-neon-blue/20"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
