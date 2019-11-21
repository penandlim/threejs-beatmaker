import * as React from 'react';
import {Notes} from "./Notes";
import {Canvas} from "./Canvas";
import {PlayControl} from "./PlayControl";
import {sizeProps} from "./PropTypes";

export class App extends React.Component<sizeProps> {
    constructor(props: sizeProps) {
        super(props);
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