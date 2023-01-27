const { User } = require('../models');
const jwt = require('../utils/jwt');
const validations = require('./validations/inputValidation');

const create = async (body) => {
    const error = validations.validateCreateUser(body);
    if (error) return { type: 400, message: error };
    const { displayName, email, password, image } = body;
  
    const users = await User.findAll();
    const userExists = users.find(
      (e) => e.email === email && e.password === password,
    );
  
    if (userExists) return { type: 409, message: 'User already registered' };
  
    await User.create({
      displayName,
      email,
      password,
      image,
    });
  
    const token = jwt.generateToken({ displayName, email, image });
  
    return { type: 201, message: { token } };
  };

  module.exports = {
    create,
  };