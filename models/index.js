const User = require('./User')
const Blog = require('./Blog')

//relationship stating a user can have many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//relationship stating a blog belongs to a user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blog }
