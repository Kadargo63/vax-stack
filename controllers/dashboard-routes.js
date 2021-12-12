const router = require('express').Router();
const sequelize = require('../config/connection');
const { Appointment, User } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
    Appointment.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'vax_service',
            'date',
            'created_at'
        ],
        include: [{
            model: User,
            attributes: [
                'last_name',
                'first_name',
                'phone',
                'dob',
                'address',
                'email',
            ]
        }]
    })
    .then(dbAppointmentData => {
        const appointments = dbAppointmentData.map(appointment => appointment.get({
            plain: true }));
            res.render('dashboard', {appointments, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Appointment.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'vax_service',
            'date',
            'created_at'
        ],
        include: [{
            model: User,
            attributes: [
                'last_name',
                'first_name',
                'phone',
                'dob',
                'address',
                'email',
            ]
        }]
    })
    .then(dbAppointmentData => {
        const appointment = dbAppointmentData.get({
            plain: true });
            res.render('edit-appointment', {appointment, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;