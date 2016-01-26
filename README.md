# react-svgdom-loader [![][build]][build-link]

[build]: https://travis-ci.org/zenwalker/react-svgdom-loader.svg?branch=master
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
import React, { Component }  from 'react';
import MyIcon from '../icons/my-icon.svg';

class MyComponent extends Component {
  render() {
    return (
      <div className="my-component">
        <MyIcon className="my-icon" />
      </div>
    );
  }
}
```

## Query parameters

### className

default: `svg-icon`

### ignoreAttrs

Comma-separated list of attributes for ignoring.

default: `id`

## License

Licensed under the MIT license.
