import "./player-profile.css";
import React, { useState, useEffect } from "react";

const PlayerProfile = ({ player }) => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (player) {
      setPlayerData(player);
    }
  }, [player]);

  if (!playerData) {
    return <div className="player-profile">Loading...</div>;
  }

  return (
    <div className="player-profile">
      <img src={playerData.image} alt={playerData.name} />
      <h2>{playerData.name}</h2>
      <p>Team: {playerData.team}</p>
      <p>Position: {playerData.position}</p>
      <p>Number: {playerData.number}</p>
      <p>Height: {playerData.height}</p>
      <p>Weight: {playerData.weight}</p>
      <p>Age: {playerData.age}</p>
      <p>College: {playerData.college}</p>
      <p>Experience: {playerData.experience} years</p>
    </div>
  );
}
export default PlayerProfile;