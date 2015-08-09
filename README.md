# react-svgdom-loader

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
