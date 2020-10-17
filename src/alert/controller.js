const statusCodes = require('@lib/statusCodes');
const out = require('@lib/apiout');
const AlertService = require('./service');

class AlertController {
  static async alertUserRepositories(req, res) {
    const { userName } = req.body;
    try {
      const response = await AlertService.alertUserRepositories(userName);
      return out.success(res, statusCodes.SUCCESS, response);
    } catch (err) {
      return out.error(res, statusCodes.INTERNALERR, err);
    }
  }

  static async alertRepository(req, res) {
    const { repoLink } = req.body;
    try {
      const response = await AlertService.alertRepository(repoLink);
      return out.success(res, statusCodes.SUCCESS, response);
    } catch (err) {
      return out.error(res, statusCodes.INTERNALERR, err);
    }
  }
}

module.exports = AlertController;
