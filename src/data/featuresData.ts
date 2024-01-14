import { FeatureItem } from "../models/featureItem";

export const featuresData: FeatureItem[] = [
  {
    title: "Diagnostik",
    description: "",
    items: [
      "Elektromyografie (EMG)",
      "Fußdruckmessung",
      "Knochendichtemessung (DEXA)",
      "Medizinische Begutachtung",
      "Modernes digitales Röntgen",
      "Muskelkraftmessung",
      "Ultraschall (Bewegungsapparat und Säuglingshüfte)",
      "Zertifizierte Fußsprechstunde",
    ],
    link: "/docs/diagnostik/digitales-roentgen",
  },
  {
    title: "Schmerztherapie",
    description: "",
    items: [
      "Akupunktur",
      "Axomera",
      "Infiltrationen",
      "Molekular-medizinische Behandlungen (z.B. Hyalart, ACP, Infusionen)",
      "Neuraltherapie",
      "Röntgen-kontrollierte Infiltrationen",
    ],
    link: "/docs/schmerztherapie/infiltration",
  },
  {
    title: "Physikalische Therapie",
    description: "",
    items: [
      "Dynamische Tiefenwellen (Stima WELL)",
      "Lasertherapie",
      "Magnetodyn-Therapie",
      "Stoßwellen-Therapie",
      "TENS (transdermale elektrische Nervenstimulation)",
      "Triggertherapie",
      "Turbosonic (Whole Body vibration)",
      "Ultrakurzwellentherapie",
      "Ultraschall-Therapie",
    ],
    link: "/docs/physikalische-therapie/magnetodyn",
  },
];
