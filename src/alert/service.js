const axios = require('axios');
const { GITHUB_BASE_URL_USERS, TRUFFLE_HOG_CHEK } = require('nconf').get();
const { fetchJson } = require('@lib/parseString');
const { checkRepoLink } = require('@lib/repoUtils');
const shell = require('shelljs');

// 0: no leaks
// 1: leaks present
// 2: error encountered

class AlertService {
  static async alertUserRepositories(userName) {
    const responseObj = {};
    let leakCode = 0;
    const output = [];
    const response = await axios.get(`${GITHUB_BASE_URL_USERS + userName}/repos`);
    response.data.forEach((res) => {
      const { stdout, code } = shell.exec(`${TRUFFLE_HOG_CHEK}${res.html_url}`, { silent: true });
      if (code === 1) {
        leakCode = 1;
        output.push({
          info: fetchJson(stdout),
          url: res.html_url,
          collaborators_url: res.collaborators_url,
          teams_url: res.teams_url,
          created_at: res.created_at,
          updated_at: res.updated_at,
          pushed_at: res.pushed_at,
        });
      } else if (code === 2 && leakCode !== 1) {
        leakCode = 2;
      }
    });
    responseObj.leakCode = leakCode;
    responseObj.info = output;
    return responseObj;
  }

  static async alertRepository(repoLink) {
    const responseObj = {};
    const output = [];
    if (!checkRepoLink(repoLink)) {
      return {
        leakCode: 2,
        info: 'Repository is either private or it does not exist',
      };
    }
    const { stdout, code } = shell.exec(`${TRUFFLE_HOG_CHEK}${repoLink}`, { silent: true });
    if (code === 1) {
      output.push(fetchJson(stdout));
    }
    responseObj.leakCode = code;
    responseObj.info = output;
    responseObj.repository = responseObj.repoLink;
    return responseObj;
  }
}

module.exports = AlertService;
