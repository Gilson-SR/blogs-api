const categoryService = require('../service/category.service');

const insertCategory = async (request, response) => {
    const { name } = request.body;
    const { id } = await categoryService.insertCategory(name);
    response.status(201).json({
        name,
        id,
    });
};

const getAllCategories = async (_request, response) => {
    const { categories } = await categoryService.getAllCategories();
    response.status(200).json(categories);
};

module.exports = {
    insertCategory,
    getAllCategories,
};