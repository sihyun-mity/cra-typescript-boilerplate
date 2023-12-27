// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{css,scss,html,json}': 'prettier --write',
};
