/*
 * react-tinyscrollbar
 *
 * https://github.com/jostw/react-tinyscrollbar
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import React from "react";
import ReactTinyscrollbar from "../../dist/ReactTinyscrollbar";

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 10 };

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let lines = [];

        for (let i = 0; i < this.state.count; i++) {
            lines.push(<div key={ i } style={{ margin: "1em 0", padding: ".5em", opacity: "0.5", backgroundColor: "white" }}>{ i + 1 }</div>);
        }

        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <label htmlFor="input">Number of lines: </label>
                    <input type="text" id="input" ref="input" defaultValue={ this.state.count } />
                    <button>update</button>
                </form>
                <div style={{ marginTop: "1em", backgroundColor: "red" }}>
                    <ReactTinyscrollbar height={ 300 }>{ lines }</ReactTinyscrollbar>
                </div>
            </div>
        );
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({ count: React.findDOMNode(this.refs.input).value });
    }
}

React.render(<Example />, document.getElementById("app"));
