async function checkUpdate() {
  function getPackageVersion() {
    return new Promise((resolve, reject) => {
      exec(`npm view @spany/atlas.js version`, (error, stdout, stderr) => {
        if (error) return { error };
        if (stderr) return { error: stderr };
        resolve({ version: stdout.trim(), error: false });
      });
    });
  }

  if (version.error) return;

  if (version.version) {
    if (version.version !== package.version) {
      console.log(
        `\x1b[34m@spany/atlas.js is out of date!\x1b[0m Remember to use \x1b[32m"npm update @spany/atlas.js" ( ${package.version} -> ${version.version} )\x1b[0m in powershell to take advantage of the new features.`
      );
    } else return;
  } else return;
}
