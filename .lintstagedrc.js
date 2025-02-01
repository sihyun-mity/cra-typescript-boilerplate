const eslint = 'eslint --fix';
const prettier = 'prettier --write';

module.exports = {
  '**/!(*.test).{js,jsx,ts,tsx}': [eslint, prettier],
  '**/*.{css,scss,json,html}': prettier,
};
