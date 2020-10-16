const router = require('express').Router();
const out = require('@lib/apiout');
const statusCodes = require('@lib/statusCodes');

router.get('/', (req, res) => {
  out.success(res, statusCodes.SUCCESS, 'Aok');
});

module.exports = router;
