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
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2IyNDQwMjUwYWI4MjJiZDNjMjg3ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE5NTc4MzA5fQ.smiDD4u7lDO4TJr7jIGfm-YQzbydy8qIrk7M7xFvlBI";
  return token;
};
