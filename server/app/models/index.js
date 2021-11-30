const config = require("../config/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User")(sequelize, Sequelize);
db.appointmentStatus = require("./AppointmentStatus")(sequelize, Sequelize);
db.appointment = require("./Appointment")(sequelize, Sequelize);

// relationship
db.user.hasMany(db.appointment);
db.appointment.belongsTo(db.user);

db.appointment.hasOne(db.appointmentStatus);
db.appointmentStatus.belongsTo(db.appointment);

module.exports = db;