import { IChampion } from "./IChampion";

export interface IChampionData {
  [key: string]: IChampion; // Permite múltiplos campeões indexados pelo nome
}