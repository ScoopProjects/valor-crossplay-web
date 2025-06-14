
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const Store = () => {
  const ranks = [
    {
      name: 'Knight',
      price: '$5',
      emoji: '🪙',
      color: 'from-yellow-500 to-yellow-600',
      perks: [
        '+5 Homes',
        '/feed command',
        '/repair command',
        'Priority support',
        'Knight prefix'
      ]
    },
    {
      name: 'Champion',
      price: '$10',
      emoji: '⚔️',
      color: 'from-blue-500 to-blue-600',
      perks: [
        'All Knight perks',
        '/fly command',
        'Special kit access',
        '+10 Homes',
        'Champion prefix',
        'Exclusive areas'
      ]
    },
    {
      name: 'Overlord',
      price: '$20',
      emoji: '👑',
      color: 'from-purple-500 to-purple-600',
      perks: [
        'All Champion perks',
        'Monthly crate keys',
        'Colored chat',
        'Exclusive title',
        '+20 Homes',
        'VIP priority',
        'Custom commands'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-16 bg-dark-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-neon-blue">ValorNetwork</span> Store
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unlock exclusive perks and dominate the battlefield
          </p>
          <div className="inline-block bg-neon-gradient p-4 rounded-lg">
            <p className="text-white font-semibold">
              💳 Secure payments • 🎁 Instant delivery • 🔒 Lifetime access
            </p>
          </div>
        </div>
      </div>

      {/* Ranks Grid */}
      <div className="py-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ranks.map((rank, index) => (
              <div 
                key={index}
                className="bg-dark-card border border-gray-800 rounded-xl p-8 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
              >
                {/* Popular Badge for Champion */}
                {rank.name === 'Champion' && (
                  <div className="absolute top-0 right-0 bg-neon-blue text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                {/* Rank Header */}
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{rank.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{rank.name}</h3>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                    {rank.price}
                  </div>
                </div>

                {/* Perks List */}
                <div className="space-y-3 mb-8">
                  {rank.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center space-x-3">
                      <div className="text-neon-blue">✓</div>
                      <span className="text-gray-300">{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${rank.color} hover:opacity-90 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105`}
                >
                  Buy Now
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-dark-card border border-neon-purple/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                💡 <span className="text-neon-purple">Important Information</span>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>• All purchases are processed securely through our payment system</p>
                <p>• Perks are delivered instantly to your in-game account</p>
                <p>• Rank benefits are permanent and never expire</p>
                <p>• Need help? Contact our support team on Discord</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
