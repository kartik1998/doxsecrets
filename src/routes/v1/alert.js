const router = require('express').Router();
const AlertController = require('@alert/controller');

router.get('/', (req, res) => {
  AlertController.checkUser(req, res);
});

module.exports = router;
