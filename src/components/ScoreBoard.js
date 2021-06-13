import React from "react";
import { useState, useEffect } from "react";
import BeanBag from "./BeanBag";
import "./scoreBoard.css";

const Scoreboard = (props) => {
    const [gameState, setGameState] = useState({});

    const getGameState = async () => {
        const response = await fetch("https://dslusser.com:5000/api/games/", {
            method: "GET",
        }).then((response) => response.json());
        const currentGame = [...response].sort(
            (game) => game.game_id === props.selectedGameId
        )[0];
        setGameState(currentGame);
    };

    useEffect(() => {
        setInterval(function () {
            getGameState();
        }, 500);
    }, [props.selectedGameId]);

    const { teamA, teamB, scoreA, scoreB, display_scoreA, display_scoreB } =
        gameState;

    let redBeanBags = [];
    for (let i = 0; i < display_scoreA; i++) {
        redBeanBags.push(<BeanBag color='red' key={"red" + i} />);
    }

    let blueBeanBags = [];
    for (let i = 0; i < display_scoreB; i++) {
        blueBeanBags.push(<BeanBag color='blue' key={"blue" + i} />);
    }

    return (
        <div className='score-board'>
            <div className='main-grid'>
                <div className='top-row right-border'></div>
                <div className='top-row right-border grid-text'>
                    {teamA || "loading..."}
                </div>
                <div className='top-row grid-text'>{teamB || "loading..."}</div>
                <div className='bot-row right-border  grid-text'>Game</div>
                <div className='bot-row right-border score'>
                    {isNaN(scoreA + display_scoreA)
                        ? "0"
                        : scoreA + display_scoreA}
                </div>
                <div className='bot-row score'>
                    {isNaN(scoreB + display_scoreB)
                        ? "0"
                        : scoreB + display_scoreB}
                </div>
            </div>
            <div className='spacer'></div>
            <div className='boards'>
                <div className='left'></div>
                <div className='mid'>
                    <div className='top-half'>
                        <div className='circle'></div>
                    </div>
                    <div className='bottom-half'>{redBeanBags}</div>
                </div>
                <div className='right'>
                    <div className='top-half'>
                        <div className='circle'></div>
                    </div>
                    <div className='bottom-half'>{blueBeanBags}</div>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
