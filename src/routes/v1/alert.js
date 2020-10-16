require('module-alias/register');
const router = require('express').Router();
const out = require('@lib/apiout');
const statusCodes = require('@lib/statusCodes');

// TODO : Delete this dummy API call
router.get('/check', (req, res) => {
  out.success(res, statusCodes.SUCCESS, 'Aok');
});

module.exports = router;
