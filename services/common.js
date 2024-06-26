const passport = require("passport");
exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //todo : for testing token is fixed for now
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2M3MTA5YjI5YWExNjY2MjNiODU0YyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE5NDMxNDMzfQ.6QWDgOaIvcDk3-nmsQkR_hmBkHUZ3rb3BqBsxXwIE1M";
  return token;
};
