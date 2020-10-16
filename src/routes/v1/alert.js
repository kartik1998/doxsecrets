const router = require('express').Router();
const AlertController = require('@alert/controller');

router.post('/user', (req, res) => {
  AlertController.alertUserRepos(req, res);
});

module.exports = router;
