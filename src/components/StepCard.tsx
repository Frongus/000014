import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface StepCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onNext: () => void;
  onPrev?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  canProceed?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  children,
  onNext,
  onPrev,
  isFirstStep = false,
  isLastStep = false,
  canProceed = true
}) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="mb-8">
        {children}
      </div>

      <div className="flex justify-between">
        {!isFirstStep ? (
          <button
            onClick={onPrev}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
            canProceed
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>{isLastStep ? 'Get Results' : 'Continue'}</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StepCard;