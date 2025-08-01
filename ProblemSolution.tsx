import React from 'react';
import { AlertTriangle, Target, Users, Building, TrendingUp, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      category: 'Student-Level Challenges',
      icon: Users,
      color: 'red',
      issues: [
        'No real-world career discovery modules in school/college curricula',
        'Lack of innovation culture, startup exposure, and mentorship in Tier-3 regions',
        'Weak communication and confidence due to limited skill-building frameworks'
      ]
    },
    {
      category: 'Institutional Challenges',
      icon: Building,
      color: 'orange',
      issues: [
        'Schools and colleges have fragmented systems for tracking student growth',
        'No centralized platform to host mentoring, showcases, or performance metrics',
        'Limited digital infrastructure and inconsistent implementation support'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Career Mapping Dashboard',
      description: 'Psychometric quiz + track recommendation system',
      impact: 'Helps students discover their purpose and choose the right path',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Dual Track Curriculum',
      description: 'Startup Builder vs Skill Collaborator pathways',
      impact: 'Personalized learning based on individual aspirations',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Spark Coin Ecosystem',
      description: 'Gamified progress + rewards + peer competition',
      impact: 'Increases engagement and motivation to learn',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Project-Based Skill Sprints',
      description: 'Sector-specific 4–6 week bootcamps with mentor feedback',
      impact: 'Real-world skills development with industry relevance',
      icon: CheckCircle,
      color: 'orange'
    }
  ];

  const outcomes = [
    { metric: '87%', label: 'Improvement in student engagement', color: 'blue' },
    { metric: '92%', label: 'Career clarity achievement rate', color: 'green' },
    { metric: '78%', label: 'Skill development acceleration', color: 'purple' },
    { metric: '95%', label: 'Institution satisfaction score', color: 'orange' }
  ];

  return (
    <section id="problem-solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solving Real Educational Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From identifying core problems to implementing innovative solutions - 
            here's how Pathfinder is transforming education in Tier-3 India.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="h-4 w-4" />
              <span>Critical Challenges</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Problems We're Addressing
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These gaps create disengaged learners, outdated institutions, and missed opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-${problem.color}-100 rounded-xl flex items-center justify-center`}>
                    <problem.icon className={`h-6 w-6 text-${problem.color}-600`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{problem.category}</h4>
                </div>
                <ul className="space-y-4">
                  {problem.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-${problem.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 leading-relaxed">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Framework */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="h-4 w-4" />
              <span>Our Solutions</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Innovative Solutions That Work
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technology-enabled, scalable solutions designed specifically for Tier-3 educational challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-${solution.color}-100 rounded-xl flex items-center justify-center`}>
                    <solution.icon className={`h-6 w-6 text-${solution.color}-600`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{solution.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                <div className={`bg-${solution.color}-50 rounded-lg p-4 border border-${solution.color}-100`}>
                  <p className={`text-${solution.color}-800 font-medium`}>
                    <strong>Impact:</strong> {solution.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model Structure Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Model Structure
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A dual-focused approach addressing both student growth and institutional management needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Student-Centric Framework */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Student-Centric Growth Framework
              </h4>
              <div className="space-y-4">
                {[
                  'Career Mapping Dashboard',
                  'Dual Track Curriculum',
                  'Spark Coin Ecosystem',
                  'Project-Based Skill Sprints',
                  'Communication Labs',
                  'Mentorship Scheduling',
                  'Content Upload Portal'
                ].map((component, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">{component}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institution-Centric System */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-green-900 mb-6 flex items-center">
                <Building className="h-6 w-6 mr-2" />
                Institution-Centric Management System
              </h4>
              <div className="space-y-4">
                {[
                  'Admin Dashboard',
                  'Sprint Hosting Console',
                  'Attendance & Submission',
                  'Certification Generator',
                  'Mentor Roster Manager',
                  'Data Export Engine'
                ].map((module, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-green-800">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Measurable Impact</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Real results from our pilot implementations across Tier-3 institutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{outcome.metric}</div>
                <div className="text-blue-100">{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Long-Term Vision
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">National Scale Impact</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Create 100+ Pathfinder zones across Indian districts</li>
                  <li>• Build repository of student-led startup pitches</li>
                  <li>• Enable credit-linked modules in universities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">Ecosystem Development</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Partner with incubators and accelerators</li>
                  <li>• Connect with CSR networks nationwide</li>
                  <li>• Democratize exposure for next-gen innovators</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg text-purple-800 font-medium italic">
                "From Tier-3 changemakers to national growth engines—Pathfinder bridges the gap."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;