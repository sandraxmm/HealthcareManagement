const router = require('express').Router();

const doctorRoutes = require('./doctorRoutes');
const patientRoutes = require('./patientRoutes');

router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);

module.exports = router;
