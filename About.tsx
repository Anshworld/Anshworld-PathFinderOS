import React from 'react';
import { Target, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Help every student discover their unique path and potential through personalized guidance.'
    },
    {
      icon: Heart,
      title: 'Inclusive Access',
      description: 'Democratize opportunities regardless of location, background, or economic status.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Foster creative thinking, problem-solving, and entrepreneurial mindset from day one.'
    },
    {
      icon: Globe,
      title: 'National Impact',
      description: 'Scale from Tier-3 regions to create a nationwide ecosystem of empowered youth.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering India's Future Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between traditional education and future-ready skills, 
            creating pathways for students to become either successful entrepreneurs or skilled professionals.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To build a national ecosystem where every student, regardless of location, 
              discovers their purpose, acquires future-ready skills, and contributes 
              meaningfully to society through innovation and collaboration.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Empower youth through self-awareness, sector-agnostic incubation, 
              life-long learning culture, and democratized access to mentors, 
              exposure, and career launchpads.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Challenge We're Solving
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India's Tier-3 youth face critical gaps that traditional education systems aren't addressing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-red-600 font-bold text-lg mb-2">🎓 Education Gap</div>
              <h4 className="font-semibold text-gray-900 mb-2">Standardized Learning</h4>
              <p className="text-gray-600">Over-standardized curricula with minimal real-world exposure and career guidance</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-yellow-600 font-bold text-lg mb-2">💼 Employment Gap</div>
              <h4 className="font-semibold text-gray-900 mb-2">Skill Mismatch</h4>
              <p className="text-gray-600">Poor alignment between student skills and industry requirements</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-blue-600 font-bold text-lg mb-2">🌱 Development Gap</div>
              <h4 className="font-semibold text-gray-900 mb-2">Identity Crisis</h4>
              <p className="text-gray-600">Underdeveloped personal identity and communication confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;