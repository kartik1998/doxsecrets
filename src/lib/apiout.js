const statusCodes = require('./statusCodes');

const appendHeaders = (res, headers) => {
  if (!res.headersSent) {
    Object.entries(headers).forEach((v) => res.setHeader(v[0], v[1]));
  }
};

exports.success = (res, statusCode = 200, response, headers = {}) => {
  appendHeaders(res, headers);

  const out = {
    statusCode,
    status: 'success',
    result: response,
  };
  res.status(statusCode).json(out);
};

exports.error = (res, statusCode, message, headers = {}) => {
  appendHeaders(res, headers);

  let code = (!Object.values(statusCodes).includes(statusCode)) ? undefined : statusCode;
  const msg = (!code ? 'internal server error' : message);
  code = statusCode || statusCodes.INTERNALERR;

  const out = {
    status: 'failure',
    statusCode: `${code}`,
    error: msg,
  };
  res.status(code).json(out);
};
