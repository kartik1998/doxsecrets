module.exports = {
  default: {
    GITHUB_BASE_URL: 'https://api.github.com/',
    GITHUB_BASE_URL_USERS: 'https://api.github.com/users/',
    GIT_LEAKS_CHECK: 'docker run -d --rm --name=gitleaks zricethezav/gitleaks -v -r ',
    TRUFFLE_HOG_CHEK: 'truffleHog --regex --json --entropy=False',
    TEST_URL: 'https://github.com/jjacob27/terraform-aws-harboroneks',
    PORT: 5000,
    KARTIK_SLACK_URL: '***REMOVED***',
    NO_EXPOSED_CREDENTIALS: '*No exposed credentials found*  :white_check_mark:',
    REPO_NOT_SCANNED: '*Some error occurred, Either user/repository doesn\'t exist or it wasn\'t scanned properly.* :gear:',
  },
};
