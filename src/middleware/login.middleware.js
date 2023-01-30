const jwt = require('../utils/jwt');

const loginValidation = (request, response, next) => {
    const { email, password } = request.body;
    if (!email || !password) {
        response.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

const tokenValidation = (request, response, next) => {
    const token = request.header('Authorization');

    if (!token) {
        response.status(401).json({ message: 'Token not found' });
        return;
    }

    const { error, decrypted } = jwt.tokenValidation(token);
    
    if (error) {
        response.status(401).json({ message: 'Expired or invalid token' });
        return;
    }
    
    request.body.userEmail = decrypted.email;
    next();
};

module.exports = {
    loginValidation,
    tokenValidation,
};