const router = require('express').Router();

// TODO : Delete this dummy API call
router.get('/check', (req, res) => {
  res.json({ msg: 'Aok' });
});

module.exports = router;
