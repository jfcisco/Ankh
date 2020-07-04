import React from 'react';

export default function(props) {
    const { handlePlayButton, handleFullScreenButton } = props;

    const playerControlClasses = "card-body player__controls" + (!props.playerVisible ? " player__controls--hidden" : " player__controls--visible");
    return (
        <div className={ playerControlClasses }>
            <input 
                className="player__control--episode"
                type="text" 
                onChange={ (e) => props.setCurrentEpisode(e.target.value) }
                inputmode="numeric" 
                pattern="[0-9]*" />

            <button 
                type="button" 
                className="btn btn-secondary player__control">
                Back 10s
            </button>
            <button 
                type="button" 
                className="btn btn-primary player__control"
                onClick={handlePlayButton}>
                    Play
                </button>
            <button 
                type="button" 
                className="btn btn-secondary player__control"
                onClick={handleFullScreenButton}>
                    Fullscreen
                </button>
        </div>
    );
}