var React = require('react');

module.exports = React.createClass({
  render: function() {
    var baseProps = {
      {% attrs %},
      className: '{% className %}',
      dangerouslySetInnerHTML: {
        __html: {% html %},
      }
    };
    var props = Object.assign({}, baseProps, this.props);
    return React.createElement('svg', props);
  },
});
