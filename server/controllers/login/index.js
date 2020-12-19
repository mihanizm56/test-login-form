const loginController = async (req, res) => {
  setTimeout(() => {
    res.status(401).json({
      login: 'login error',
      password: 'password error',
    });
  }, 2000);
};

module.exports = {
  loginController,
};
