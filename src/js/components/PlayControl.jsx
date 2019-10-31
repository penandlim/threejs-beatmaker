import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

export class PlayControl extends React.Component {

    render() {

        const stopButton = <FontAwesomeIcon icon={faStop} className="w-5vmin h-5vmin" />;
        const stopButtonPath = stopButton.props.icon.icon[4];

        const playButton = <FontAwesomeIcon icon={faPlay} className="w-5vmin h-5vmin" />;
        const playButtonPath = playButton.props.icon.icon[4];

        return (
            <div className="play-control">
                <a href="#" id="controlButton" className="control repos-center show-control">
                    <svg id="controlButtonSVG" aria-hidden="true" focusable="false" data-prefix="fas"
                         className="svg-inline--fa w-5vmin h-5vmin" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512">
                        <path id="playPath" fill="currentColor" d={playButtonPath}/>
                        <path id="stopPath" fill="currentColor" d={stopButtonPath}/>
                    </svg>
                </a>
            </div>
        );
    }
}