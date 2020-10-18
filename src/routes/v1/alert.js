const router = require('express').Router();
const AlertController = require('@alert/controller');
const BotController = require('@alert/bot/controller');

router.post('/user', (req, res) => {
  AlertController.alertUserRepositories(req, res);
});

router.post('/bot/user', (req, res) => {
  BotController.alertUserRepositories(req, res);
});

router.post('/repository', (req, res) => {
  AlertController.alertRepository(req, res);
});

router.post('/bot/repository', (req, res) => {
  BotController.alertRepository(req, res);
});

module.exports = router;
