const axios = require('axios');
const { GITHUB_BASE_URL_USERS, GIT_LEAKS_CHECK } = require('nconf').get();
const { fetchJson } = require('@lib/parseString');
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
      const { stdout, stderr, code } = shell.exec(`${GIT_LEAKS_CHECK}${res.html_url}`, { silent: true });
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
      console.log(stderr);
    });
    responseObj.output = output;
    responseObj.leakCode = leakCode;
    return responseObj;
  }

  static async alertRepository(repoLink) {
    const responseObj = {};
    const output = [];
    const { stdout, stderr, code } = shell.exec(`${GIT_LEAKS_CHECK}${repoLink}`, { silent: true });
    if (code === 1) {
      output.push(fetchJson(stdout));
    }
    console.log(stderr);
    responseObj.info = output;
    responseObj.leakCode = code;
    responseObj.repository = responseObj.repoLink;
    return responseObj;
  }
}

module.exports = AlertService;
