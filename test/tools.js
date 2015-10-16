var assert = require('assert');
var tools = require('../lib/tools');

describe('tools', function() {
  it('parseAttrs()', function() {
    var strAttrs = [
      'xmlns:xlink="http://www.w3.org/1999/xlink"',
      'viewBox="0 0 19 21.2"',
      'x="0px"', 'y="0px"',
      'version="1.1"',
      'id="Layer_1"'
    ].join(' ');

    var objAttrs = {
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 19 21.2',
      x: '0px', y: '0px'
    };

    var result = tools.parseAttrs(strAttrs, {
      ignore: ['id', 'version']
    });

    assert.deepEqual(result, objAttrs);
  });

  it('renderAttrs()', function() {
    var objAttrs = {
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 19 21.2',
      x: '0px', y: '0px',
      version: '1.1',
      id: 'Layer_1'
    };

    var strAttrs = [
      "'xmlnsXlink': 'http://www.w3.org/1999/xlink'",
      "'viewBox': '0 0 19 21.2'",
      "'x': '0px'", "'y': '0px'",
      "'version': '1.1'",
      "'id': 'Layer_1'"
    ].join(',\n');

    assert.equal(tools.renderAttrs(objAttrs), strAttrs);
  });

  it('parseContent()', function() {
    var content = '<g>I\'am content</g>';
    var svg = '<svg viewBox="0 0 19 21.2" enable-background="new 0 0 19 21.2">' + content + '</svg>';
    assert.equal(tools.parseContent(svg).content, content);
  });
});
