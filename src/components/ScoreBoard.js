import React from "react";
import { useState, useEffect } from "react";
import "./scoreBoard.css";

const Scoreboard = (props) => {
    const [gameState, setGameState] = useState({});

    const getGameState = async () => {
        const response = await fetch("https://dslusser.com:5000/api/games/", {
            method: "GET",
        }).then((response) => response.json());
        // console.log(response);
        const currentGame = [...response].sort(
            (game) => game.game_id === props.selectedGameId
        )[0];
        setGameState(currentGame);
    };

    useEffect(() => {
        getGameState();
    }, [props.selectedGameId]);

    const { teamA, teamB, scoreA, scoreB, display_scoreA, display_scoreB } =
        gameState;

    return (
        <div className='score-board'>
            <div className='main-grid'>
                <div className='top-row right-border'></div>
                <div className='top-row right-border grid-text'>{teamA}</div>
                <div className='top-row grid-text'>{teamB}</div>
                <div className='bot-row right-border  grid-text'>Game</div>
                <div className='bot-row right-border score'>
                    {scoreA + display_scoreA}
                </div>
                <div className='bot-row score'>{scoreB + display_scoreB}</div>
            </div>
            <div className='spacer'></div>
        </div>
    );
};

export default Scoreboard;
