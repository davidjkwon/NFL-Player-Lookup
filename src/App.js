import './App.css';
import Search from './components/search/search';
import PlayerProfile from './components/player-profile/player-profile';
import { useState } from 'react';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleOnSearchChange = (searchData, players) => {
    // Find the player object by name (or use a unique id if available)
    const player = players.find(p => p.name === searchData.value);
    setSelectedPlayer(player);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <PlayerProfile player={selectedPlayer} />
    </div>
  );
}

export default App;