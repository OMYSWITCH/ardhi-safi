import React, { useState } from 'react';
import { Search, Star, MapPin, Phone, X, CheckCircle, AlertCircle } from 'lucide-react';

export default function Brokers() {
  const [showBrokerForm, setShowBrokerForm] = useState(false);

  const brokers = [
    {
      name: 'John Makonde',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070',
      rating: 4.8,
      location: 'Dar es Salaam',
      phone: '+255 123 456 789',
      properties: 24,
      experience: '5 years',
      specializations: ['Residential', 'Commercial'],
      languages: ['Swahili', 'English'],
      certifications: ['Licensed Real Estate Agent', 'Property Valuation Expert']
    },
    {
      name: 'Sarah Mwanza',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070',
      rating: 4.9,
      location: 'Arusha',
      phone: '+255 987 654 321',
      properties: 31,
      experience: '7 years',
      specializations: ['Luxury Properties', 'Land'],
      languages: ['Swahili', 'English', 'French'],
      certifications: ['Certified Property Manager', 'Real Estate Consultant']
    }
  ];

  const requirements = [
    {
      icon: CheckCircle,
      title: 'Valid License',
      description: 'Current real estate broker license issued by the Tanzania Real Estate Board'
    },
    {
      icon: CheckCircle,
      title: 'Experience',
      description: 'Minimum 2 years of experience in Tanzania real estate market'
    },
    {
      icon: CheckCircle,
      title: 'Documentation',
      description: 'Business registration, tax clearance, and professional certificates'
    },
    {
      icon: CheckCircle,
      title: 'Professional Training',
      description: 'Completed recognized real estate training program'
    }
  ];

  const benefits = [
    {
      title: 'Verified Badge',
      description: 'Get a verified badge to build trust with clients'
    },
    {
      title: 'Priority Listings',
      description: 'Your properties appear at the top of search results'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Access detailed insights about your listings and client interactions'
    },
    {
      title: 'Direct Inquiries',
      description: 'Receive direct property inquiries from verified buyers'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Verified Brokers</h1>
        <button 
          onClick={() => setShowBrokerForm(true)}
          className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition"
        >
          Become a Broker
        </button>
      </div>

      <div className="mb-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-200">
            <Search className="text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search brokers by name or location..."
              className="w-full bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brokers.map((broker, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={broker.image}
                  alt={broker.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{broker.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-gray-600">{broker.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{broker.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{broker.phone}</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {broker.specializations.map((spec, i) => (
                    <span key={i} className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {broker.languages.map((lang, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">{broker.properties}</p>
                    <p className="text-sm text-gray-600">Properties</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">{broker.experience}</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-100 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Become a Broker Modal */}
      {showBrokerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Become a Verified Broker</h2>
                <button 
                  onClick={() => setShowBrokerForm(false)}
                  className="p-2 text-gray-400 hover:text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-600">Join our network of professional real estate brokers and expand your business.</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Requirements Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                  <div className="space-y-4">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                          <req.icon className="text-emerald-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{req.title}</h4>
                          <p className="text-sm text-gray-600">{req.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your license number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      rows={4}
                      placeholder="Describe your real estate experience..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Documents</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500">
                            <span>Upload files</span>
                            <input type="file" className="sr-only" multiple />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">License, certificates, and other supporting documents</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBrokerForm(false)}
                      className="flex-1 bg-gray-50 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}