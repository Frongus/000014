import React, { useState } from 'react';
import { Calendar, BookOpen, TrendingUp, DollarSign, Target, CheckCircle } from 'lucide-react';
import { PremiumPlan } from '../types';

interface PremiumResultsProps {
  plan: PremiumPlan;
}

const PremiumResults: React.FC<PremiumResultsProps> = ({ plan }) => {
  const [activeSection, setActiveSection] = useState<'roadmap' | 'business'>('roadmap');

  return (
    <div className="space-y-8">
      {/* Section Navigation */}
      <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
        <button
          onClick={() => setActiveSection('roadmap')}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
            activeSection === 'roadmap'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Target className="h-4 w-4 inline mr-2" />
          Career Roadmap
        </button>
        <button
          onClick={() => setActiveSection('business')}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
            activeSection === 'business'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <TrendingUp className="h-4 w-4 inline mr-2" />
          Business Plan
        </button>
      </div>

      {activeSection === 'roadmap' ? (
        <div className="space-y-6">
          {/* Roadmap Timeline */}
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-purple-400" />
              Your Career Development Timeline
            </h3>
            <div className="space-y-6">
              {plan.profession.roadmap.map((phase, index) => (
                <div key={index} className="relative">
                  {index < plan.profession.roadmap.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-purple-600"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                        <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-sm">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
              Recommended Learning Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Online Courses</h4>
                <ul className="space-y-2">
                  {plan.profession.resources.courses.map((course, index) => (
                    <li key={index} className="text-gray-300 text-sm">• {course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Certifications</h4>
                <ul className="space-y-2">
                  {plan.profession.resources.certifications.map((cert, index) => (
                    <li key={index} className="text-gray-300 text-sm">• {cert}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Recommended Books</h4>
                <ul className="space-y-2">
                  {plan.profession.resources.books.map((book, index) => (
                    <li key={index} className="text-gray-300 text-sm">• {book}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Business Plan Steps */}
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-400" />
              Business Development Plan
            </h3>
            <div className="space-y-4">
              {plan.business.businessPlan.map((step, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{step.step}</h4>
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 rounded text-sm">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Projections */}
          <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
              Financial Projections
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-300">Year</th>
                    <th className="text-left py-3 px-4 text-gray-300">Revenue</th>
                    <th className="text-left py-3 px-4 text-gray-300">Expenses</th>
                    <th className="text-left py-3 px-4 text-gray-300">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.business.financialProjection.map((projection, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Year {projection.year}</td>
                      <td className="py-3 px-4 text-green-400">{projection.revenue}</td>
                      <td className="py-3 px-4 text-red-400">{projection.expenses}</td>
                      <td className="py-3 px-4 text-blue-400 font-semibold">{projection.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumResults;