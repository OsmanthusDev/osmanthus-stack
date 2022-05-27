#!/usr/bin/env node
import app from './core/application.js';
import createAppServer from './app.js';


function main() {
  createAppServer(app);
}

main();
