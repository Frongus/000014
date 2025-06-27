import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import StepCard from './StepCard';
import BasicInfoStep from './steps/BasicInfoStep';
import InterestsStep from './steps/InterestsStep';
import SkillsStep from './steps/SkillsStep';
import PreferencesStep from './steps/PreferencesStep';
import ResultsDisplay from './ResultsDisplay';
import PremiumResults from './PremiumResults';
import { UserProfile, AIRecommendation, PremiumPlan } from '../types';
import { generateMockRecommendation, generateMockPremiumPlan } from '../utils/aiMockData';
import { useAuth } from '../contexts/AuthContext';

const CareerDiscovery: React.FC = () => {
  const { updateProfile } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    age: 0,
    hobbies: [],
    interests: [],
    skills: [],
    experience: '',
    education: '',
    workStyle: '',
    goals: '',
    riskTolerance: '',
    timeCommitment: ''
  });
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);
  const [premiumPlan, setPremiumPlan] = useState<PremiumPlan | null>(null);
  const [showPremium, setShowPremium] = useState(false);

  const totalSteps = 4;

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Generate AI recommendation and save profile
      const aiRecommendation = generateMockRecommendation(profile);
      setRecommendation(aiRecommendation);
      updateProfile(profile);
      setCurrentStep(5); // Results step
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleUpgradeToPremium = () => {
    if (recommendation) {
      const plan = generateMockPremiumPlan(recommendation);
      setPremiumPlan(plan);
      setShowPremium(true);
    }
  };

  const canProceedFromStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return profile.age > 0 && profile.education !== '' && profile.experience !== '';
      case 2:
        return (profile.hobbies?.length || 0) > 0 && (profile.interests?.length || 0) > 0;
      case 3:
        return (profile.skills?.length || 0) > 0;
      case 4:
        return profile.workStyle !== '' && profile.goals !== '' && profile.riskTolerance !== '' && profile.timeCommitment !== '';
      default:
        return true;
    }
  };

  const renderStep = () => {
    if (currentStep === 5 && recommendation) {
      if (showPremium && premiumPlan) {
        return <PremiumResults plan={premiumPlan} />;
      }
      return (
        <ResultsDisplay 
          recommendation={recommendation} 
          onUpgradeToPremium={handleUpgradeToPremium}
        />
      );
    }

    const stepProps = {
      onNext: nextStep,
      onPrev: prevStep,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === totalSteps,
      canProceed: canProceedFromStep(currentStep)
    };

    switch (currentStep) {
      case 1:
        return (
          <StepCard
            title="Tell us about yourself"
            description="Let's start with some basic information to understand your background."
            {...stepProps}
          >
            <BasicInfoStep profile={profile} updateProfile={updateUserProfile} />
          </StepCard>
        );
      case 2:
        return (
          <StepCard
            title="What drives you?"
            description="Share your hobbies and interests to help us understand what motivates you."
            {...stepProps}
          >
            <InterestsStep profile={profile} updateProfile={updateUserProfile} />
          </StepCard>
        );
      case 3:
        return (
          <StepCard
            title="Your skills & strengths"
            description="Tell us about your abilities and what you're naturally good at."
            {...stepProps}
          >
            <SkillsStep profile={profile} updateProfile={updateUserProfile} />
          </StepCard>
        );
      case 4:
        return (
          <StepCard
            title="Your preferences"
            description="Help us understand your work style and career aspirations."
            {...stepProps}
          >
            <PreferencesStep profile={profile} updateProfile={updateUserProfile} />
          </StepCard>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {currentStep <= totalSteps && (
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      )}
      
      {renderStep()}
    </div>
  );
};

export default CareerDiscovery;