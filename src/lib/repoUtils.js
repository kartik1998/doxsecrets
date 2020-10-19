const shell = require('shelljs');

const checkRepoLink = (repoLink) => {
  const { stdout } = shell.exec(`curl -I -s -L ${repoLink} | grep HTTP`, { silent: true });
  return stdout.split(' ')[1] === '200';
};

module.exports = { checkRepoLink };
