const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Appointment model
class Appointment extends Model {}

// create fields/columns for Appointment model
Appointment.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointment'
    }
);

module.exports = Appointment;