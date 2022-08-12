const withAuth = (req, res, next) => {
  //if doctor is not logged in, send to login page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;