const router = require('express').Router();
const AlertController = require('@alert/controller');

router.get('/', (req, res) => {
  AlertController.checkUser(req, res);
});

router.post('/user', (req, res) => {
  AlertController.getUserRepos(req, res);
});

module.exports = router;
