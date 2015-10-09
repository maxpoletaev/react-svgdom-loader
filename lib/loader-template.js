module.exports = require('react').createElement('svg', {
  'className': '{% className %}',
  {% attrs %},

  dangerouslySetInnerHTML: {
    __html: {% html %}
  }
});
