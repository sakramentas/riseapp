'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean-dev',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'dev',
    // Stream defaults to process.stdout
    // Uncomment to enable logging to a log on the file system
    options: {
      //stream: 'access.log'
    }
  },
  app: {
    title: defaultEnvConfig.app.title + ' - Development Environment'
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || 'APP_ID',
    clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
    clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
    callbackURL: '/api/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || 'APP_ID',
    clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || '774n10mpiipzr0',
    clientSecret: process.env.LINKEDIN_SECRET || 'vCutxbecGqKtVmGN',
    callbackURL: '/api/auth/linkedin/callback'
  },
  github: {
    clientID: process.env.GITHUB_ID || 'APP_ID',
    clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/github/callback'
  },
  paypal: {
    clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
    clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: true
  },
  mailer: {
    from: process.env.MAILER_FROM || 'noreply@riseapp.io',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'risecredit1@gmail.com',
        pass: process.env.MAILER_PASSWORD || 'Rise1234'
      }
    }
  },
  bankAPI: {
    key: '6d1bd9471a8d4b0c8a0dbe734e9a89d2',
    bearer:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoiNThhNjAwMzkyM2NjYjlkMDIyMDY1NDUyIiwicm9sZSI6InVzZXIiLCJwcmltYXJ5U3Vic2NyaWJlcktleSI6IjZkMWJkOTQ3MWE4ZDRiMGM4YTBkYmU3MzRlOWE4OWQyIiwiaWF0IjoxNDg3NDI1NzEyfQ.6647KlQC62KbJMhgeXB1hIcs-YISpRiIFtB4tbQAHE0'
  },
  livereload: true,
  seedDB: process.env.MONGO_SEED || false
};
