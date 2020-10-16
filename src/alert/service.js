const axios = require('axios');
const { GITHUB_BASE_URL_USERS } = require('nconf').get();

class AlertService {
  static checkUser() {
    return 'Aok';
  }

  static async getUserRepos(userName) {
    const response = await axios.get(`${GITHUB_BASE_URL_USERS + userName}/repos`);
    return response.data.map((res) => ({
      url: res.html_url,
      collaborators_url: res.collaborators_url,
      teams_url: res.teams_url,
      created_at: res.created_at,
      updated_at: res.updated_at,
      pushed_at: res.pushed_at,
    }));
  }
}

module.exports = AlertService;
