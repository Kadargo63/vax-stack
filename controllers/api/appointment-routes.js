const router = require('express').Router();
const { Appointment, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('=================');
    Appointment.findAll({
        attributes: ['id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['user_id']
            }
        ]
    })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Appointment.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id'],
      include: [
        {
          model: User,
          attributes: ['user_id']
        }
      ]
    })
      .then(dbAppointmentData => {
        if (!dbAppointmentData) {
          res.status(404).json({ message: 'No appointment found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', withAuth, (req, res) => {
    Appointment.create({
            vax_service: req.body.vax_service,
            date: req.body.date,
            time: req.body.time,
            user_id: req.session.user_id
        })
        .then(dbAppointmentData => res.json(dbAppointmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Appointment.update({
            vax_service: req.body.vax_service,
            date: req.body.date,
            time: req.body.time
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbAppointmentData => {
            if (!dbAppointmentData) {
                res.status(404).json({ message: 'Could not find a appointment with this id' });
                return;
            }
            res.json(dbAppointmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', withAuth, (req, res) => {
    Appointment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbAppointmentData => {
        if (!dbAppointmentData) {
            res.status(404).json({ message: 'Could not find an appointment with this id' });
            return;
        }
        res.json(dbAppointmentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
