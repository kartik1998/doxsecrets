const router = require('express').Router();
const AlertController = require('@alert/controller');

router.post('/user', (req, res) => {
  AlertController.alertUserRepositories(req, res);
});

router.post('/repository', (req, res) => {
  AlertController.alertRepository(req, res);
});

module.exports = router;
