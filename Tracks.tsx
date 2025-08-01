import React from 'react';
import { Rocket, Users, ArrowRight, Star, Target, Briefcase } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      id: 'startup',
      title: 'Startup Builder',
      subtitle: 'For Original Thinkers',
      description: 'Transform your ideas into real ventures. Learn ideation, MVP development, pitching, and go-to-market strategies.',
      icon: Rocket,
      color: 'blue',
      features: [
        'Idea to MVP Development',
        'Pitch & Presentation Skills',
        'Business Model Design',
        'Investor Communication',
        'Legal & IP Guidance',
        'Demo Day Preparation'
      ],
      outcome: 'Launch your own startup',
      duration: '6-12 months',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'collaborator',
      title: 'Skill Collaborator',
      subtitle: 'For Expert Executors',
      description: 'Master in-demand skills and become an invaluable team member. Focus on technical, design, or operations excellence.',
      icon: Users,
      color: 'orange',
      features: [
        'Domain Skill Mastery',
        'Resume & Portfolio Building',
        'Interview Preparation',
        'Workplace Communication',
        'Team Collaboration',
        'Industry Placement'
      ],
      outcome: 'Secure role-fit job placement',
      duration: '3-6 months',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Track
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dual-track model lets you choose the path that aligns with your aspirations. 
            Whether you want to build your own venture or excel in a specialized role, we've got you covered.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${track.gradient} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <track.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{track.title}</h3>
                    <p className="text-white/90">{track.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/95 text-lg">{track.description}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    What You'll Learn
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {track.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${track.color}-500`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-600">Outcome</div>
                      <div className="font-medium text-gray-900">{track.outcome}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium text-gray-900">{track.duration}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className={`w-full bg-gradient-to-r ${track.gradient} text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:transform group-hover:scale-105`}>
                  <span className="font-medium">Choose This Track</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Can't Decide Section */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Decide Which Track?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take our free assessment to discover which path aligns best with your interests, 
            skills, and career goals. Our personalized recommendations will guide you.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
            Take Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tracks;