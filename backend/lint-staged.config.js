module.export = {
  linters: {
    '**/*.+(js|md|ts|css|graphql|yml|yaml|json)': [
      'echo 11',
      'eslint --fix',
      'prettier --write',
      'echo oooo',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
