import { FeatureItem } from "../models/featureItem";

export const featuresData: FeatureItem[] = [
  {
    title: "Diagnostik",
    description: "",
    items: [
      "Modernes digitales Röntgen",
      "Knochendichtemessung (DEXA)",
      "Ultraschall (Bewegungsapparat und Säuglingshüfte)",
      "Elektromyografie (EMG)",
      "Muskelkraftmessung",
      "Fußdruckmessung",
    ],
    link: "/docs/diagnostik/digitales-roentgen",
  },
  {
    title: "Schmerztherapie",
    description: "",
    items: [
      "Infiltrationen",
      "Röntgen-kontrollierte Infiltrationen",
      "Akupunktur",
      "Axomera",
      "Molekular-medizinische Behandlungen (z.B. Hyalart, ACP, Infusionen)",
      "Neuraltherapie",
    ],
    link: "/docs/schmerztherapie/infiltration",
  },
  {
    title: "Physikalische Therapie",
    description: "",
    items: [
      "Magnetodyn-Therapie",
      "Dynamische Tiefenwellen (Stima WELL)",
      "Lasertherapie",
      "Stoßwellen-Therapie",
      "Triggertherapie",
      "Turbosonic (Whole Body vibration)",
      "Ultrakurzwellentherapie",
      "TENS (transdermale elektrische Nervenstimulation)",
    ],
    link: "/docs/physikalische-therapie/magnetodyn",
  },
];
