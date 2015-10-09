var fs = require('fs');
var utils = require('loader-utils');
var extend = require('util')._extend;
var tools = require('./tools');
var loader = fs.readFileSync(__dirname + '/loader-template.js', 'utf-8');

module.exports = function(content) {
  this.cacheable();

  var parsed = tools.parseContent(content);
  var attrs = tools.renderAttrs(parsed.attrs);
  var svg = parsed.content;

  var data = extend({
    className: 'svg-icon',
    attrs: attrs
  },
  utils.parseQuery(this.query));

  data['html'] = JSON.stringify(svg);
  return tools.template(loader, data);
};
