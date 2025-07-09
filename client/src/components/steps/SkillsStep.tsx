import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { UserProfile } from '../../types';

interface SkillsStepProps {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const SkillsStep: React.FC<SkillsStepProps> = ({ profile, updateProfile }) => {
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    if (skillInput.trim()) {
      updateProfile({
        skills: [...(profile.skills || []), skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    updateProfile({
      skills: profile.skills?.filter((_, i) => i !== index) || []
    });
  };

  const suggestedSkills = [
    'Communication', 'Leadership', 'Problem Solving', 'Creativity', 'Analytical Thinking',
    'Project Management', 'Programming', 'Design', 'Sales', 'Marketing',
    'Data Analysis', 'Writing', 'Public Speaking', 'Teamwork', 'Time Management'
  ];

  const addSuggestedSkill = (skill: string) => {
    if (!profile.skills?.includes(skill)) {
      updateProfile({
        skills: [...(profile.skills || []), skill]
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          Your Skills & Strengths
        </label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add a skill or strength"
          />
          <button
            onClick={addSkill}
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {profile.skills?.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-800"
            >
              <span>{skill}</span>
              <button
                onClick={() => removeSkill(index)}
                className="text-blue-400 hover:text-red-400 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-300 mb-3">Suggested Skills</h3>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills
            .filter(skill => !profile.skills?.includes(skill))
            .map((skill) => (
              <button
                key={skill}
                onClick={() => addSuggestedSkill(skill)}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors border border-gray-700 hover:border-gray-600"
              >
                + {skill}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsStep;