import * as React from 'react';
import {Note} from "./Note";
import {sizeProps} from "./PropTypes";
import {TrackControl} from "./TrackControl";

export class Notes extends React.Component<sizeProps> {

    render() {
        const noteArray = [];

        for (let i = 0; i < this.props.ySize; i++) {
            for (let j = 0; j < this.props.xSize; j++) {
                let index = i * (this.props.xSize) + j;
                noteArray.push(<Note key={index} xIndex={j} yIndex={i} >C#3</Note>)
            }
        }

        return (
            <div id="notes">
                {noteArray}
            </div>
        );
    }
}