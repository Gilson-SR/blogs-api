const { Category } = require('../models');

const insertCategory = async (name) => {
    const category = await Category.create({ name }, { fields: ['name'] });
    return { error: null, id: category.null };
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return { error: null, categories };
};

module.exports = {
    insertCategory,
    getAllCategories,
};