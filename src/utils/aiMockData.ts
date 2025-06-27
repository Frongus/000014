import { AIRecommendation, PremiumPlan, UserProfile } from '../types';

export const generateMockRecommendation = (profile: UserProfile): AIRecommendation => {
  // This would normally call an AI API, but for demo purposes we'll return mock data
  const professions = [
    {
      title: "UX/UI Designer",
      description: "Create intuitive and visually appealing user interfaces for digital products. Combine creativity with user research to solve complex design problems.",
      matchPercentage: 92,
      keySkills: ["Design Thinking", "Prototyping", "User Research", "Figma", "Adobe Creative Suite"],
      averageSalary: "$75,000 - $120,000",
      growthOutlook: "13% (Much faster than average)"
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data to help organizations make informed decisions. Use statistical methods and machine learning to extract insights from large datasets.",
      matchPercentage: 88,
      keySkills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Visualization"],
      averageSalary: "$95,000 - $165,000",
      growthOutlook: "22% (Much faster than average)"
    },
    {
      title: "Product Manager",
      description: "Guide the development of products from conception to launch. Work with cross-functional teams to deliver solutions that meet user needs and business goals.",
      matchPercentage: 85,
      keySkills: ["Strategic Thinking", "Project Management", "Market Research", "Communication", "Analytics"],
      averageSalary: "$90,000 - $150,000",
      growthOutlook: "19% (Much faster than average)"
    }
  ];

  const businesses = [
    {
      title: "Digital Marketing Agency",
      description: "Help small businesses establish their online presence through social media management, content creation, and digital advertising campaigns.",
      marketPotential: "High - $350B market",
      startupCost: "$5,000 - $15,000",
      timeToProfit: "6-12 months",
      keyAdvantages: [
        "Low barrier to entry",
        "High demand from small businesses",
        "Scalable service model",
        "Remote work friendly"
      ]
    },
    {
      title: "E-learning Platform",
      description: "Create and sell online courses in your area of expertise. Build a platform that helps others learn new skills while generating passive income.",
      marketPotential: "Very High - $350B market",
      startupCost: "$2,000 - $10,000",
      timeToProfit: "3-8 months",
      keyAdvantages: [
        "Passive income potential",
        "Global reach",
        "Low ongoing costs",
        "High profit margins"
      ]
    },
    {
      title: "SaaS Tool Development",
      description: "Develop software solutions that solve specific problems for businesses or individuals. Focus on subscription-based revenue model.",
      marketPotential: "Very High - $195B market",
      startupCost: "$10,000 - $50,000",
      timeToProfit: "12-24 months",
      keyAdvantages: [
        "Recurring revenue",
        "High scalability",
        "Global market access",
        "High valuation potential"
      ]
    }
  ];

  // Simple matching logic based on profile
  const selectedProfession = professions[Math.floor(Math.random() * professions.length)];
  const selectedBusiness = businesses[Math.floor(Math.random() * businesses.length)];

  return {
    profession: selectedProfession,
    businessNiche: selectedBusiness
  };
};

export const generateMockPremiumPlan = (recommendation: AIRecommendation): PremiumPlan => {
  return {
    profession: {
      roadmap: [
        {
          phase: "Foundation Building",
          duration: "Months 1-3",
          tasks: [
            "Complete fundamental courses in your field",
            "Build a portfolio with 3-5 projects",
            "Join relevant professional communities",
            "Start networking with industry professionals"
          ]
        },
        {
          phase: "Skill Development",
          duration: "Months 4-8",
          tasks: [
            "Pursue advanced certifications",
            "Take on freelance projects or internships",
            "Attend industry conferences and workshops",
            "Find a mentor in your target field"
          ]
        },
        {
          phase: "Career Transition",
          duration: "Months 9-12",
          tasks: [
            "Apply for entry-level positions",
            "Optimize your resume and LinkedIn profile",
            "Practice interviewing skills",
            "Negotiate job offers and start your new career"
          ]
        }
      ],
      resources: {
        courses: [
          "Google UX Design Professional Certificate",
          "Coursera Data Science Specialization",
          "Product Management Fundamentals"
        ],
        certifications: [
          "Adobe Certified Expert (ACE)",
          "Google Analytics Certified",
          "Scrum Master Certification"
        ],
        books: [
          "Don't Make Me Think by Steve Krug",
          "The Lean Startup by Eric Ries",
          "Inspired by Marty Cagan"
        ]
      }
    },
    business: {
      businessPlan: [
        {
          step: "Market Research & Validation",
          description: "Conduct thorough market research to validate your business idea and identify your target audience.",
          timeline: "Weeks 1-4"
        },
        {
          step: "Business Plan Development",
          description: "Create a comprehensive business plan including financial projections and marketing strategy.",
          timeline: "Weeks 5-8"
        },
        {
          step: "MVP Development",
          description: "Build a minimum viable product to test with early customers and gather feedback.",
          timeline: "Months 3-6"
        },
        {
          step: "Launch & Scale",
          description: "Launch your product, acquire customers, and scale your operations based on market feedback.",
          timeline: "Months 7-12"
        }
      ],
      financialProjection: [
        { year: 1, revenue: "$25,000", expenses: "$15,000", profit: "$10,000" },
        { year: 2, revenue: "$75,000", expenses: "$35,000", profit: "$40,000" },
        { year: 3, revenue: "$150,000", expenses: "$60,000", profit: "$90,000" }
      ]
    }
  };
};