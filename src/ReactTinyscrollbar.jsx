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
import $ from "jquery";
import "tinyscrollbar";

class ReactTinyscrollbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasScrollbar: true,

            style: {
                tinyscrollbar: {
                    position        : "relative",
                    userSelect      : "none"
                },

                viewport: {
                    position        : "relative",
                    height          : "100%",
                    overflow        : "hidden"
                },

                overview: {
                    position        : "absolute",
                    top             : "0",
                    left            : "0",
                    width           : "100%",
                    transition      : "top .2s ease"
                },

                scrollbar: {
                    position        : "absolute",
                    top             : "0",
                    right           : "5px",
                    width           : "5px"
                },

                track: {
                    position        : "relative",
                    width           : "100%",
                    borderRadius    : "5px",
                    opacity         : ".5",
                    backgroundColor : "gray",
                    cursor          : "pointer"
                },

                thumb: {
                    position        : "absolute",
                    top             : "0",
                    left            : "0",
                    width           : "100%",
                    borderRadius    : "5px",
                    opacity         : ".8",
                    backgroundColor : "#555",
                    transition      : "top .2s ease"
                }
            }
        };
    }

    componentWillReceiveProps() {
        this.setState({ hasScrollbar: true });
    }

    componentDidMount() {
        this.setState({ hasScrollbar: true });
    }

    componentDidUpdate() {
        if (this.state.hasScrollbar) {
            let overview = React.findDOMNode(this.refs.overview);

            if (overview.offsetHeight <= this.props.height) {
                this.setState({ hasScrollbar: false });
            }
        }

        let $scrollbar = $(React.findDOMNode(this.refs.tinyscrollbar));
        let tinyscrollbar = $scrollbar.data("plugin_tinyscrollbar");

        if (tinyscrollbar) {
            tinyscrollbar.update("relative");
        } else {
            $scrollbar.tinyscrollbar();
        }
    }

    render() {
        if (this.state.hasScrollbar) {
            this.state.style.tinyscrollbar.height = this.props.height;
            this.state.style.overview.position = "absolute";
            this.state.style.scrollbar.display = "block";
        } else {
            this.state.style.tinyscrollbar.height = "auto !important";
            this.state.style.overview.position = "relative";
            this.state.style.scrollbar.display = "none";
        }

        return (
            <div className="tinyscrollbar" ref="tinyscrollbar" style={ this.state.style.tinyscrollbar }>
                <div className="viewport" style={ this.state.style.viewport }>
                    <div className="overview" ref="overview" style={ this.state.style.overview }>{ this.props.children }</div>
                </div>
                <div className="scrollbar" style={ this.state.style.scrollbar }>
                    <div className="track" style={ this.state.style.track }>
                        <div className="thumb" style={ this.state.style.thumb }></div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactTinyscrollbar.propTypes = {
    height: React.PropTypes.number.isRequired
};

export default ReactTinyscrollbar;
