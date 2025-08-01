import React, { useState } from 'react';
import { Star, Trophy, Gift, TrendingUp, Award, Target, Zap, Crown } from 'lucide-react';

const SparkCoin = () => {
  const [activeTab, setActiveTab] = useState('earn');

  const earnMethods = [
    {
      icon: Target,
      title: 'Complete Sprint Modules',
      coins: 50,
      description: 'Finish each learning module in your active sprint',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'Submit Projects',
      coins: 100,
      description: 'Submit high-quality projects for mentor review',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Attend Mentorship Sessions',
      coins: 25,
      description: 'Actively participate in mentor-led sessions',
      color: 'orange'
    },
    {
      icon: Star,
      title: 'Peer Collaboration',
      coins: 30,
      description: 'Help fellow students and collaborate on projects',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Innovation Challenges',
      coins: 200,
      description: 'Win weekly innovation challenges and competitions',
      color: 'yellow'
    },
    {
      icon: Crown,
      title: 'Demo Day Participation',
      coins: 300,
      description: 'Present at Demo Days and showcase events',
      color: 'red'
    }
  ];

  const rewards = [
    {
      title: 'Pathfinder T-Shirt',
      coins: 500,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      category: 'Merchandise'
    },
    {
      title: 'Premium Mentorship Session',
      coins: 800,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      category: 'Learning'
    },
    {
      title: 'Startup Toolkit',
      coins: 1200,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Resources'
    },
    {
      title: 'Industry Conference Pass',
      coins: 2000,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      category: 'Events'
    },
    {
      title: 'Laptop Upgrade Voucher',
      coins: 5000,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
      category: 'Technology'
    },
    {
      title: 'Internship Guarantee',
      coins: 8000,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      category: 'Career'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Arjun Kumar', coins: 3250, track: 'Startup Builder', avatar: 'AK' },
    { rank: 2, name: 'Priya Sharma', coins: 2890, track: 'Skill Collaborator', avatar: 'PS' },
    { rank: 3, name: 'Rohit Singh', coins: 2650, track: 'Startup Builder', avatar: 'RS' },
    { rank: 4, name: 'Anita Devi', coins: 2400, track: 'Skill Collaborator', avatar: 'AD' },
    { rank: 5, name: 'Vikash Kumar', coins: 2150, track: 'Startup Builder', avatar: 'VK' }
  ];

  return (
    <section id="spark-coin" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>Spark Coin Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gamified Learning Rewards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Earn Spark Coins for every achievement, redeem for amazing rewards, 
            and compete with peers in our innovation leaderboard.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex overflow-x-auto">
            {[
              { id: 'earn', label: 'Earn Coins', icon: Star },
              { id: 'redeem', label: 'Redeem Rewards', icon: Gift },
              { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-yellow-500 text-white'
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'earn' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How to Earn Spark Coins
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-${method.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                    <method.icon className={`h-8 w-8 text-${method.color}-600`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h4>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-2xl font-bold text-yellow-600">{method.coins}</span>
                      <span className="text-gray-500">coins</span>
                    </div>
                    <button className={`bg-${method.color}-600 text-white px-4 py-2 rounded-lg hover:bg-${method.color}-700 transition-colors text-sm font-medium`}>
                      Start Earning
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus Section */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Bonus Opportunities!</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-2">2x</div>
                  <div className="text-purple-100">Weekend Challenges</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-2">500</div>
                  <div className="text-purple-100">Monthly Login Bonus</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-3xl font-bold mb-2">1000</div>
                  <div className="text-purple-100">Referral Bonus</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'redeem' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Redeem Your Spark Coins
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {reward.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold text-yellow-600">{reward.coins}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{reward.title}</h4>
                    <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
                      Redeem Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offers */}
            <div className="mt-12 bg-yellow-100 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                🔥 Limited Time Offers
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-yellow-300">
                  <h4 className="font-bold text-gray-900 mb-2">Early Bird Special</h4>
                  <p className="text-gray-600 mb-3">Get 20% off on all merchandise this month!</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600 line-through">500 coins</span>
                    <span className="text-xl font-bold text-green-600">400 coins</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-yellow-300">
                  <h4 className="font-bold text-gray-900 mb-2">Bundle Deal</h4>
                  <p className="text-gray-600 mb-3">T-shirt + Stickers + Certificate combo</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600 line-through">800 coins</span>
                    <span className="text-xl font-bold text-green-600">600 coins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Top Performers This Month
            </h3>
            
            {/* Top 3 Podium */}
            <div className="flex justify-center items-end space-x-4 mb-12">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl font-bold text-gray-700">{leaderboard[1].avatar}</span>
                </div>
                <div className="bg-gray-200 rounded-t-lg p-4 h-24 flex flex-col justify-center">
                  <div className="text-2xl font-bold text-gray-600 mb-1">2</div>
                  <div className="font-medium text-gray-800">{leaderboard[1].name}</div>
                  <div className="text-sm text-gray-600">{leaderboard[1].coins} coins</div>
                </div>
              </div>

              {/* 1st Place */}
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-3 mx-auto border-4 border-yellow-300">
                  <span className="text-xl font-bold text-yellow-800">{leaderboard[0].avatar}</span>
                </div>
                <div className="bg-yellow-400 rounded-t-lg p-4 h-32 flex flex-col justify-center">
                  <Crown className="h-6 w-6 text-yellow-800 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-yellow-800 mb-1">1</div>
                  <div className="font-medium text-yellow-900">{leaderboard[0].name}</div>
                  <div className="text-sm text-yellow-700">{leaderboard[0].coins} coins</div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl font-bold text-orange-800">{leaderboard[2].avatar}</span>
                </div>
                <div className="bg-orange-300 rounded-t-lg p-4 h-20 flex flex-col justify-center">
                  <div className="text-2xl font-bold text-orange-700 mb-1">3</div>
                  <div className="font-medium text-orange-900">{leaderboard[2].name}</div>
                  <div className="text-sm text-orange-700">{leaderboard[2].coins} coins</div>
                </div>
              </div>
            </div>

            {/* Full Leaderboard */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h4 className="text-xl font-bold">Complete Leaderboard</h4>
              </div>
              <div className="divide-y divide-gray-200">
                {leaderboard.map((student, index) => (
                  <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-400 text-yellow-800' :
                        index === 1 ? 'bg-gray-300 text-gray-700' :
                        index === 2 ? 'bg-orange-300 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {student.rank}
                      </div>
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="font-medium text-gray-700">{student.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.track}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-xl font-bold text-gray-900">{student.coins}</span>
                      <span className="text-gray-500">coins</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Achievement Badges</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { title: 'Sprint Master', desc: 'Complete 5 sprints', icon: '🏃‍♂️' },
                  { title: 'Mentor\'s Choice', desc: 'Top rated by mentors', icon: '⭐' },
                  { title: 'Innovation Leader', desc: 'Win 3 challenges', icon: '💡' },
                  { title: 'Community Helper', desc: 'Help 10 peers', icon: '🤝' }
                ].map((badge, index) => (
                  <div key={index} className="bg-white/20 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="font-semibold mb-1">{badge.title}</div>
                    <div className="text-sm text-blue-100">{badge.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SparkCoin;