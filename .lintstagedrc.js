// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const prettier = 'prettier --write';
const eslint = 'eslint --fix';

module.exports = {
  '**/!(*.test).{js,jsx,ts,tsx}': [prettier, eslint],
  '**/*.{css,scss,json,html}': prettier,
};
