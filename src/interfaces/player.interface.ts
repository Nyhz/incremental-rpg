export interface Player {
  name: string;
  level: number;
  experience: number;
  stats: Stats;
  gold: number;
  inventory: Inventory;
}

interface Stats {
  attack: number;
  defense: number;
  health: number;
}

interface Currency {
  gold: number;
}

interface Inventory {
  items: Item[];
}

interface Item {
  name: string;
  quantity: number;
}

export interface IPlayerState {
  getPlayer: () => void;
  updateLocalStorage: (newPlayer: Player) => void;
  player: Player;
  setPlayer: (newPlayer: Player) => void;
}
