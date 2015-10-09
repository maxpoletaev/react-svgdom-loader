var wrapperRegex = /<svg([^>]*)>(.*)<\/svg>/i;

function parseContent(input) {
  if (input.indexOf('\n')) {
    input = input.replace(/\s+/g, ' ');
  }

  var match = input.match(wrapperRegex);

  var attrs = parseAttrs(match[1], {
    ignore: ['id', 'version', 'xml']
  });

  return {
    attrs: attrs,
    content: match[2]
  };
}

function parseAttrs(strAttrs, options) {
  options || (options = {});

  var attrs = {};
  var inValue = false;
  var attrName = '';
  var buffer = '';

  for (var i in strAttrs) {
    var char = strAttrs[i];

    if (char === ' ' && !inValue) {
      continue;
    }

    if (char === '=') {
      if (!inValue) {
        attrName = buffer;
        buffer = '';
      }
      continue;
    }

    if (char === '"') {
      if (inValue) {
        attrs[attrName] = buffer;
        inValue = false;
        buffer = '';
      } else {
        inValue = true;
      }
      continue;
    }

    buffer += char;
  }

  if (options.ignore) {
    var _attrs = attrs;
    for (key in attrs) {
      if (~options.ignore.indexOf(key)) {
        delete _attrs[key];
      }
    }
    return _attrs;
  }

  return attrs;
}

function renderAttrs(attrs) {
  var result = '';
  for (key in attrs) {
    var value = attrs[key];
    result += "'" + key + "': '" + value + "',\n";
  }
  return result.slice(0, -2);
}

function template(input, data) {
  for (var key in data) {
    input = input.replace('{% ' + key + ' %}', data[key]);
  }
  return input;
}

module.exports = {
  parseContent: parseContent,
  renderAttrs: renderAttrs,
  parseAttrs: parseAttrs,
  template: template
};
