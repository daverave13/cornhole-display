import "./App.css";
import Header from "./components/Header";
import GameList from "./components/GameList";
import ScoreBoard from "./components/ScoreBoard";
import { useState } from "react";

function App() {
    const [selectedGameId, setSelectedGameId] = useState(-1);

    const idControl = (
        <div className='id-control' onClick={() => setSelectedGameId(-1)}>
            <div className='game-id-readout'>ID: {selectedGameId}</div>
            <div className='back-button'>Back</div>
        </div>
    );

    return (
        <div className='App'>
            <Header />
            {selectedGameId > 0 ? (
                <ScoreBoard
                    selectedGameId={selectedGameId}
                    setSelectedGameId={setSelectedGameId}
                />
            ) : (
                <GameList setSelectedGameId={setSelectedGameId}></GameList>
            )}
            {selectedGameId > 0 ? idControl : ""}
        </div>
    );
}

export default App;
