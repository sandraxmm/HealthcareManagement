const router = require('express').Router();
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');
const { Doctor } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const doctorData = await Doctor.create(req.body);
console.log(doctorData);
    req.session.save(() => {
      req.session.doctor_id = doctorData.id;
      req.session.logged_in = true;

      res.status(200).json(doctorData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//doctor log in
router.post('/login', async (req, res) => {
  try {
    const doctorData = await Doctor.findOne({ where: { email: req.body.email } });
console.log(doctorData);
    if (!doctorData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await doctorData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.doctor_id = doctorData.id;
      req.session.logged_in = true;
      
      res.json({ doctor: doctorData, message: 'Welcome in, Doc!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
