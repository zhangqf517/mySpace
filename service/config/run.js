#!/usr/bin/env node

var current_path = process.cwd();

require('runkoa')(current_path + '/config/koa.js')