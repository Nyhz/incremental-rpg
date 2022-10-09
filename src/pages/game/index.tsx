import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import PlayerStatsBar from "../../components/PlayerStatsBar";
import { PlayerContext } from "../../providers/player.provider";

const Game: NextPage = () => {
  const [begging, setBegging] = useState(false);
  const [beggingInterval, setBeggingInterval] = useState<NodeJS.Timeout>();
  const { player, setPlayer, updateLocalStorage, getPlayer } =
    useContext(PlayerContext);

  const addCoin = () => {
    setPlayer({ ...player, gold: player.gold++ });
  };

  const toggleBegging = () => {
    if (!begging) {
      setBegging(!begging);
      setBeggingInterval(
        setInterval(() => {
          addCoin();
        }, 1000)
      );
    } else {
      setBegging(!begging);
      clearTimeout(beggingInterval);
    }
  };

  return (
    <>
      {player && Object.keys(player).length > 0 && (
        <div>
          <PlayerStatsBar player={player} />
          <div>Welcome {player?.name}</div>
          <br />
          {begging ? (
            <button onClick={toggleBegging}>Stop begging</button>
          ) : (
            <button onClick={toggleBegging}>Beg for coins</button>
          )}
        </div>
      )}
    </>
  );
};

export default Game;
