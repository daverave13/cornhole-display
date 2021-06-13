import "./App.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";

function App() {
    return (
        <div className='App'>
            <Header />
            <ScoreBoard selectedGameId='443' />
        </div>
    );
}

export default App;
