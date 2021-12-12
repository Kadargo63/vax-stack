const { Appointment } = require('../models');

const appointmentData = [{
    user_id: 1,
    vax_service: 'Moderna Booster',
    date: '12182021',
    time: '08:00'
},
{
    user_id: 2,
    vax_service: 'J&J Vaccine',
    date: '12182021',
    time: '08:30'
},
{
    user_id: 3,
    vax_service: 'Moderna 2-shot Vaccine',
    date: '12182021',
    time: '09:00'
}
];

const seedAppointments = () => Appointment.bulkCreate(appointmentData);
module.exports = seedAppointments;