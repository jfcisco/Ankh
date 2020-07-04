import React from 'react';

export default function(props) {
    return (
        <div 
        onClick={ props.togglePlayerVisibility }
            className="card-header header">

            <h2 className="h5 header__title">
                { props.currentAnime
                ? props.currentAnime.name
                : "Choose an anime!"}
            </h2>

            <button 
                type="button" 
                className={props.classes + " header__control--back"}>
                    Back
            </button>

            <button 
                type="button" 
                className={props.classes}
                onClick={props.handlePlayButton}>
                    Play
            </button>
        </div>
    );
}