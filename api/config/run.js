#!/usr/bin/env node

let current_path = process.cwd();

require('runkoa')(current_path + '/config/koa.js')