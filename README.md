# react-svgdom-loader [![][build]][build-link]

[build]: https://travis-ci.org/zenwalker/react-svgdom-loader.png?branch=master
[build-link]: https://travis-ci.org/zenwalker/react-svgdom-loader


> Import SVG icons as ReactDOM element!

## Installation

```
npm i --save react-svgdom-loader svgo-loader
```

## Usage

Add loader into `webpack.config.js`:

```js
loaders: [{
  test: /\.svg$/,
  loaders: ['react-svgdom', 'svgo']
}]
```

Then use SVG in component:

```js
import MyIcon from '../icons/my-icon.svg';
import React  from 'react';

export default React.createClass({
  render() {
    return (
      <div class="my-component">
        Here is icon: {MyIcon}
      </div>
    );
  }
});
```

## Query parameters

### className

default: `svg-icon`

## License

Licensed under the MIT license.
