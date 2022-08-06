const router = require('express').Router();
const { Doctor, Patient } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const patientData = await Patient.findAll({
      include: [
        {
          model: Doctor,
          attributes: ['name'],
        },
      ],
    });

    const patients = patientData.map((patient) => patient.get({ plain: true }));
    res.render('homepage', { 
      patients, 
      logged_in: req.session?.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/patient/:id', async (req, res) => {
  try {
    const patientData = await Patient.findByPk(req.params.id, {
      include: [
        {
          model: Doctor,
          attributes: ['name'],
        },
      ],
    });

    const patient = patientData.get({ plain: true });

    res.render('patient', {
      ...patient,
      logged_in: req.session?.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const doctorData = await Doctor.findByPk(req.session.doctor_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Doctor }],
    });

    const doctor = doctorData.get({ plain: true });

    res.render('profile', {
      ...doctor,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;