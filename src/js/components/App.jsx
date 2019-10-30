import React from 'react';
import {Notes} from "./Notes";
import {Canvas} from "./Canvas";
import PropTypes from "prop-types";
import {PlayControl} from "./PlayControl";

export class App extends React.Component {
    static propTypes = {
        xSize: PropTypes.number,
        ySize: PropTypes.number
    };

    constructor() {
        super();
    }
    render() {
        return (
            <div id="react">
                <Canvas />
                <div className="overlay no-click">
                    <Notes xSize={this.props.xSize} ySize={this.props.ySize} />
                </div>
                <div className="overlay">
                    <PlayControl />
                </div>
            </div>
        );
    }
}