require('dotenv').config()
const execSync = require('child_process').execSync
const package = require('../package.json');

execSync(`cd ../build && gulp sync --store=${package.name} --liquid=${package.config.liquid} --debug=${package.config.debug} --stgtoken=${process.env.STGTOKEN} --preview=${process.env.PREVIEW || ''}`, { stdio: [0, 1, 2] })
