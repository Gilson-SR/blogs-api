const jwt = require('jsonwebtoken');
require('dotenv');

const createToken = (email) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;
};

const tokenValidation = (token) => {
    try {
        const decrypted = jwt.verify(token, process.env.JWT_SECRET);
        return { error: null, decrypted };
    } catch (_error) {
        const error = new Error('Expired or invalid token');
        return { error, decrypted: null };
    }
};

module.exports = {
    createToken,
    tokenValidation,
};