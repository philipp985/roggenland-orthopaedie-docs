import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  someSidebar: {
    Leistungspektrum: [
      "sportmedizin",
      "chirotherapie",
      "kinder-orthopaedie",
      "schmerztherapie/akupunktur",
      {
        Diagnostik: [
          "diagnostik/digitales-roentgen",
          "diagnostik/knochendichtemessung",
          "diagnostik/ultraschall",
          "diagnostik/muskelkraftmessung",
          // "diagnostik/fussdruckmessung",
        ],
      },
      {
        Schmerztherapie: [
          "schmerztherapie/infiltration",
          // "schmerztherapie/roentgen-infiltration",

          "schmerztherapie/axomera",
          // "schmerztherapie/molekulare-medizin",
          // "schmerztherapie/neuraltherapie",
        ],
      },
      {
        "Physikalische Therapie": [
          "physikalische-therapie/magnetodyn",
          "physikalische-therapie/stima",
          "physikalische-therapie/laser",
          "physikalische-therapie/stosswellen",
          // "physikalische-therapie/trigger",
          "physikalische-therapie/turbosonic",
          // "physikalische-therapie/ultrakurzwellen",
          "physikalische-therapie/tens",
        ],
      },
    ],
  },
};

module.exports = sidebar;
