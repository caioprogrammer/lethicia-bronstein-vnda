require('dotenv').config()
const execSync = require('child_process').execSync
const package = require('../package.json');

execSync(`cd ../build && gulp deploy --store=${package.name} --liquid=${package.config.liquid} --stgtoken=${process.env.STGTOKEN} --prodtoken=${process.env.PRODTOKEN} --preview=${process.env.PREVIEW || ''} --agent=${process.env.AGENT} --codev1=${package.config.codev1}`, { stdio: [0, 1, 2] })
