import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arjun Kumar',
      role: 'Startup Founder',
      location: 'Ranchi, Jharkhand',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      content: 'Pathfinder transformed my vague startup idea into a real business. The mentorship and structured approach helped me build an AgriTech solution that now serves 200+ farmers in my district.',
      rating: 5,
      track: 'Startup Builder',
      outcome: 'Founded GreenHarvest Tech'
    },
    {
      name: 'Priya Sharma',
      role: 'Software Developer',
      location: 'Jamshedpur, Jharkhand',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg',
      content: 'The Skill Collaborator track gave me exactly what I needed - real-world technical skills and communication confidence. I landed my dream job at a Bangalore startup within 3 months of graduation.',
      rating: 5,
      track: 'Skill Collaborator',
      outcome: 'Software Developer at TechCorp'
    },
    {
      name: 'Rohit Singh',
      role: 'Product Manager',
      location: 'Dhanbad, Jharkhand',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      content: 'From a shy college student to confidently presenting at Demo Day - Pathfinder\'s communication training and mentorship changed my life. I now lead a team of 15 people.',
      rating: 5,
      track: 'Skill Collaborator',
      outcome: 'Product Manager at InnovateLabs'
    },
    {
      name: 'Anita Devi',
      role: 'EdTech Entrepreneur',
      location: 'Bokaro, Jharkhand',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      content: 'The EdTech sprint opened my eyes to the power of technology in education. My learning app for rural students has now reached 10,000+ users across 5 states.',
      rating: 5,
      track: 'Startup Builder',
      outcome: 'Founded EduBridge Solutions'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Alumni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who transformed their lives through Pathfinder's programs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              {/* Track Badge */}
              <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  testimonial.track === 'Startup Builder' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {testimonial.track}
                </span>
                <span className="text-green-600 font-medium text-sm">{testimonial.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Watch More Success Stories
          </h3>
          <p className="text-gray-600 mb-6">
            Get inspired by video testimonials from our successful alumni
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Success Story #{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to write your own success story?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium">
            Join Pathfinder Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;