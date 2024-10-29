import React from 'react';
import { Search, Shield, Building2, Users, AlertTriangle } from 'lucide-react';
import PropertyCard from '../components/Property/PropertyCard';
import MapView from '../components/MapView';

export default function Dashboard() {
  const samplePlots = [
    {
      coordinates: [
        [-6.7924, 39.2083],
        [-6.7934, 39.2093],
        [-6.7944, 39.2083],
        [-6.7934, 39.2073],
      ],
      title: 'Modern Villa in Masaki',
      price: 'TSh 850M',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Property in Tanzania</h1>
            <p className="text-lg mb-6 max-w-2xl">Secure and transparent land transactions with verified listings and dispute resolution support.</p>
            
            <div className="bg-white rounded-lg p-2 flex items-center gap-4 max-w-2xl">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded px-4 py-2">
                <Search className="text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Search by location, property type, or price range..."
                  className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                />
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Map</h2>
        <MapView
          plots={samplePlots}
          center={[-6.7934, 39.2083]}
          zoom={15}
        />
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Building2, label: 'Active Listings', value: '2,345' },
          { icon: Users, label: 'Verified Brokers', value: '150+' },
          { icon: Shield, label: 'Secure Transactions', value: '1,200+' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <stat.icon className="text-emerald-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Properties */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Modern Villa in Masaki',
              location: 'Masaki, Dar es Salaam',
              price: 'TSh 850M',
              image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075',
              type: 'Residential',
              area: '450 sq.m',
              legalStatus: {
                hasDisputes: true,
                activeCases: 1,
                description: 'Ongoing boundary dispute with neighboring property.'
              }
            },
            {
              title: 'Commercial Plot in CBD',
              location: 'CBD, Dar es Salaam',
              price: 'TSh 1.2B',
              image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=2076',
              type: 'Commercial',
              area: '1200 sq.m',
              legalStatus: {
                hasDisputes: false
              }
            },
            {
              title: 'Residential Plot in Mbezi',
              location: 'Mbezi Beach, Dar es Salaam',
              price: 'TSh 350M',
              image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2070',
              type: 'Land',
              area: '800 sq.m',
              legalStatus: {
                hasDisputes: true,
                activeCases: 2,
                description: 'Multiple ownership claims under investigation.'
              }
            }
          ].map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>
    </>
  );
}