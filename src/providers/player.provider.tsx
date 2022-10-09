import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { playerTemplate } from "../constants/playerTemplate";
import { IPlayerState, Player } from "../interfaces/player.interface";

const initialState = {} as IPlayerState;

export const PlayerContext = React.createContext<IPlayerState>(initialState);

export const PlayerProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [player, setPlayer] = useState<Player>(playerTemplate);

  const getPlayer = () => {
    const player = localStorage.getItem("player");
    if (player) {
      setPlayer(JSON.parse(player));
    }
  };

  const updateLocalStorage = (newPlayer: Player) => {
    localStorage.setItem("player", JSON.stringify(newPlayer));
  };

  useEffect(() => {
    getPlayer();
  }, []);

  useEffect(() => {
    if (player) {
      updateLocalStorage(player);
    }
  }, [player]);

  const contextValue = {
    getPlayer,
    updateLocalStorage,
    player,
    setPlayer,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
