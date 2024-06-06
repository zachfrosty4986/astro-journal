const User = require('./user')
const Blog = require('./blog')

//relationship stating a user can have many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//relationship stating a blog belongs to a user
Blog.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = { User, Blog}