const express = require('express');
const router = express.Router();

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
};

// Dashboard main page
router.get('/', requireAuth, (req, res) => {
  res.render('dashboard/index', {
    title: 'Dashboard - CareerAI',
    layout: 'dashboard',
    user: req.session.user,
    activeTab: 'overview'
  });
});

// Career Discovery
router.get('/discovery', requireAuth, (req, res) => {
  res.render('dashboard/discovery', {
    title: 'Career Discovery - CareerAI',
    layout: 'dashboard',
    user: req.session.user,
    activeTab: 'discovery'
  });
});

// Results
router.get('/results', requireAuth, (req, res) => {
  res.render('dashboard/results', {
    title: 'My Results - CareerAI',
    layout: 'dashboard',
    user: req.session.user,
    activeTab: 'results',
    recommendations: req.session.user.recommendations || []
  });
});

module.exports = router;