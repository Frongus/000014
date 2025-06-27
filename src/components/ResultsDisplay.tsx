import React, { useState } from 'react';
import { Briefcase, TrendingUp, DollarSign, Clock, Star, Crown, CheckCircle } from 'lucide-react';
import { AIRecommendation } from '../types';

interface ResultsDisplayProps {
  recommendation: AIRecommendation;
  onUpgradeToPremium: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ recommendation, onUpgradeToPremium }) => {
  const [activeTab, setActiveTab] = useState<'profession' | 'business'>('profession');

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('profession')}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'profession'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Briefcase className="h-4 w-4 inline mr-2" />
          Recommended Profession
        </button>
        <button
          onClick={() => setActiveTab('business')}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'business'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <TrendingUp className="h-4 w-4 inline mr-2" />
          Business Opportunity
        </button>
      </div>

      {/* Content */}
      {activeTab === 'profession' ? (
        <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{recommendation.profession.title}</h3>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-semibold text-white">
                {recommendation.profession.matchPercentage}% Match
              </span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{recommendation.profession.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-400 mb-2" />
              <p className="text-sm text-gray-400">Average Salary</p>
              <p className="text-lg font-semibold text-white">{recommendation.profession.averageSalary}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-400 mb-2" />
              <p className="text-sm text-gray-400">Growth Outlook</p>
              <p className="text-lg font-semibold text-white">{recommendation.profession.growthOutlook}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-400">Key Skills</p>
              <p className="text-sm text-white">{recommendation.profession.keySkills.slice(0, 2).join(', ')}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.profession.keySkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{recommendation.businessNiche.title}</h3>
          <p className="text-gray-300 mb-6">{recommendation.businessNiche.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-400 mb-2" />
              <p className="text-sm text-gray-400">Market Potential</p>
              <p className="text-lg font-semibold text-white">{recommendation.businessNiche.marketPotential}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <DollarSign className="h-5 w-5 text-blue-400 mb-2" />
              <p className="text-sm text-gray-400">Startup Cost</p>
              <p className="text-lg font-semibold text-white">{recommendation.businessNiche.startupCost}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <Clock className="h-5 w-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-400">Time to Profit</p>
              <p className="text-lg font-semibold text-white">{recommendation.businessNiche.timeToProfit}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Key Advantages</h4>
            <ul className="space-y-2">
              {recommendation.businessNiche.keyAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Premium Upgrade CTA */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl border border-purple-800/50 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Crown className="h-6 w-6 text-yellow-400" />
          <h3 className="text-xl font-bold text-white">Unlock Your Complete Career Roadmap</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Get a detailed step-by-step plan, timeline, resources, and financial projections to achieve your career goals.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center space-x-2 text-gray-300">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Detailed career roadmap with timelines</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-300">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Curated learning resources and certifications</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-300">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Business plan with financial projections</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-300">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Personalized action steps</span>
          </li>
        </ul>
        <button
          onClick={onUpgradeToPremium}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          Upgrade to Premium - $29.99
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;