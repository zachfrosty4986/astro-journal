const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const moment = require('moment')

class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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
        date_created: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: moment().format("L")
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
        modelName: 'blog',
    }
)

module.exports = Blog