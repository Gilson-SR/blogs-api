const { User } = require('../models');
const jwt = require('../utils/jwt');

const insertUser = async ({ displayName, email, password, image }) => {
    const userExist = await User.findAll({
        where: { email },
    });

    if (userExist.length !== 0) return { error: 'User already registered', token: null };

    await User.create({ displayName, email, password, image });

    const token = jwt.createToken(email);

    return { error: null, token };
};

const getAllUser = async () => {
  const users = await User.findAll({
      attributes: { exclude: ['password'] },
  });
  return users;
};

module.exports = {
    insertUser,
    getAllUser,
};