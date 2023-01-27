const loginService = require('../service/login.service');

const createToken = async (request, response) => {
    const { email, password } = request.body;
    const { error, token } = await loginService.createToken(email, password);
    if (error) {
        response.status(400).json({ message: error });
        return;
    }

    response.status(200).json({ token });
};

module.exports = {
    createToken,
};