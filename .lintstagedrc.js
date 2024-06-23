// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const eslint = 'eslint --fix';
const prettier = 'prettier --write';

module.exports = {
  '**/!(*.test).{js,jsx,ts,tsx}': [eslint, prettier],
  '**/*.{css,scss,json,html}': prettier,
};
