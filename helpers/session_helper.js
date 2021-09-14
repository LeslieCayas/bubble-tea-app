function createSession(req, user) {
  req.session.userId = user.id;
}

module.exports = {
  createSession
};