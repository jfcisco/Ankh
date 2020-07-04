import React, { useState } from 'react';
import { play, toggleFullScreen } from '../../Services/PlayerService';
import PlayerControls from './PlayerControls';
import PlayerHeader from './PlayerHeader';
import './Player.css';

export default function(props) {
    const [isVisible, setIsVisible] = useState(false);

    function togglePlayerVisibility(e) {
        e.preventDefault();
        setIsVisible((isVisible) => setIsVisible(!isVisible));
    }

    function handlePlayButton() {
        play();
    }
    
    function handleFullScreenButton() {
        toggleFullScreen();
    }

    // CSS classes for the Player component
    let playerClasses = "card player text-center ";
    playerClasses += !isVisible ? "hidden" : "";

    // CSS classes for the Player Header Controls component
    let headerControlsClasses = "btn btn-primary header__control ";
    headerControlsClasses += isVisible ? "header__control--hidden" : "";

    return (
        <div className={ playerClasses }>
            <PlayerHeader 
                classes={headerControlsClasses}
                isVisible={ isVisible }
                togglePlayerVisibility={ togglePlayerVisibility }
                handlePlayButton={ handlePlayButton } 
                currentAnime={ props.currentAnime } />

            <PlayerControls 
                handlePlayButton={ handlePlayButton }
                handleFullScreenButton={ handleFullScreenButton } 
                playerVisible={ isVisible } 
                setCurrentEpisode={ props.setCurrentEpisode } />
        </div>
    );
}