import React from 'react';
import { FileText, Download, Eye, Clock } from 'lucide-react';

export default function Documents() {
  const documents = [
    {
      title: 'Land Title Deed - Plot 123',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-03-15',
      status: 'Verified'
    },
    // Add more documents
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition">
          Upload Document
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100">
        <div className="grid grid-cols-1 divide-y divide-gray-100">
          {documents.map((doc, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <FileText className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                    {doc.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <Eye size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}