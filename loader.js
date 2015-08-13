module.exports = require('react').createElement('{% containerTag %}', {
  className: '{% className %}',
  dangerouslySetInnerHTML: {
    __html: {% html %}
  }
});
