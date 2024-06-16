const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Comment')

//relationship stating a user can have many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//User can have multiple comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//relationship stating a blog belongs to a user
Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

//comments belong to a User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Blog, {
    foreignKey: 'Blog_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Blog, Comment }
