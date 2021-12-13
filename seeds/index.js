const seedUsers = require('./user-seeds');
const seedAppointments = require('./appointment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedAppointments();
    process.exit(0);
};

seedAll();