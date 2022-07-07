"use strict";

function admin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'admin' || req.user.role === 'super_admin') {
    return next();
  }

  return res.redirect('/api/adminPage/dashboard');
}

module.exports = admin;