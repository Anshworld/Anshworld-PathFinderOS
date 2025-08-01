import React from 'react';
import { TrendingUp, Users, Rocket, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students Empowered',
      description: 'Across Tier-3 cities in India',
      color: 'blue'
    },
    {
      icon: Rocket,
      number: '50+',
      label: 'Startups Launched',
      description: 'With successful MVPs and funding',
      color: 'green'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Job Placements',
      description: 'In top companies and startups',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Success Rate',
      description: 'Students achieve their goals',
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impact That Speaks Volumes
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real results from real students across India's Tier-3 regions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              
              <div className="text-blue-100">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">₹2.5 Cr+</div>
            <div className="text-blue-100">Total funding raised by alumni startups</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">20+ Cities</div>
            <div className="text-blue-100">Across Jharkhand, Bihar, and expanding</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">95%</div>
            <div className="text-blue-100">Student satisfaction rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;