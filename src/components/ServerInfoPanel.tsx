
const ServerInfoPanel = () => {
  const serverInfo = [
    { icon: '🎮', label: 'Server', value: 'Valor | Bedrock + Java Compatible' },
    { icon: '🗡️', label: 'Features', value: 'Factions PvP | Raiding | Economy | Crossplay' },
    { icon: '🌍', label: 'IP', value: '<ip>' },
    { icon: '📱', label: 'Bedrock Port', value: '<bedrockport>' },
    { icon: '💻', label: 'Java Port', value: '<javaport>' },
    { icon: '🧭', label: 'Version', value: '1.8.8 - 1.20+' },
    { icon: '🟢', label: 'Status', value: 'Online 24/7' },
  ];

  return (
    <div className="py-16 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Server <span className="text-neon-blue">Information</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about Valor MC</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-dark-bg border border-neon-blue/20 rounded-lg p-6 hover:border-neon-purple/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{info.icon}</div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">{info.label}</h3>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerInfoPanel;
