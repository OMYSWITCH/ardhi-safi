import React from 'react';
import { Bell, MessageSquare, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">Ardhi Safi</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <MessageSquare size={20} />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={20} className="text-gray-500" />
              </div>
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}