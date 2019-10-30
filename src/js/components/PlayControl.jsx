import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

export class PlayControl extends React.Component {

    render() {
        return (
            <div className="play-control">
                <a href="#" id="playButton" className="control repos-center show-control"><FontAwesomeIcon icon={faPlay} size="2x" /></a>
                <a href="#" id="stopButton" className="control repos-center"><FontAwesomeIcon icon={faStop} size="2x" /></a>
            </div>
        );
    }
}