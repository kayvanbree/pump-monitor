/**
 * This patches Angular so we can use crypto and stream, used by the Solid framework libraries.
 */

const file1 = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';
const file2 = 'node_modules/@angular-devkit/build-angular/src/webpack/configs/browser.js';

const fs = require('fs-extra');

function doReplace(f, cb) {
  fs.readFile(f, 'utf8', function (err,data) {
    if (err) {
      return cb(false);
    }
    var result = data.replace(/node: false/g, 'node: {crypto: true, stream: true}');
    fs.writeFile(f, result, 'utf8', function (err) {
      if (err) {
        console.log(err);
        return cb(false);
      } else {
        console.log('\x1b[36mCan\'t resolve \'stream\'\x1b[0m', "->", '\x1b[32mPROBLEM FIXED!\x1b[0m');
        return cb(true);
      }
    });
  });
}


doReplace(file1, function(success) {
  if (!success) {
    doReplace(file2, function(success) {
      if (!success) {
        console.error("ERROR: couldn't patch the CipherBase constructor problem with stream.Transform.")
      }
    });
  }
});
