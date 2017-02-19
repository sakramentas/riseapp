'use strict';

var should = require('should'),
  request = require('supertest'),
  path = require('path'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Loan = mongoose.model('Loan'),
  express = require(path.resolve('./config/lib/express'));

/**
 * Globals
 */
var app,
  agent,
  credentials,
  user,
  loan;

/**
 * Loan routes tests
 */
describe('Loan CRUD tests', function () {

  before(function (done) {
    // Get application
    app = express.init(mongoose);
    agent = request.agent(app);

    done();
  });

  beforeEach(function (done) {
    // Create user credentials
    credentials = {
      username: 'username',
      password: 'M3@n.jsI$Aw3$0m3'
    };

    // Create a new user
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: credentials.username,
      password: credentials.password,
      provider: 'local'
    });

    // Save a user to the test db and create new Loan
    user.save(function () {
      loan = {
        name: 'Loan name'
      };

      done();
    });
  });

  it('should be able to save a Loan if logged in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Loan
        agent.post('/api/loans')
          .send(loan)
          .expect(200)
          .end(function (loanSaveErr, loanSaveRes) {
            // Handle Loan save error
            if (loanSaveErr) {
              return done(loanSaveErr);
            }

            // Get a list of Loans
            agent.get('/api/loans')
              .end(function (loansGetErr, loansGetRes) {
                // Handle Loans save error
                if (loansGetErr) {
                  return done(loansGetErr);
                }

                // Get Loans list
                var loans = loansGetRes.body;

                // Set assertions
                (loans[0].user._id).should.equal(userId);
                (loans[0].name).should.match('Loan name');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to save an Loan if not logged in', function (done) {
    agent.post('/api/loans')
      .send(loan)
      .expect(403)
      .end(function (loanSaveErr, loanSaveRes) {
        // Call the assertion callback
        done(loanSaveErr);
      });
  });

  it('should not be able to save an Loan if no name is provided', function (done) {
    // Invalidate name field
    loan.name = '';

    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Loan
        agent.post('/api/loans')
          .send(loan)
          .expect(400)
          .end(function (loanSaveErr, loanSaveRes) {
            // Set message assertion
            (loanSaveRes.body.message).should.match('Please fill Loan name');

            // Handle Loan save error
            done(loanSaveErr);
          });
      });
  });

  it('should be able to update an Loan if signed in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Loan
        agent.post('/api/loans')
          .send(loan)
          .expect(200)
          .end(function (loanSaveErr, loanSaveRes) {
            // Handle Loan save error
            if (loanSaveErr) {
              return done(loanSaveErr);
            }

            // Update Loan name
            loan.name = 'WHY YOU GOTTA BE SO MEAN?';

            // Update an existing Loan
            agent.put('/api/loans/' + loanSaveRes.body._id)
              .send(loan)
              .expect(200)
              .end(function (loanUpdateErr, loanUpdateRes) {
                // Handle Loan update error
                if (loanUpdateErr) {
                  return done(loanUpdateErr);
                }

                // Set assertions
                (loanUpdateRes.body._id).should.equal(loanSaveRes.body._id);
                (loanUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should be able to get a list of Loans if not signed in', function (done) {
    // Create new Loan model instance
    var loanObj = new Loan(loan);

    // Save the loan
    loanObj.save(function () {
      // Request Loans
      request(app).get('/api/loans')
        .end(function (req, res) {
          // Set assertion
          res.body.should.be.instanceof(Array).and.have.lengthOf(1);

          // Call the assertion callback
          done();
        });

    });
  });

  it('should be able to get a single Loan if not signed in', function (done) {
    // Create new Loan model instance
    var loanObj = new Loan(loan);

    // Save the Loan
    loanObj.save(function () {
      request(app).get('/api/loans/' + loanObj._id)
        .end(function (req, res) {
          // Set assertion
          res.body.should.be.instanceof(Object).and.have.property('name', loan.name);

          // Call the assertion callback
          done();
        });
    });
  });

  it('should return proper error for single Loan with an invalid Id, if not signed in', function (done) {
    // test is not a valid mongoose Id
    request(app).get('/api/loans/test')
      .end(function (req, res) {
        // Set assertion
        res.body.should.be.instanceof(Object).and.have.property('message', 'Loan is invalid');

        // Call the assertion callback
        done();
      });
  });

  it('should return proper error for single Loan which doesnt exist, if not signed in', function (done) {
    // This is a valid mongoose Id but a non-existent Loan
    request(app).get('/api/loans/559e9cd815f80b4c256a8f41')
      .end(function (req, res) {
        // Set assertion
        res.body.should.be.instanceof(Object).and.have.property('message', 'No Loan with that identifier has been found');

        // Call the assertion callback
        done();
      });
  });

  it('should be able to delete an Loan if signed in', function (done) {
    agent.post('/api/auth/signin')
      .send(credentials)
      .expect(200)
      .end(function (signinErr, signinRes) {
        // Handle signin error
        if (signinErr) {
          return done(signinErr);
        }

        // Get the userId
        var userId = user.id;

        // Save a new Loan
        agent.post('/api/loans')
          .send(loan)
          .expect(200)
          .end(function (loanSaveErr, loanSaveRes) {
            // Handle Loan save error
            if (loanSaveErr) {
              return done(loanSaveErr);
            }

            // Delete an existing Loan
            agent.delete('/api/loans/' + loanSaveRes.body._id)
              .send(loan)
              .expect(200)
              .end(function (loanDeleteErr, loanDeleteRes) {
                // Handle loan error error
                if (loanDeleteErr) {
                  return done(loanDeleteErr);
                }

                // Set assertions
                (loanDeleteRes.body._id).should.equal(loanSaveRes.body._id);

                // Call the assertion callback
                done();
              });
          });
      });
  });

  it('should not be able to delete an Loan if not signed in', function (done) {
    // Set Loan user
    loan.user = user;

    // Create new Loan model instance
    var loanObj = new Loan(loan);

    // Save the Loan
    loanObj.save(function () {
      // Try deleting Loan
      request(app).delete('/api/loans/' + loanObj._id)
        .expect(403)
        .end(function (loanDeleteErr, loanDeleteRes) {
          // Set message assertion
          (loanDeleteRes.body.message).should.match('User is not authorized');

          // Handle Loan error error
          done(loanDeleteErr);
        });

    });
  });

  it('should be able to get a single Loan that has an orphaned user reference', function (done) {
    // Create orphan user creds
    var _creds = {
      username: 'orphan',
      password: 'M3@n.jsI$Aw3$0m3'
    };

    // Create orphan user
    var _orphan = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'orphan@test.com',
      username: _creds.username,
      password: _creds.password,
      provider: 'local'
    });

    _orphan.save(function (err, orphan) {
      // Handle save error
      if (err) {
        return done(err);
      }

      agent.post('/api/auth/signin')
        .send(_creds)
        .expect(200)
        .end(function (signinErr, signinRes) {
          // Handle signin error
          if (signinErr) {
            return done(signinErr);
          }

          // Get the userId
          var orphanId = orphan._id;

          // Save a new Loan
          agent.post('/api/loans')
            .send(loan)
            .expect(200)
            .end(function (loanSaveErr, loanSaveRes) {
              // Handle Loan save error
              if (loanSaveErr) {
                return done(loanSaveErr);
              }

              // Set assertions on new Loan
              (loanSaveRes.body.name).should.equal(loan.name);
              should.exist(loanSaveRes.body.user);
              should.equal(loanSaveRes.body.user._id, orphanId);

              // force the Loan to have an orphaned user reference
              orphan.remove(function () {
                // now signin with valid user
                agent.post('/api/auth/signin')
                  .send(credentials)
                  .expect(200)
                  .end(function (err, res) {
                    // Handle signin error
                    if (err) {
                      return done(err);
                    }

                    // Get the Loan
                    agent.get('/api/loans/' + loanSaveRes.body._id)
                      .expect(200)
                      .end(function (loanInfoErr, loanInfoRes) {
                        // Handle Loan error
                        if (loanInfoErr) {
                          return done(loanInfoErr);
                        }

                        // Set assertions
                        (loanInfoRes.body._id).should.equal(loanSaveRes.body._id);
                        (loanInfoRes.body.name).should.equal(loan.name);
                        should.equal(loanInfoRes.body.user, undefined);

                        // Call the assertion callback
                        done();
                      });
                  });
              });
            });
        });
    });
  });

  afterEach(function (done) {
    User.remove().exec(function () {
      Loan.remove().exec(done);
    });
  });
});
