import React from 'react';
import { UserCheck, Target, Users, Trophy, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Self-Discovery & Onboarding',
      description: 'Complete our comprehensive assessment to understand your interests, strengths, and career aspirations. Choose your learning track.',
      icon: UserCheck,
      features: ['Personality assessment', 'Skills evaluation', 'Career preference mapping', 'Track selection guidance']
    },
    {
      step: '02',
      title: 'Learn & Build',
      description: 'Engage in structured learning modules, skill sprints, and hands-on projects tailored to your chosen track and interests.',
      icon: Target,
      features: ['Interactive learning modules', 'Sector-specific sprints', 'Real-world projects', 'Peer collaboration']
    },
    {
      step: '03',
      title: 'Mentorship & Growth',
      description: 'Connect with industry experts and mentors who guide your journey, provide feedback, and help you navigate challenges.',
      icon: Users,
      features: ['1-on-1 mentor sessions', 'Group workshops', 'Expert feedback', 'Network building']
    },
    {
      step: '04',
      title: 'Showcase & Launch',
      description: 'Present your work at Demo Days, build your portfolio, and transition into your next phase - startup launch or job placement.',
      icon: Trophy,
      features: ['Demo Day presentations', 'Portfolio building', 'Job placement support', 'Startup incubation']
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Pathfinder Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our structured 4-step journey takes you from discovery to success, 
            with personalized support every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-16 bg-blue-200 transform -translate-x-1/2"></div>
              )}

              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl font-bold text-blue-600">{step.step}</div>
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                      {/* Mock interface based on step */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">Assessment Progress</h4>
                            <span className="text-blue-600 font-medium">75%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-700">Personality Type</span>
                              <span className="text-green-600 font-medium">✓ Complete</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-700">Skills Evaluation</span>
                              <span className="text-green-600 font-medium">✓ Complete</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-700">Career Preferences</span>
                              <span className="text-blue-600 font-medium">In Progress</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">Current Sprint: AgriTech</h4>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-green-50 p-3 rounded-lg">
                              <div className="text-2xl font-bold text-green-600">4</div>
                              <div className="text-sm text-gray-600">Modules</div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">2</div>
                              <div className="text-sm text-gray-600">Projects</div>
                            </div>
                            <div className="bg-orange-50 p-3 rounded-lg">
                              <div className="text-2xl font-bold text-orange-600">150</div>
                              <div className="text-sm text-gray-600">Spark Coins</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm font-medium text-gray-900 mb-2">Next: Smart Irrigation Design</div>
                            <div className="text-sm text-gray-600">Build a prototype for automated plant watering</div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">Your Mentors</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-medium">RK</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">Ravi Kumar</div>
                                <div className="text-sm text-gray-600">AgriTech Expert</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 font-medium">PS</span>
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">Priya Sharma</div>
                                <div className="text-sm text-gray-600">Startup Advisor</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-blue-900">Next Session</div>
                            <div className="text-sm text-blue-700">Tomorrow, 4:00 PM - Project Review</div>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">Demo Day Preparation</h4>
                          <div className="space-y-3">
                            <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-green-800 font-medium">Portfolio Complete</span>
                              </div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-blue-800 font-medium">Pitch Deck Ready</span>
                              </div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-orange-800 font-medium">Demo Day: Mar 15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Floating element */}
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;