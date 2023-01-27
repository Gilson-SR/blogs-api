const userService = require('../service/user.service');

const insertUser = async (request, response) => {
  const user = request.body;
  const { token, error } = await userService.insertUser(user);
  if (error) return response.status(409).json({ message: error });
  response.status(201).json(token);
};

const getAllUser = async (request, response) => {
  const users = await userService.getAllUser();
  response.status(200).json(users);
};

module.exports = {
  insertUser,
  getAllUser,
};