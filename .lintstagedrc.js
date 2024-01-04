// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const prettier = 'prettier --write';
const eslint = 'eslint --fix';

module.exports = {
  '**/!(*.test).{js,jsx,ts,tsx,html}': [prettier, eslint],
  '**/*.{css,scss,json}': prettier,
};
