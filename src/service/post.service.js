const { BlogPost, Category, User, PostCategory } = require('../models');

const insertPost = async ({ title, content, categoryIds, userEmail }) => {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });

    if (count !== categoryIds.length) {
      return { error: 'one or more "categoryIds" not found', post: null };
}
  const [{ id }] = await User.findAll({ where: { email: userEmail } });

  const post = await BlogPost.create({ title,
    content,
    userId: id, 
    published: Date.now(),
    updated: Date.now() });

    const promises = categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId: post.id, categoryId });
    });

    await Promise.all(promises);

    return { error: null, post: post.dataValues };
};

const getAllPost = async () => {
    const posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return { error: null, posts };
};

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    if (post) return { error: null, post };

    return { error: 'Post does not exist', post: null };
};

const postUpdate = async ({ title, content, id, userEmail }) => {
    const post = await BlogPost.findByPk(id, {
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }],
    });

    if (post.user.email !== userEmail) return { error: 'Unauthorized user', currentPost: null };

    await BlogPost.update({ title, content }, {
        where: { id },
    });

    const currentPost = await BlogPost.findByPk(id, {
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return { error: null, currentPost }; 
};

module.exports = {
    insertPost,
    getAllPost,
    getPostById,
    postUpdate,
};