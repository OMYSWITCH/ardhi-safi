import React, { useState } from 'react';
import PropertyMap from '../components/Map/PropertyMap';
import PropertyFilters from '../components/Property/PropertyFilters';
import PropertyList from '../components/Property/PropertyList';

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState('');

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
      type: 'Residential',
      status: 'available',
      legalStatus: {
        hasDisputes: true,
        activeCases: 1,
        description: 'Ongoing boundary dispute with neighboring property.'
      }
    },
    {
      coordinates: [
        [-6.7944, 39.2093],
        [-6.7954, 39.2103],
        [-6.7964, 39.2093],
        [-6.7954, 39.2083],
      ],
      title: 'Commercial Plot in CBD',
      price: 'TSh 1.2B',
      type: 'Commercial',
      status: 'pending',
      legalStatus: {
        hasDisputes: false
      }
    }
  ];

  const properties = [
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
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition">
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <PropertyFilters onSearch={setSearchQuery} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <PropertyMap
            plots={samplePlots}
            center={[-6.7934, 39.2083]}
            zoom={15}
          />
          <PropertyList properties={properties} />
        </div>
      </div>
    </div>
  );
}