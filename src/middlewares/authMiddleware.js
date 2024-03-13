// Middleware para verificar la autenticación del usuario
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.uid) {
    return next();
  } else {
    return res.redirect('/products');
  }
};

module.exports = {
isAuthenticated,
};