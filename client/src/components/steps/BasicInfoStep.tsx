import React from 'react';
import { UserProfile } from '../../types';

interface BasicInfoStepProps {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ profile, updateProfile }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Age
        </label>
        <input
          type="number"
          min="16"
          max="100"
          value={profile.age || ''}
          onChange={(e) => updateProfile({ age: parseInt(e.target.value) || 0 })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your age"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Education Level
        </label>
        <select
          value={profile.education}
          onChange={(e) => updateProfile({ education: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your education level</option>
          <option value="high-school">High School</option>
          <option value="some-college">Some College</option>
          <option value="bachelors">Bachelor's Degree</option>
          <option value="masters">Master's Degree</option>
          <option value="phd">PhD</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Work Experience
        </label>
        <select
          value={profile.experience}
          onChange={(e) => updateProfile({ experience: e.target.value })}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select your experience level</option>
          <option value="none">No professional experience</option>
          <option value="entry">0-2 years</option>
          <option value="mid">3-5 years</option>
          <option value="senior">6-10 years</option>
          <option value="expert">10+ years</option>
        </select>
      </div>
    </div>
  );
};

export default BasicInfoStep;