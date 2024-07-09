const { exec } = require('child_process');
const package = require('../package.json');

async function checkUpdate() {
  try {
    const { stdout, stderr } = await executeCommand(`npm view @spany/atlas.js version`);

    if (stderr) {
      throw new Error(stderr);
    }

    const latestVersion = stdout.trim();
    
    if (latestVersion !== package.version) {
      console.log(`\x1b[34m@spany/atlas.js is out of date!\x1b[0m`);
      console.log(`Remember to use \x1b[32m"npm update @spany/atlas.js"\x1b[0m ( ${package.version} -> ${latestVersion} )`);
    } else {
      console.log(`\x1b[32m@spany/atlas.js is up to date.\x1b[0m`);
    }
  } catch (error) {
    console.error(`Error checking for updates: ${error.message}`);
  }
}

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

module.exports = { checkUpdate };
