import React, { useState } from 'react';
import './Player.css';

export default function() {
    const [isVisible, setIsVisible] = useState(false);

    // TODO: make player visibility better
    function toggleVisibility() {
        setIsVisible(isVisible => !isVisible);
    }
    
    return (
        <div className="card player fixed-bottom text-center ">
            <div 
                className="card-header"
                onClick={ toggleVisibility }>
                Reveal
            </div>

            <div className="card-body">
                <h2 className="card-title">Player</h2>
                {/* TODO: Add Play button, Fullscreen button*/}

                    <button type="button" className="btn btn-secondary btn-large">Back 10s</button>
                    <button type="button" className="btn btn-primary btn-large">Play</button>
                    <button type="button" className="btn btn-secondary btn-large">Fullscreen</button>
                    <button type="button" className="btn btn-secondary btn-large">Forward 10s</button>

            </div>
        </div>
    );
}