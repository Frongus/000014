import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { UserProfile } from '../../types';

interface InterestsStepProps {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const InterestsStep: React.FC<InterestsStepProps> = ({ profile, updateProfile }) => {
  const [hobbyInput, setHobbyInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  const addHobby = () => {
    if (hobbyInput.trim()) {
      updateProfile({
        hobbies: [...(profile.hobbies || []), hobbyInput.trim()]
      });
      setHobbyInput('');
    }
  };

  const removeHobby = (index: number) => {
    updateProfile({
      hobbies: profile.hobbies?.filter((_, i) => i !== index) || []
    });
  };

  const addInterest = () => {
    if (interestInput.trim()) {
      updateProfile({
        interests: [...(profile.interests || []), interestInput.trim()]
      });
      setInterestInput('');
    }
  };

  const removeInterest = (index: number) => {
    updateProfile({
      interests: profile.interests?.filter((_, i) => i !== index) || []
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          Hobbies & Activities
        </label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={hobbyInput}
            onChange={(e) => setHobbyInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addHobby()}
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Photography, Gaming, Cooking"
          />
          <button
            onClick={addHobby}
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.hobbies?.map((hobby, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              <span>{hobby}</span>
              <button
                onClick={() => removeHobby(index)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          Professional Interests
        </label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addInterest()}
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Technology, Healthcare, Finance"
          />
          <button
            onClick={addInterest}
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.interests?.map((interest, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              <span>{interest}</span>
              <button
                onClick={() => removeInterest(index)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestsStep;