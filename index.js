var fs = require('fs');
var utils = require('loader-utils');
var extend = require('util')._extend;
var loader = fs.readFileSync(__dirname + '/loader.js', 'utf-8');

function tmpl(template, data) {
  for (var key in data) {
    template = template.replace('{% ' + key + ' %}', data[key]);
  }
  return template;
}

module.exports = function(content) {
  var data = extend({
    html: JSON.stringify(content),
    className: 'svg-icon',
    containerTag: 'i'
  },
  utils.parseQuery(this.query));
  return tmpl(loader, data);
};
