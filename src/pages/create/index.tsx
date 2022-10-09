import { NextPage } from "next";
import NextLink from "next/link";
import { FormEvent, useContext, useEffect } from "react";
import { playerTemplate } from "../../constants/playerTemplate";
import { PlayerContext } from "../../providers/player.provider";

const Create: NextPage = () => {
  const { updateLocalStorage, player, setPlayer } = useContext(PlayerContext);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setPlayer({ ...playerTemplate, name: e.currentTarget.value });
  };

  const createPlayer = () => {
    updateLocalStorage(player);
  };

  return (
    <div>
      <h1>~~ IncrementalRPG</h1>
      <input onChange={handleChange} type='text' />
      <NextLink href={"/game"}>
        <button onClick={createPlayer}>Create Player</button>
      </NextLink>
    </div>
  );
};

export default Create;
