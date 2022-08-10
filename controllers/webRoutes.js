const router = require('express').Router();
const { Doctor, Patient } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    //get patients assigned to doctor
    const patientData = await Patient.findAll({
      include: [
        {
          model: Doctor,
          attributes: ['name'],
        },
      ],
    });

    //Serialize data so the template can read it
    const patients = patientData.map((patient) => patient.get({ plain: true }));

    //pass serialized data and session flag into template
    res.render('homepage', { 
      patients, 
      logged_in: req.session?.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get patient data from specific id
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

//use middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    //find login doctor based on id
    const doctorData = await Doctor.findByPk(req.session.doctor_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Patient }],
    });

    const doctor = doctorData.get({ plain: true });

console.log("about to log doctor data");
console.log(doctor);

    res.render('profile', {
      ...doctor,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  //redirect request to other route when docto is already logged in
  if (req.session?.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;