import React from 'react';
import PropTypes from "prop-types";
import {Note} from "./Note";

export class Notes extends React.Component {
    static propTypes = {
        xSize: PropTypes.number,
        ySize: PropTypes.number
    };

    render() {
        const noteArray = [];

        for (let i = 0; i < this.props.ySize; i++) {
            for (let j = 0; j < this.props.xSize; j++) {
                let index = i * this.props.xSize + j;
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