import React, { FC } from "react";
import styled from "styled-components";
import { Player } from "../interfaces/player.interface";

interface IPlayerStatsProps {
  player: Player;
}

const PlayerStatsBar: FC<IPlayerStatsProps> = ({ player }) => {
  return (
    <Wrapper>
      <div>Player Stats</div>
      <div>Attack: {player.stats.attack}</div>
      <div>Defense: {player.stats.defense}</div>
      <div>Health: {player.stats.health}</div>
      <div>Coins: {player.gold}</div>
    </Wrapper>
  );
};

export default PlayerStatsBar;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: yellow;
  border: 2px solid black;
  margin-bottom: 1rem;
`;
