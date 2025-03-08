import { IImage } from "./IImage";
import { IInfo } from "./IInfo";
import { IPassive } from "./IPassive";
import { ISkin } from "./ISkin";
import { ISpell } from "./ISpell";
import { IStats } from "./IStats";

export interface IChampion {
    id: string;
    key: string;
    name: string;
    title: string;
    image: IImage;
    skins: ISkin[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    info: IInfo;
    stats: IStats;
    spells: ISpell[];
    passive: IPassive;
    recommended: any[]; // Array de qualquer tipo (estrutura desconhecida)
}