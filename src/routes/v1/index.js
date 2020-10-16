const router = require('express').Router();
const alertRoutes = require('./alert');

router.use('/alert', alertRoutes);

module.exports = router;
