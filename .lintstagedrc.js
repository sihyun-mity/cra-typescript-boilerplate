// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

module.exports = {
  '**/*.{js,jsx,ts,tsx,html}': ['prettier --write', 'eslint --fix'],
  '**/*.{css,scss,json}': 'prettier --write',
};
