const axios = require('axios');
const AlertService = require('@alert/service');
const { KARTIK_SLACK_URL, NO_EXPOSED_CREDENTIALS, REPO_NOT_SCANNED } = require('nconf').get();

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
      let reply = null;
      reply = isRepository ? this.blockResponse(info[0]) : this.blockResponse(info[0].info);
      await axios.post(KARTIK_SLACK_URL, {
        blocks: reply,
      });
    } else {
      await axios.post(KARTIK_SLACK_URL, { text: REPO_NOT_SCANNED });
    }
  }

  static blockResponse(info) {
    const offenceList = [];
    const offenders = [];
    info.forEach((item) => {
      const {
        offender, line, repo, author, email, file, date,
      } = item;
      if (!offenders.includes(offender)) {
        offenders.push(offender);
        offenceList.push(this.makeBlock(`${offender}\n${line}\n${repo}\n${author}\n${email}\n${file}\n${date}`));
      }
    });
    return offenceList;
  }

  static makeBlock(text) {
    return {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text,
      },
    };
  }
}

module.exports = BotService;
