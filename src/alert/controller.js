const statusCodes = require('@lib/statusCodes');
const out = require('@lib/apiout');
const AlertService = require('./service');

const checkUser = async (req, res, _next) => {
  const response = AlertService.checkUser();
  return out.success(res, statusCodes.SUCCESS, response);
};

module.exports = { checkUser };
