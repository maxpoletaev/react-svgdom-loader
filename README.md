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
import myIcon from '../icons/my-icon.svg';
import React, { Component }  from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div className="my-component">
        Here is icon: {myIcon}
      </div>
    );
  }
}
```

## Query parameters

### className

default: `svg-icon`

## License

Licensed under the MIT license.
