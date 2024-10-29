import React from 'react';
import { User, Lock, Bell, Globe, Shield } from 'lucide-react';

export default function Settings() {
  const sections = [
    {
      icon: User,
      title: 'Profile Settings',
      description: 'Update your personal information and profile picture'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Manage your password and security preferences'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure how you receive alerts and updates'
    },
    {
      icon: Globe,
      title: 'Language & Region',
      description: 'Set your preferred language and regional settings'
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Control your data and privacy settings'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="grid grid-cols-1 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <section.icon className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}