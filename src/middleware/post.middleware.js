const postValidation = (request, response, next) => {
    const { title, content, categoryIds } = request.body;

    if (!title || !content || !categoryIds) {
        response.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

const updateValidation = (request, response, next) => {
    const { title, content } = request.body;

    if (!title || !content) {
        response.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

module.exports = {
    postValidation,
    updateValidation,
};