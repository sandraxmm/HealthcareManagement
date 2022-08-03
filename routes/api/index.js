const router = require('express').Router();

const doctorRoutes = require('./doctor');
const patientRoutes = require('./patient');

router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);

module.exports = router;
