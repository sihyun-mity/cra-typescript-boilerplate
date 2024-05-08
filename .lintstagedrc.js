// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const compile = 'tsc-files --pretty --noEmit';
const eslint = 'eslint --fix';
const prettier = 'prettier --write';

module.exports = {
  '**/!(*.test).{js,jsx,ts,tsx}': [compile, eslint, prettier],
  '**/*.{css,scss,json,html}': prettier,
};
