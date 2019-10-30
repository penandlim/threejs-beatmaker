import React from 'react';
import PropTypes from "prop-types";

export class Note extends React.Component {
    static propTypes = {
        xIndex: PropTypes.number,
        yIndex: PropTypes.number
    };

    static position = {
        left: 21,
        top: 86,
        xLeftGap : 4,
        xTopGap : 0.63,
        topGap : -13.05
    };

    render() {
        const divStyle = {
            left: Note.position.left + this.props.xIndex * Note.position.xLeftGap + "%",
            top: Note.position.top + this.props.yIndex * Note.position.topGap - this.props.xIndex * Note.position.xTopGap + "%"
        };

        return (
            <div className="note" data-x-index={this.props.xIndex} data-y-index={this.props.yIndex} style={divStyle}>C#3</div>
        );
    }
}