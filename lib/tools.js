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

function fixAttrName(key) {
  var colon = key.indexOf(':');

  if (~colon) {
    var buffer = key.split('');
    buffer[colon+1] = buffer[colon+1].toUpperCase();
    delete buffer[colon];
    key = buffer.join('');
  }

  return key;
}

function renderAttrs(attrs) {
  var result = '';
  for (key in attrs) {
    var value = attrs[key];
    result += "'" + fixAttrName(key) + "': '" + value + "',\n";
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
  renderAttrs: renderAttrs,
  parseAttrs: parseAttrs,
  template: template
};
