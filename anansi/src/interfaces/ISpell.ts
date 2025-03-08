import { IImage } from "./IImage";
import { ILevelTip } from "./ILevelTip";

export interface ISpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: ILevelTip;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: Record<string, any>; // Objeto vazio ou com estrutura desconhecida
    effect: (number[] | null)[];
    effectBurn: (string | null)[];
    vars: any[]; // Array de qualquer tipo
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: IImage;
    resource: string;
  }