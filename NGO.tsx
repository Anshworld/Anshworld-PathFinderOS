import React, { useState } from 'react';
import { Heart, Book, Shirt, Users, MapPin, Phone, Mail, Gift, HandHeart, Target } from 'lucide-react';

const NGO = () => {
  const [activeTab, setActiveTab] = useState('donate');
  const [donationForm, setDonationForm] = useState({
    name: '',
    phone: '',
    address: '',
    donationType: '',
    quantity: '',
    description: '',
    pickupDate: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setDonationForm({
      ...donationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your donation! We will contact you soon for pickup.');
    setDonationForm({
      name: '',
      phone: '',
      address: '',
      donationType: '',
      quantity: '',
      description: '',
      pickupDate: ''
    });
  };

  const impactStats = [
    { icon: Book, number: '5,000+', label: 'Books Distributed', color: 'blue' },
    { icon: Shirt, number: '3,000+', label: 'Clothes Donated', color: 'green' },
    { icon: Users, number: '1,200+', label: 'Families Helped', color: 'purple' },
    { icon: Heart, number: '500+', label: 'Active Donors', color: 'red' }
  ];

  const services = [
    {
      icon: Gift,
      title: 'Donation Collection',
      description: 'We collect books, clothes, and educational materials from your doorstep',
      features: ['Free pickup service', 'Flexible timing', 'All items accepted', 'Receipt provided']
    },
    {
      icon: HandHeart,
      title: 'Community Distribution',
      description: 'Direct distribution to needy families and underprivileged communities',
      features: ['Verified beneficiaries', 'Regular distribution drives', 'Rural area coverage', 'Transparent process']
    },
    {
      icon: Target,
      title: 'Educational Support',
      description: 'Special focus on providing educational resources to students',
      features: ['School partnerships', 'Study material kits', 'Scholarship programs', 'Mentorship support']
    }
  ];

  return (
    <section id="ngo" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            <span>Pathfinder Care Foundation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sharing is Caring - NGO Initiative
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our mission to bridge the gap between abundance and need. 
            Donate your unused books and clothes to help underprivileged communities grow and learn.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Donation Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('donate')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'donate'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Gift className="h-5 w-5 inline mr-2" />
                Donate Items
              </button>
              <button
                onClick={() => setActiveTab('request')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'request'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <HandHeart className="h-5 w-5 inline mr-2" />
                Request Help
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'donate' ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Donate Books & Clothes</h3>
                <p className="text-gray-600 mb-8">
                  Your unused items can bring joy and opportunity to someone in need. 
                  Fill out the form below and we'll arrange a free pickup from your location.
                </p>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={donationForm.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                      value={donationForm.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={donationForm.address}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Type *
                    </label>
                    <select
                      name="donationType"
                      value={donationForm.donationType}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="books">Books Only</option>
                      <option value="clothes">Clothes Only</option>
                      <option value="both">Books & Clothes</option>
                      <option value="educational">Educational Materials</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approximate Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={donationForm.quantity}
                      onChange={handleFormChange}
                      placeholder="e.g., 20 books, 2 bags of clothes"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Pickup Date
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={donationForm.pickupDate}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Item Description
                    </label>
                    <textarea
                      name="description"
                      value={donationForm.description}
                      onChange={handleFormChange}
                      rows={3}
                      placeholder="Describe the condition and type of items you're donating"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                      Schedule Donation Pickup
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assistance</h3>
                <p className="text-gray-600 mb-8">
                  If you or someone you know needs books, clothes, or educational support, 
                  please reach out to us. We're here to help our community grow together.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                        <p className="text-gray-600">+91 9876543210</p>
                        <p className="text-sm text-gray-500">Mon-Sat 9AM-6PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                        <p className="text-gray-600">care@pathfinder.in</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                        <p className="text-gray-600">Pathfinder Care Foundation</p>
                        <p className="text-gray-600">Main Road, Ranchi, Jharkhand</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-4">What We Provide</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <Book className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800">Educational books and materials</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Shirt className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800">Clean, good-condition clothing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800">Educational support and mentorship</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800">Community support programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Together, We Can Make a Difference
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every book shared is knowledge multiplied. Every piece of clothing donated is warmth extended. 
            Join our community of givers and help us build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200 font-medium">
              Become a Donor
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium">
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NGO;