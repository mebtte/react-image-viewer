module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'no-return-assign': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'react/no-multi-comp': 0,
  },
  globals: {
    document: true,
  },
};
