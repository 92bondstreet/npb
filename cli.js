#!/usr/bin/env node
'use strict';
var meow = require('meow');
var <%= safeSlugname %> = require('./index');

var cli = meow({
  'help': [
    'Usage',
    '  <%= slugname %> <input>',
    '',
    'Example',
    '  <%= slugname %> 92 Bond Street'
  ].join('\n')
});

<%= safeSlugname %>(cli.input[0]);
