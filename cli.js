#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gulpNpmRelease = require('./');

var cli = meow({
  help: [
    'Usage',
    '  gulp-npm-release <input>',
    '',
    'Example',
    '  gulp-npm-release Unicorn'
  ].join('\n')
});

gulpNpmRelease(cli.input[0]);
