const axios = require('axios');
const AlertService = require('@alert/service');
const {
  KARTIK_SLACK_URL, NO_EXPOSED_CREDENTIALS, REPO_NOT_SCANNED, EXPOSED_CREDENTIALS_FOUND,
} = require('nconf').get();

class BotService {
  static async alertUserRepositories(userName) {
    const response = await AlertService.alertUserRepositories(userName);
    const { leakCode, info } = response;
    await this.alertSlack(false, leakCode, info);
    return response;
  }

  static async alertRepository(repoLink) {
    const response = await AlertService.alertRepository(repoLink);
    const { leakCode, info } = response;
    await this.alertSlack(true, leakCode, info);
    return response;
  }

  static async alertSlack(isRepository, leakCode, info) {
    if (leakCode === 0) {
      await axios.post(KARTIK_SLACK_URL, { text: NO_EXPOSED_CREDENTIALS });
    } else if (leakCode === 1) {
      const blocks = isRepository ? this.blockResponse(info[0]) : this.blockResponse(info[0].info);
      await axios.post(KARTIK_SLACK_URL, {
        text: EXPOSED_CREDENTIALS_FOUND,
        blocks,
      });
    } else {
      await axios.post(KARTIK_SLACK_URL, { text: REPO_NOT_SCANNED });
    }
  }

  static blockResponse(info) {
    const reasons = [];
    const leaks = [];
    info.forEach((item) => {
      const { reason, stringsFound } = item;
      if (!reasons.includes(reason)) {
        reasons.push(reason);
      }
      stringsFound.forEach((str) => {
        if (!leaks.includes(str)) {
          leaks.push(str);
        }
      });
    });
    return [this.makeBlock(reasons, 'Types'), this.makeBlock(leaks, 'Credentials')];
  }

  static makeBlock(input, type) {
    let output = '';
    input.forEach((str) => {
      output += `${str}, `;
    });
    return {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${type}*: ${output}`,
      },
    };
  }
}

module.exports = BotService;
