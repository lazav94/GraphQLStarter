module.export = {
  linters: {
    '**/*.+(js|md|ts|css|graphql|yml|yaml|json)': [
      'eslint --fix',
      'prettier --write',
      'npm run oo',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
