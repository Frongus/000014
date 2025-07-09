import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Brain, Sparkles, User, Settings, LogOut, Play, Crown, BarChart3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import CareerDiscovery from './CareerDiscovery';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'discovery' | 'results'>('overview');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
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
                <p className="text-xs text-gray-400">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-white">{user.name}</span>
                {user.isPremium && (
                  <Crown className="h-4 w-4 text-yellow-400" />
                )}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <BarChart3 className="h-4 w-4 inline mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('discovery')}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'discovery'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Play className="h-4 w-4 inline mr-2" />
            Career Discovery
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'results'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Settings className="h-4 w-4 inline mr-2" />
            My Results
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Welcome back, {user.name}!
              </h2>
              <p className="text-gray-300 mb-6">
                Ready to continue your career discovery journey? Let's find your perfect path.
              </p>
              <button
                onClick={() => setActiveTab('discovery')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Career Analysis
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Analyses</h3>
                    <p className="text-gray-400 text-sm">Completed</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">0</p>
              </div>

              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Match Score</h3>
                    <p className="text-gray-400 text-sm">Best result</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">-</p>
              </div>

              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Plan</h3>
                    <p className="text-gray-400 text-sm">Current</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-white">
                  {user.isPremium ? 'Premium' : 'Free'}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveTab('discovery')}
                  className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors text-left"
                >
                  <Play className="h-6 w-6 text-blue-400 mb-2" />
                  <h4 className="font-semibold mb-1">Start New Analysis</h4>
                  <p className="text-gray-400 text-sm">Discover your ideal career path</p>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg transition-colors text-left">
                  <Settings className="h-6 w-6 text-purple-400 mb-2" />
                  <h4 className="font-semibold mb-1">Update Profile</h4>
                  <p className="text-gray-400 text-sm">Keep your information current</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'discovery' && (
          <CareerDiscovery />
        )}

        {activeTab === 'results' && (
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 text-center">
            <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Results Yet</h3>
            <p className="text-gray-400 mb-6">
              Complete your first career analysis to see your personalized results here.
            </p>
            <button
              onClick={() => setActiveTab('discovery')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Analysis
            </button>
          </div>
        )}
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;