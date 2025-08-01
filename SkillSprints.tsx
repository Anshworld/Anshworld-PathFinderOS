import React from 'react';
import { Sprout, Zap, MapPin, Beaker, Wind, Heart, GraduationCap, Palette } from 'lucide-react';

const SkillSprints = () => {
  const sprints = [
    {
      title: 'AgriTech Innovation',
      description: 'Smart farming solutions, crop monitoring, and agricultural automation',
      icon: Sprout,
      color: 'green',
      duration: '4 weeks',
      projects: 'Smart irrigation system',
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: 'EV & Robotics',
      description: 'Electric vehicle design, robotics programming, and automation',
      icon: Zap,
      color: 'yellow',
      duration: '6 weeks',
      projects: 'Build a robot prototype',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Tour & Event Management',
      description: 'Hospitality tech, event planning, and customer experience design',
      icon: MapPin,
      color: 'purple',
      duration: '3 weeks',
      projects: 'Plan a virtual tour',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Life Sciences',
      description: 'Biotechnology, healthcare innovation, and medical device development',
      icon: Beaker,
      color: 'blue',
      duration: '5 weeks',
      projects: 'Health monitoring app',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Renewable Energy',
      description: 'Solar tech, wind energy, and sustainable power solutions',
      icon: Wind,
      color: 'teal',
      duration: '4 weeks',
      projects: 'Solar calculator tool',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      title: 'HealthTech',
      description: 'Digital health, telemedicine, and wellness technology',
      icon: Heart,
      color: 'red',
      duration: '5 weeks',
      projects: 'Fitness tracking app',
      gradient: 'from-red-400 to-red-600'
    },
    {
      title: 'EdTech Solutions',
      description: 'Learning platforms, educational games, and student engagement tools',
      icon: GraduationCap,
      color: 'indigo',
      duration: '4 weeks',
      projects: 'Interactive learning game',
      gradient: 'from-indigo-400 to-indigo-600'
    },
    {
      title: 'Creative Entrepreneurship',
      description: 'Content creation, digital marketing, and creative business models',
      icon: Palette,
      color: 'pink',
      duration: '3 weeks',
      projects: 'Brand identity design',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sector-Specific Skill Sprints
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive deep into industry-relevant skills through focused sprint programs. 
            Each sprint combines theoretical knowledge with hands-on project experience.
          </p>
        </div>

        {/* Sprints Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sprints.map((sprint, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${sprint.gradient} p-6`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <sprint.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{sprint.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {sprint.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium text-gray-900">{sprint.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Project:</span>
                    <span className="font-medium text-gray-900">{sprint.projects}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium group-hover:bg-gray-800 group-hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Sprint Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose from multiple sprint programs or create a custom learning path 
            that matches your interests and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 font-medium">
              Explore All Sprints
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors duration-200 font-medium border border-blue-500">
              Talk to Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSprints;