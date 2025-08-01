import React from 'react';
import { ArrowRight, Play, Star, Users, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" />
              <span>Empowering Tier-3 India</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="text-blue-600"> Purpose</span>,
                Build Your
                <span className="text-orange-500"> Future</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                From school corridors to startup success - join India's first dual-track innovation platform 
                designed for Tier-3 youth. Choose your path: Build your startup or become a skilled collaborator.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Students Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-600">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Jobs Placed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 font-medium text-lg">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Backed by Industry Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Government Approved</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Students collaborating on innovation projects"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Startup Track</div>
                    <div className="text-sm text-gray-600">Build Your Idea</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Collaborator Track</div>
                    <div className="text-sm text-gray-600">Master Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;