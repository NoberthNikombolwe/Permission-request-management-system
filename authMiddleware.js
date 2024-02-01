function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      // If the user is authenticated, allow access to the route/page
      return next();
    }
  
    // If the user is not authenticated, redirect to the login page or show an unauthorized message
    res.redirect('/login'); // Change '/login' to your login page route
  }

  module.exports = ensureAuthenticated;
  