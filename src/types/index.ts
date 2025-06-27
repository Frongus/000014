export interface UserProfile {
  age: number;
  hobbies: string[];
  interests: string[];
  skills: string[];
  experience: string;
  education: string;
  workStyle: string;
  goals: string;
  riskTolerance: string;
  timeCommitment: string;
}

export interface AIRecommendation {
  profession: {
    title: string;
    description: string;
    matchPercentage: number;
    keySkills: string[];
    averageSalary: string;
    growthOutlook: string;
  };
  businessNiche: {
    title: string;
    description: string;
    marketPotential: string;
    startupCost: string;
    timeToProfit: string;
    keyAdvantages: string[];
  };
}

export interface PremiumPlan {
  profession: {
    roadmap: {
      phase: string;
      duration: string;
      tasks: string[];
    }[];
    resources: {
      courses: string[];
      certifications: string[];
      books: string[];
    };
  };
  business: {
    businessPlan: {
      step: string;
      description: string;
      timeline: string;
    }[];
    financialProjection: {
      year: number;
      revenue: string;
      expenses: string;
      profit: string;
    }[];
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt: string;
  profile?: UserProfile;
  recommendations?: AIRecommendation[];
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (profile: UserProfile) => void;
  isLoading: boolean;
}