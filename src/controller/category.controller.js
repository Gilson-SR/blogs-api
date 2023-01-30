const categoryService = require('../service/category.service');

const insertCategory = async (request, response) => {
    const { name } = request.body;
    const { id } = await categoryService.insertCategory(name);
    response.status(201).json({
        name,
        id,
    });
};

module.exports = {
    insertCategory,
};