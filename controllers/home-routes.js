const sequelize = require('../config/connection');
const { Appointment, User } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);
    Appointment.findAll({
        attributes: [
            'id',
            'vax_service',
            'date',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'last_name',
                    'first_name',
                    'phone',
                    'dob',
                    'address',
                    'email',
                ]
            }
        ]
    })
    .then(dbAppointmentData => {
        const appointments = dbAppointmentData.map(appointment => appointment.get({
            plain: true }));
            res.render('homepage', {appointments, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/appointment/:id', (req, res) => {
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
        if (!dbAppointmentData) {
            res.status(404).json({ message: 'Could not find a user with this ID' });
            return;
        }
        const post = dbAppointmentData.get({ plain: true });
        console.log(appointment);
        res.render('single-appointment', { appointment, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;