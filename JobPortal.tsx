import React, { useState } from 'react';
import { 
  Briefcase, Search, MapPin, Clock, DollarSign, Users, 
  Star, Filter, Send, Upload, CheckCircle, TrendingUp,
  Building, Award, Target, Zap, Heart, Code, Palette,
  BarChart3, MessageSquare, Calendar, ArrowRight
} from 'lucide-react';

const JobPortal = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [jobApplication, setJobApplication] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    expectedSalary: '',
    location: '',
    resume: null
  });

  const skillCategories = [
    { id: 'all', name: 'All Jobs', icon: Briefcase, count: 156 },
    { id: 'tech', name: 'Technology', icon: Code, count: 45 },
    { id: 'design', name: 'Design & Creative', icon: Palette, count: 28 },
    { id: 'marketing', name: 'Marketing & Sales', icon: TrendingUp, count: 32 },
    { id: 'business', name: 'Business & Operations', icon: BarChart3, count: 25 },
    { id: 'agritech', name: 'AgriTech', icon: Target, count: 18 },
    { id: 'healthcare', name: 'HealthTech', icon: Heart, count: 8 }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Ranchi, Jharkhand',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3-6 LPA',
      skills: ['React', 'JavaScript', 'CSS', 'HTML'],
      category: 'tech',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      posted: '2 days ago',
      applicants: 24,
      description: 'Join our dynamic team to build innovative web applications using modern technologies.',
      requirements: ['Bachelor\'s degree in CS/IT', '1+ years React experience', 'Strong problem-solving skills']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Creative Studios',
      location: 'Jamshedpur, Jharkhand',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹2.5-4 LPA',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      category: 'design',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      posted: '1 day ago',
      applicants: 18,
      description: 'Create beautiful and intuitive user experiences for our digital products.',
      requirements: ['Design portfolio', 'Figma proficiency', 'Understanding of UX principles']
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      company: 'Growth Marketing Co.',
      location: 'Dhanbad, Jharkhand',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹2-4 LPA',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      category: 'marketing',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      posted: '3 days ago',
      applicants: 31,
      description: 'Drive digital growth strategies and manage online marketing campaigns.',
      requirements: ['Marketing degree preferred', 'Google Analytics certified', 'Creative thinking']
    },
    {
      id: 4,
      title: 'AgriTech Product Manager',
      company: 'FarmTech Innovations',
      location: 'Bokaro, Jharkhand',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹4-7 LPA',
      skills: ['Product Management', 'Agriculture Knowledge', 'Data Analysis'],
      category: 'agritech',
      logo: 'https://images.pexels.com/photos/3184197/pexels-photo-3184197.jpeg',
      posted: '1 week ago',
      applicants: 12,
      description: 'Lead product development for innovative agricultural technology solutions.',
      requirements: ['Product management experience', 'Agriculture background', 'Tech-savvy']
    },
    {
      id: 5,
      title: 'Business Analyst',
      company: 'Consulting Partners',
      location: 'Ranchi, Jharkhand',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3.5-5.5 LPA',
      skills: ['Data Analysis', 'Excel', 'SQL', 'Business Intelligence'],
      category: 'business',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      posted: '4 days ago',
      applicants: 28,
      description: 'Analyze business processes and provide data-driven insights for decision making.',
      requirements: ['Analytical mindset', 'Excel proficiency', 'Communication skills']
    },
    {
      id: 6,
      title: 'HealthTech Developer',
      company: 'MedTech Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹5-8 LPA',
      skills: ['Python', 'Healthcare APIs', 'Database Management'],
      category: 'healthcare',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      posted: '5 days ago',
      applicants: 15,
      description: 'Develop healthcare technology solutions to improve patient care and medical processes.',
      requirements: ['Healthcare domain knowledge', 'Python expertise', 'API development']
    }
  ];

  const jobStats = [
    { icon: Briefcase, number: '156+', label: 'Active Jobs', color: 'blue' },
    { icon: Building, number: '85+', label: 'Partner Companies', color: 'green' },
    { icon: Users, number: '1,200+', label: 'Job Seekers', color: 'purple' },
    { icon: CheckCircle, number: '340+', label: 'Successful Placements', color: 'orange' }
  ];

  const placementSuccess = [
    { name: 'Arjun Kumar', role: 'Frontend Developer', company: 'TechCorp', salary: '₹4.5 LPA', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
    { name: 'Priya Sharma', role: 'UI/UX Designer', company: 'Creative Studios', salary: '₹3.8 LPA', image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg' },
    { name: 'Rohit Singh', role: 'Product Manager', company: 'InnovateLabs', salary: '₹6.2 LPA', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg' },
    { name: 'Anita Devi', role: 'Business Analyst', company: 'DataCorp', salary: '₹4.8 LPA', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg' }
  ];

  const filteredJobs = selectedSkill === 'all' 
    ? featuredJobs 
    : featuredJobs.filter(job => job.category === selectedSkill);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    setJobApplication({
      name: '',
      email: '',
      phone: '',
      skills: '',
      experience: '',
      expectedSalary: '',
      location: '',
      resume: null
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setJobApplication({
      ...jobApplication,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="job-portal" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            <span>Pathfinder Job Portal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skill-Based Job Matching Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find your perfect job match based on your skills, experience, and career goals. 
            We connect talented individuals with top companies across India.
          </p>
        </div>

        {/* Job Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {jobStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex overflow-x-auto">
            {[
              { id: 'browse', label: 'Browse Jobs', icon: Search },
              { id: 'apply', label: 'Quick Apply', icon: Send },
              { id: 'success', label: 'Success Stories', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'browse' && (
          <div>
            {/* Skill Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browse by Skills</h3>
              <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedSkill(category.id)}
                    className={`p-4 rounded-xl text-center transition-all duration-200 ${
                      selectedSkill === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                    }`}
                  >
                    <category.icon className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs opacity-75">{category.count} jobs</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedSkill === 'all' ? 'All Jobs' : skillCategories.find(c => c.id === selectedSkill)?.name} 
                  ({filteredJobs.length})
                </h3>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-300 transition-colors">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                  <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Sort by: Latest</option>
                    <option>Sort by: Salary</option>
                    <option>Sort by: Experience</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h4>
                          <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{job.applicants} applicants</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <p className="text-gray-600 text-sm">{job.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-3 lg:ml-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Apply Now
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                          Save Job
                        </button>
                        <span className="text-xs text-gray-500 text-center">Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'apply' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Job Application</h3>
            <p className="text-gray-600 mb-8">
              Fill out this form and we'll match you with relevant job opportunities based on your skills and preferences.
            </p>

            <form onSubmit={handleApplicationSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={jobApplication.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={jobApplication.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={jobApplication.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={jobApplication.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select experience</option>
                  <option value="fresher">Fresher (0 years)</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Salary
                </label>
                <select
                  name="expectedSalary"
                  value={jobApplication.expectedSalary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select salary range</option>
                  <option value="2-3">₹2-3 LPA</option>
                  <option value="3-5">₹3-5 LPA</option>
                  <option value="5-8">₹5-8 LPA</option>
                  <option value="8+">₹8+ LPA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={jobApplication.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Ranchi, Remote, Any"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Skills *
                </label>
                <textarea
                  name="skills"
                  value={jobApplication.skills}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="e.g., React, JavaScript, Python, Digital Marketing, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'success' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Placement Success Stories
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {placementSuccess.map((success, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={success.image}
                      alt={success.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{success.name}</h4>
                      <p className="text-blue-600 font-medium">{success.role}</p>
                      <p className="text-gray-600">{success.company}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-green-800 font-medium">Package Secured:</span>
                      <span className="text-green-600 font-bold text-lg">{success.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Services */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Career Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Skill Assessment</h4>
                  <p className="text-purple-100">Comprehensive evaluation of your technical and soft skills</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Interview Preparation</h4>
                  <p className="text-purple-100">Mock interviews and personalized feedback sessions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Career Guidance</h4>
                  <p className="text-purple-100">One-on-one mentoring and career path planning</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Find Your Dream Job?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who found their perfect career match through our platform. 
              Your next opportunity is just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('browse')}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Browse Jobs</span>
              </button>
              <button 
                onClick={() => setActiveTab('apply')}
                className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Quick Apply</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortal;