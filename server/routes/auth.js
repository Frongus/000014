const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const userStore = require('../utils/userStore');

// Mock user database (in production, use a real database)
const users = new Map();

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
};

// Middleware to redirect if already authenticated
const redirectIfAuth = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

// Login page
router.get('/login', redirectIfAuth, (req, res) => {
  res.render('auth/login', {
    title: 'Sign In - CareerAI',
    layout: 'auth',
    error: req.session.error
  });
  delete req.session.error;
});

// Register page
router.get('/register', redirectIfAuth, (req, res) => {
  res.render('auth/register', {
    title: 'Create Account - CareerAI',
    layout: 'auth',
    error: req.session.error
  });
  delete req.session.error;
});

// Login POST
router.post('/login', async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      req.session.error = 'Please fill in all fields';
      return res.redirect('/auth/login');
    }

    const user = userStore.loadUser(email);
    if (!user) {
      req.session.error = 'Invalid email or password';
      return res.redirect('/auth/login');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      req.session.error = 'Invalid email or password';
      return res.redirect('/auth/login');
    }

    // Set session
    req.session.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      isPremium: user.isPremium || false,
      profile: user.profile || null,
      recommendations: user.recommendations || []
    };

    if (rememberMe) {
      req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days
    }

    res.redirect('/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    req.session.error = 'An error occurred. Please try again.';
    res.redirect('/auth/login');
  }
});

// Register POST
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword, acceptTerms } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      req.session.error = 'Please fill in all fields';
      return res.redirect('/auth/register');
    }

    if (password !== confirmPassword) {
      req.session.error = 'Passwords do not match';
      return res.redirect('/auth/register');
    }

    if (password.length < 6) {
      req.session.error = 'Password must be at least 6 characters long';
      return res.redirect('/auth/register');
    }

    if (!acceptTerms) {
      req.session.error = 'Please accept the terms and conditions';
      return res.redirect('/auth/register');
    }

    // Check if user already exists
    if (users.has(email)) {
      req.session.error = 'An account with this email already exists';
      return res.redirect('/auth/register');
    }

    if (userStore.userExists(email)) {
      req.session.error = 'An account with this email already exists';
      return res.redirect('/auth/register');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      isPremium: false,
      createdAt: new Date().toISOString(),
      profile: null,
      recommendations: []
    };

    userStore.saveUser(user);

    users.set(email, user);

    // Set session
    req.session.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      isPremium: user.isPremium,
      profile: user.profile,
      recommendations: user.recommendations
    };

    res.redirect('/dashboard');
  } catch (error) {
    console.error('Registration error:', error);
    req.session.error = 'An error occurred. Please try again.';
    res.redirect('/auth/register');
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
});

router.post('/update', requireAuth, (req, res) => {
  const { name } = req.body;

  if (!name) {
    req.session.error = 'Name is required';
    return res.redirect('/dashboard');
  }

  const updated = userStore.updateUser(req.session.user.email, (user) => {
    user.name = name;
    return user;
  });

  if (updated) {
    req.session.user.name = updated.name;
    res.redirect('/dashboard');
  } else {
    req.session.error = 'User not found';
    res.redirect('/dashboard');
  }
});

// Delete account
router.post('/delete', requireAuth, (req, res) => {
  userStore.deleteUser(req.session.user.email);
  req.session.destroy((err) => {
    if (err) console.error('Error destroying session:', err);
    res.redirect('/');
  });
});

module.exports = router;