import React from 'react';
import { MapPin, Ruler } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  area: string;
}

export default function PropertyCard({
  title,
  location,
  price,
  image,
  type,
  area,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <Ruler size={16} />
          <span>{area}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-emerald-600">{price}</span>
          <button className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-100 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}