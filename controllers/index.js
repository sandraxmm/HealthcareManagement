const router = require('express').Router();

//const { route } = require('./api');
const apiRoutes = require('./api');
const webRoutes = require('./webRoutes');

router.use('/', webRoutes);
router.use('/api', apiRoutes);

module.exports = router;
