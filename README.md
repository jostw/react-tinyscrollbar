# React Tinyscrollbar

A React component of [Tinyscrollbar](http://baijs.com/tinyscrollbar/).

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

- Wrap the component with React Tinyscrollbar.
- Scrollbar appears when the content exceed the given height prop. Otherwise, the content remains its own height.
- Since Tinyscrollbar depends on [jQuery](http://jquery.com/), make sure it is included before using React Tinyscrollbar.
