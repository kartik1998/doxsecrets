module.exports = {
  default: {
    GITHUB_BASE_URL: 'https://api.github.com/',
    GITHUB_BASE_URL_USERS: 'https://api.github.com/users/',
    GIT_LEAKS_CHECK: 'docker run --rm --name=gitleaks zricethezav/gitleaks -v -r ',
    TEST_URL: 'https://github.com/jjacob27/terraform-aws-harboroneks',
    PORT: 5000,
  },
  ignoreDisplay: ['TERM_PROGRAM', 'NODE', 'INIT_CWD', 'TERM', 'SHELL', 'TMPDIR', 'TERM_PROGRAM_VERSION', 'TERM_SESSION_ID', 'ZSH', 'SSH_AUTH_SOCK', '__CF_USER_TEXT_ENCODING', 'PAGER', 'LSCOLORS', 'PATH', 'P9K_SSH', 'P9K_TTY', 'ITERM_PROFILE', 'XPC_FLAGS', 'XPC_SERVICE_NAME', 'SHLVL', 'HOME', 'COLORFGBG', 'LC_TERMINAL_VERSION', 'ITERM_SESSION_ID', 'LESS', 'LOGNAME', 'LC_CTYPE', 'LC_TERMINAL', 'COLORTERM'],
};
