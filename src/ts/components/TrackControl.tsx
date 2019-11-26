import * as React from "react";
import {indexProps} from "./PropTypes";

export class TrackControl extends React.Component<indexProps> {

    static position = {
        left: 3,
        top: 86,
        xLeftGap : 4,
        xTopGap : 0.63,
        topGap : -13.05
    };

    render() {
        const divStyle = {
            left: TrackControl.position.left + this.props.xIndex * TrackControl.position.xLeftGap + "%",
            top: TrackControl.position.top + this.props.yIndex * TrackControl.position.topGap - this.props.xIndex * TrackControl.position.xTopGap + "%"
        };

        return (
            <div className="track-control" style={divStyle}>
                <input id={"track-" + this.props.yIndex + "-" + "volume"} type="range" className="input-knob" data-diameter="8" data-src="./img/knob_1.png"
                       data-sprites="100"/>
            </div>
        );
    }
}