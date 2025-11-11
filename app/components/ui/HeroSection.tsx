import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Truck, Package } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'delivery' | 'pickup'>('delivery');

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Are you starving?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Within a few clicks, find meals that are accessible near you
          </p>

          {/* Tabs and Search */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('delivery')}
                className={`flex items-center gap-2 pb-3 font-semibold transition-colors ${
                  activeTab === 'delivery'
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Truck size={20} />
                Delivery
              </button>
              <button
                onClick={() => setActiveTab('pickup')}
                className={`flex items-center gap-2 pb-3 font-semibold transition-colors ${
                  activeTab === 'pickup'
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Package size={20} />
                Pickup
              </button>
            </div>

            {/* Search Bar */}
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </div>
    </section>
  );
};
