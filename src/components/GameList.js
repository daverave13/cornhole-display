import "./gameList.css";
import { useEffect, useState } from "react";

const GameList = (props) => {
    const [games, setGames] = useState([]);

    const getGames = () => {
        fetch("https://dslusser.com:5000/api/games", { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setGames(data);
            });
    };

    useEffect(() => {
        getGames();
    }, [games.length]);

    const onGameClick = (id) => {
        props.setSelectedGameId(id);
    };

    const sortedGames = games.sort((a, b) => b.game_id - a.game_id);
    const mappedGames = sortedGames.map((game, key) => (
        <li key={key}>
            <div onClick={() => onGameClick(game.game_id)}>
                <div>{game.game_id}_</div>
                <div>
                    {game.teamA} ( <span className='bold'> {game.scoreA}</span>{" "}
                    ) vs {game.teamB} ({" "}
                    <span className='bold'>{game.scoreB}</span> )
                </div>
            </div>
        </li>
    ));

    return (
        <div className='GameList'>
            <h1>All Games</h1>
            <ul>{mappedGames}</ul>
        </div>
    );
};

export default GameList;
