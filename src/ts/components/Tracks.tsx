import * as React from "react";
import {indexProps, sizeProps} from "./PropTypes";
import {TrackControl} from "./TrackControl";

export class Tracks extends React.Component<sizeProps> {
    render() {
        const trackArray = [];

        for (let i = 0; i < this.props.ySize; i++) {
            trackArray.push(<TrackControl key={i} xIndex={0} yIndex={i} />)
        }

        return (
            <div className="tracks">
                {trackArray}
            </div>
        );
    }
}