module.export = {
  linters: {
    '**/*.+(js|md|ts|css|graphql|yml|yaml|json)': [
      'eslint --fix',
      'prettier --write',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
