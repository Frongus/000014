import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-8 w-8 text-blue-400" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CareerAI</h1>
              <p className="text-xs text-gray-400">Discover Your Future</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;