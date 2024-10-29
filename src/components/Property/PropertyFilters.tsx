import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

interface PropertyFiltersProps {
  onSearch: (query: string) => void;
}

export default function PropertyFilters({ onSearch }: PropertyFiltersProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center gap-2 bg-gray-50 rounded px-4 py-2 mb-6">
        <Search className="text-gray-400" size={20} />
        <input 
          type="text"
          placeholder="Search properties..."
          className="w-full bg-transparent border-none focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Property Type</h3>
          <div className="space-y-2">
            {['Residential', 'Commercial', 'Agricultural', 'Industrial'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Min"
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
          <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg text-gray-700">
            <span>Select location</span>
            <ChevronDown size={20} />
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Land Size</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Min sq.m"
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="number"
              placeholder="Max sq.m"
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
}