const userService = require('../service/user.service');

const create = async (req, res) => {
  const { type, message } = await userService.create(req.body);
  if (type !== 201) return res.status(type).json({ message });
  res.status(type).json(message);
};

module.exports = {
  create,
};