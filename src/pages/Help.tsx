import React from 'react';
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: 'How do I verify my property documents?',
      answer: 'To verify your property documents, upload them through the Documents section. Our team will review and verify them within 48 hours.'
    },
    // Add more FAQs
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Help Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: Book,
            title: 'Documentation',
            description: 'Browse our comprehensive guides and tutorials'
          },
          {
            icon: MessageCircle,
            title: 'Live Chat',
            description: 'Chat with our support team in real-time'
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: 'Call us at +255 123 456 789'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="inline-flex p-3 bg-emerald-50 rounded-lg mb-4">
              <item.icon className="text-emerald-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <HelpCircle className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}