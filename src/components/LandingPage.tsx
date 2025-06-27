import React from 'react';
import { Brain, Sparkles, ArrowRight, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
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
                <p className="text-xs text-gray-400">Discover Your Future</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Perfect Career
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let AI analyze your unique profile to recommend the ideal profession and business opportunities 
              tailored specifically for you. Transform your career with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-8 w-8 text-blue-400" />
                <span className="text-4xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-300">Career Paths Discovered</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <span className="text-4xl font-bold text-white">94%</span>
              </div>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-8 w-8 text-yellow-400" />
                <span className="text-4xl font-bold text-white">4.9/5</span>
              </div>
              <p className="text-gray-300">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How CareerAI Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform analyzes your unique profile to provide personalized career recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 text-center hover:border-blue-500/50 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Share Your Profile</h3>
              <p className="text-gray-300">
                Tell us about your interests, skills, experience, and career goals through our comprehensive questionnaire.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 text-center hover:border-purple-500/50 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Analysis</h3>
              <p className="text-gray-300">
                Our advanced AI analyzes your profile against thousands of career paths and business opportunities.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 text-center hover:border-green-500/50 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Your Roadmap</h3>
              <p className="text-gray-300">
                Receive personalized recommendations with detailed roadmaps to achieve your career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose CareerAI?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Personalized Recommendations</h3>
                    <p className="text-gray-300">Get career suggestions tailored to your unique profile and aspirations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Data-Driven Insights</h3>
                    <p className="text-gray-300">Leverage AI analysis of market trends and career data for informed decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Actionable Roadmaps</h3>
                    <p className="text-gray-300">Get step-by-step plans with timelines and resources to achieve your goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Business Opportunities</h3>
                    <p className="text-gray-300">Discover entrepreneurial paths and business niches that match your profile.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Brain className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of professionals who have discovered their perfect career path with CareerAI.
                </p>
                <Link 
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <span>Start Free Analysis</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Brain className="h-8 w-8 text-blue-400" />
                  <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">CareerAI</h1>
                  <p className="text-xs text-gray-400">Discover Your Future</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-md">
                Empowering professionals to discover their ideal career paths through AI-powered analysis and personalized recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;