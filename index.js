var fs = require('fs');
var loader = fs.readFileSync(__dirname + '/loader.js', 'utf-8');

module.exports = function(source) {
  return loader.replace('{% html %}', JSON.stringify(source));
};
