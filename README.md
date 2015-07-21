# React Tinyscrollbar

A React component of [Tinyscrollbar](http://baijs.com/tinyscrollbar/).

## Overview

React Tinyscrollbar depends on [React](https://facebook.github.io/react/) and [jQuery](https://jquery.com/).

## Getting Started

Make sure [Node.js](https://nodejs.org/) is installed properly.

```
npm install react-tinyscrollbar --save-dev
```

## Example

For example, if you are building a React component as follows.

```javascript
var React = require("react");

var Example = React.createClass({
    render: function() {
        return (
            <div>{ "Some content" }</div>
        );
    }
});

React.render(<Example />, document.getElementById("example"));
```

Adding a scrollbar to the component is easy by using React Tinyscrollbar.

```javascript

require("jquery");

var React = require("react");
var ReactTinyscrollbar = require("react-tinyscrollbar");

var Example = React.createClass({
    render: function() {
        return (
            <ReactTinyscrollbar height={ 300 }>
                <div>{ "Some content that needs scrollbar" }</div>
            </ReactTinyscrollbar>
        );
    }
});

React.render(<Example />, document.getElementById("example"));
```

1. Wrap the component with React Tinyscrollbar.
2. Scrollbar appears when the content exceed the given height prop. Otherwise, the content remains its own height.
3. Since Tinyscrollbar depends on [jQuery](http://jquery.com/), make sure it is included before using React Tinyscrollbar.

## Development

- Use ` npm start ` for watching files and developing. Open ` http://localhost:8080 ` to see an example page.
- Use ` npm run build ` for production.

## Contribute

Pull requests are welcome :)

## License

MIT
