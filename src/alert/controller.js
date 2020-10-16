const statusCodes = require('@lib/statusCodes');
const out = require('@lib/apiout');
const AlertService = require('./service');

class AlertController {
  static async checkUser(req, res) {
    const response = AlertService.checkUser();
    return out.success(res, statusCodes.SUCCESS, response);
  }

  static async getUserRepos(req, res) {
    const { userName } = req.body;
    const response = await AlertService.getUserRepos(userName);
    return out.success(res, statusCodes.SUCCESS, response);
  }
}

module.exports = AlertController;
