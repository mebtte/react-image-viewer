/* eslint-disable global-require */
import { configure } from '@storybook/react';

function loadStories() {
  require('./index.js');
}

configure(loadStories, module);
