var fs = require('fs');
var utils = require('loader-utils');
var extend = require('util')._extend;
var tools = require('./tools');

var template = fs.readFileSync(__dirname + '/svg-icon.js', 'utf-8');
var wrapperRegex = /<svg([^>]*)>(.*)<\/svg>/i;

module.exports = function(content) {
  this.cacheable();

  if (content.indexOf('\n')) {
    content = content.replace(/\s+/g, ' ');
  }

  var match = input.match(wrapperRegex);
  var svg = match[2];

  var ignoreAttrs = ['id'];
  if (this.query.ignoreAttrs) {
    ignoreAttrs = this.query.ignoreAttrs.split(',');
  }

  var attrs = parseAttrs(match[1], {
    ignore: ignoreAttrs
  });

  var data = extend({
    attrs: tools.renderAttrs(attrs),
    className: 'svg-icon'
  },
  utils.parseQuery(this.query));

  data['html'] = JSON.stringify(svg);
  return tools.template(template, data);
};
