const { models } = require("mongoose");
const { User } = require("../../models");
const register = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.json({
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = register;
