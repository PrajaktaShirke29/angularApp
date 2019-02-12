var path = require('path');  // Load the path module. This is for reading files / directories 

// The following statement is used to resolve 
// the root path so that files can be read from root
// the root is represented using __dirname
var approot = path.resolve(__dirname, '..');

// function that accepts the file-path as argument
// and resolve it so that the file can be loaded in
// server application
function rootpath(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [approot].concat(args));
}

exports.root = rootpath;