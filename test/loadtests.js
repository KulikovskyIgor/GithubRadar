'use strict';

require('babel-polyfill');
require('core-js/fn/object/assign');
require('isomorphic-fetch');

// Add support for all files in the test directory
const testsContext = require.context('.', true, /.js$/);
testsContext.keys().forEach(testsContext);
