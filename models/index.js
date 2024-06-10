const User = require('./User')
const Blog = require('./Blog')

//relationship stating a user can have many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//relationship stating a blog belongs to a user
<<<<<<< HEAD
Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blog }
=======
Blog.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = { User, Blog}
>>>>>>> f640cca271d052973c3e96f7066b62df2e55d516
