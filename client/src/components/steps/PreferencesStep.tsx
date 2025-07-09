import React from 'react';
import { UserProfile } from '../../types';

interface PreferencesStepProps {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const PreferencesStep: React.FC<PreferencesStepProps> = ({ profile, updateProfile }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Preferred Work Style
        </label>
        <select
          value={profile.workStyle}
          onChange={(e) => updateProfile({ workStyle: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your preferred work style</option>
          <option value="remote">Remote work</option>
          <option value="office">Office environment</option>
          <option value="hybrid">Hybrid (remote + office)</option>
          <option value="freelance">Freelance/Contract</option>
          <option value="entrepreneurial">Entrepreneurial/Own business</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Career Goals
        </label>
        <textarea
          value={profile.goals}
          onChange={(e) => updateProfile({ goals: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Describe your career aspirations and what you want to achieve..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Risk Tolerance
        </label>
        <select
          value={profile.riskTolerance}
          onChange={(e) => updateProfile({ riskTolerance: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your risk tolerance</option>
          <option value="low">Low - Prefer stable, secure opportunities</option>
          <option value="medium">Medium - Balanced approach to risk and reward</option>
          <option value="high">High - Willing to take significant risks for potential rewards</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Time Commitment
        </label>
        <select
          value={profile.timeCommitment}
          onChange={(e) => updateProfile({ timeCommitment: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">How much time can you dedicate to career development?</option>
          <option value="part-time">Part-time (10-20 hours/week)</option>
          <option value="full-time">Full-time (40+ hours/week)</option>
          <option value="intensive">Intensive (60+ hours/week)</option>
          <option value="flexible">Flexible schedule</option>
        </select>
      </div>
    </div>
  );
};

export default PreferencesStep;