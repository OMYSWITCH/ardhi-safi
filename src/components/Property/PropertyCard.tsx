import React, { useState } from 'react';
import { MapPin, Ruler, AlertTriangle, Scale, X } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  area: string;
  legalStatus?: {
    hasDisputes: boolean;
    activeCases?: number;
    description?: string;
  };
}

export default function PropertyCard({
  title,
  location,
  price,
  image,
  type,
  area,
  legalStatus = { hasDisputes: false }
}: PropertyCardProps) {
  const [showLegalPopup, setShowLegalPopup] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition group relative">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {type}
          </span>
          {legalStatus.hasDisputes && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowLegalPopup(true);
              }}
              className="bg-red-50 px-3 py-1 rounded-full text-sm font-medium text-red-600 flex items-center gap-1 hover:bg-red-100 transition"
            >
              <AlertTriangle size={14} />
              Legal Case
            </button>
          )}
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

      {/* Legal Status Popup */}
      {showLegalPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLegalPopup(false)}
        >
          <div 
            className="bg-white rounded-lg w-[320px] shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="text-red-600" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">Legal Status</h3>
                </div>
                <button
                  onClick={() => setShowLegalPopup(false)}
                  className="text-gray-400 hover:text-gray-500 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-2 rounded-md text-sm">
                <AlertTriangle size={16} />
                <span className="font-medium">Active Cases: {legalStatus.activeCases}</span>
              </div>

              <div className="text-sm">
                <h4 className="font-medium text-gray-900 mb-1">Case Details:</h4>
                <p className="text-gray-600 leading-relaxed">
                  {legalStatus.description || 'This property has pending legal disputes. Please contact our legal team for more information.'}
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-b-lg">
              <button
                onClick={() => setShowLegalPopup(false)}
                className="w-full bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 border border-gray-200 transition text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}