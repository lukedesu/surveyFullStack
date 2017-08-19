const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/success',
      failureRedirect: '/'
    })
  );

  app.get('/', (req, res) => {
    res.send(
      '<a href="http://localhost:5000/auth/google">google</a> - <a href="http://localhost:5000/auth/facebook">facebook</a>'
    );
  });
};
