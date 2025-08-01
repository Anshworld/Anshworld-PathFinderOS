import React from 'react';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Programs: [
      'Startup Builder Track',
      'Skill Collaborator Track',
      'AgriTech Sprint',
      'EV & Robotics Sprint',
      'EdTech Sprint',
      'HealthTech Sprint'
    ],
    Resources: [
      'Student Portal',
      'Mentor Network',
      'Demo Day',
      'Success Stories',
      'Blog',
      'Career Guidance'
    ],
    Support: [
      'Help Center',
      'Contact Us',
      'School Partnerships',
      'Corporate Training',
      'Technical Support',
      'Community Forum'
    ],
    Company: [
      'About Pathfinder',
      'Our Mission',
      'Team',
      'Careers',
      'Press Kit',
      'Privacy Policy'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Pathfinder</h1>
                <p className="text-sm text-gray-400">Innovation Center</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Empowering India's youth to discover purpose, build skills, and launch ideas 
              from Tier-3 regions to national success.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Visit Our Center</h4>
              <p className="text-gray-400"> ANA Groups, Shiv Puri Colony, Gamharia, Jharkhand -832108 </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-400">+91 9471380102</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-400">info@manparth.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400">
              <p>&copy; 2025 Pathfinder Innovation & Readiness Center. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us: www.manparth.com</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;