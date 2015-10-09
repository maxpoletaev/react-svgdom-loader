var fs = require('fs');
var utils = require('loader-utils');
var extend = require('util')._extend;
var tools = require('./tools');
var template = fs.readFileSync(__dirname + '/svg-icon.js', 'utf-8');

module.exports = function(content) {
  this.cacheable();

  var parsed = tools.parseContent(content);
  var svg = parsed.content;

  var data = extend({
    attrs: tools.renderAttrs(parsed.attrs),
    className: 'svg-icon'
  },
  utils.parseQuery(this.query));

  data['html'] = JSON.stringify(svg);
  return tools.template(template, data);
};
