import EmbeddedCollection from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/embedded-collection.mjs";
import { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/module.mjs";
import { ProficiencyRank } from "./parser";

interface ItemPF2e extends Item {
  id: string;
  name: string;
  slug: string;
  uuid: string;
}

interface FeatPF2e extends ItemPF2e {
  data: ItemPF2e["data"] & {
    data: ItemPF2e["data"]["data"] & {
      featType: {
        value: FeatPF2e["featType"]["value"];
      };
    };
  };
  featType: {
    label: string;
    value:
      | "classfeature"
      | "class"
      | "skill"
      | "heritage"
      | "ancestry"
      | "archetype"
      | "general";
  };
}

interface ClassPF2e extends ItemPF2e {
  data: ItemPF2e["data"] & {
    data: ItemPF2e["data"]["data"] & {
      items: Record<
        string,
        {
          level: number | string;
          id: string;
          pack: string;
          name: string;
          img: string;
        }
      >;
    };
  };
}

interface CharacterPF2e extends Actor {
  class: ClassPF2e | null;
  background: ItemPF2e | null;
  update(data: CharacterUpdateMap): Promise<CharacterPF2e | undefined>;
}

type CharacterUpdateMap = {
  name?: string;
  "token.name"?: string;
  "data.details.level.value"?: string | number;
  "data.details.heritage.value"?: string;
  "data.details.age.value"?: string;
  "data.details.gender.value"?: string;
  "data.details.keyability.value"?: string;
  "data.traits.size.value"?: string;
  "data.traits.languages.value"?: string[];
  "data.traits.sense"?: CharacterSense[];
  "data.abilities.str.value"?: number;
  "data.abilities.dex.value"?: number;
  "data.abilities.con.value"?: number;
  "data.abilities.wis.value"?: number;
  "data.abilities.int.value"?: number;
  "data.abilities.cha.value"?: number;
  "data.attributes.ancestryhp"?: number;
  "data.attributes.classhp"?: number;
  "data.attributes.speed.value"?: number;
  "data.attributes.flatbonushp"?: number;
  "data.attributes.hp.value"?: number;
  "data.attributes.classDC.rank"?: number;
  "data.attributes.perception.rank"?: ProficiencyRank;
  "data.saves.fortitude.rank"?: ProficiencyRank;
  "data.saves.reflex.rank"?: ProficiencyRank;
  "data.saves.will.rank"?: ProficiencyRank;
  "data.martial.unarmed.rank"?: ProficiencyRank;
  "data.martial.simple.rank"?: ProficiencyRank;
  "data.martial.martial.rank"?: ProficiencyRank;
  "data.martial.unarmored.rank"?: ProficiencyRank;
  "data.martial.light.rank"?: ProficiencyRank;
  "data.martial.medium.rank"?: ProficiencyRank;
  "data.martial.heavy.rank"?: ProficiencyRank;
  "data.martial.advanced.rank"?: ProficiencyRank;
  "data.skills.acr.rank"?: ProficiencyRank;
  "data.skills.arc.rank"?: ProficiencyRank;
  "data.skills.ath.rank"?: ProficiencyRank;
  "data.skills.cra.rank"?: ProficiencyRank;
  "data.skills.dec.rank"?: ProficiencyRank;
  "data.skills.dip.rank"?: ProficiencyRank;
  "data.skills.itm.rank"?: ProficiencyRank;
  "data.skills.med.rank"?: ProficiencyRank;
  "data.skills.nat.rank"?: ProficiencyRank;
  "data.skills.occ.rank"?: ProficiencyRank;
  "data.skills.prf.rank"?: ProficiencyRank;
  "data.skills.rel.rank"?: ProficiencyRank;
  "data.skills.soc.rank"?: ProficiencyRank;
  "data.skills.ste.rank"?: ProficiencyRank;
  "data.skills.sur.rank"?: ProficiencyRank;
  "data.skills.thi.rank"?: ProficiencyRank;
};

type CharacterSense = {
  exceptions: string;
  label: string;
  type: string;
  value: string;
};
