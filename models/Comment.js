const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model { }
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id',
            },
        },
        date_posted: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true, //makes table name same as model name
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;