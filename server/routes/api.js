const express = require('express');
const router = express.Router();

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ error: 'Authentication required' });
  }
};

// Generate AI recommendation (mock)
router.post('/generate-recommendation', requireAuth, async (req, res) => {
  try {
    const { profile } = req.body;

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock AI recommendation generation
    const recommendation = generateMockRecommendation(profile);

    // Update user session with profile and recommendation
    req.session.user.profile = profile;
    req.session.user.recommendations = [recommendation];

    res.json({
      success: true,
      recommendation
    });
  } catch (error) {
    console.error('Recommendation generation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate recommendation'
    });
  }
});

// Update user profile
router.post('/update-profile', requireAuth, (req, res) => {
  try {
    const { profile } = req.body;
    req.session.user.profile = profile;

    res.json({
      success: true,
      message: 'Profile updated successfully'
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update profile'
    });
  }
});

// Mock AI recommendation generator
function generateMockRecommendation(profile) {
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

  // Simple selection logic
  const selectedProfession = professions[Math.floor(Math.random() * professions.length)];
  const selectedBusiness = businesses[Math.floor(Math.random() * businesses.length)];

  return {
    profession: selectedProfession,
    businessNiche: selectedBusiness,
    generatedAt: new Date().toISOString()
  };
}

module.exports = router;