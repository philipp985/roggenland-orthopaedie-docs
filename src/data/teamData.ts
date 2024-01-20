import TeamMember from "../models/teamMember";

export const getTeam = () => {
  const team: TeamMember[] = [];

  const gerd: TeamMember = {
    id: "gerhard",
    name: "Dr. med. Gerhard Roggenland",
    features: FeaturesGerd,
    imageUrl: "img/gerd_square.jpg",
    position: "Facharzt für Orthopädie und Unfallchirurgie",
  };
  team.push(gerd);
  const katharina: TeamMember = {
    id: "katharina",
    name: "Katharina Roggenland",
    features: FeaturesKatharina,
    imageUrl: "img/katharina_square.jpg",
    position: "Fachärztin für Orthopädie und Unfallchirurgie",
  };
  team.push(katharina);
  team.push({
    id: "nannie",
    name: "Dr. med. Nannie Morrosch",
    position: "Fachärztin für Orthopädie und Unfallchirugie",
    features: FeaturesNannie,
    imageUrl: "img/nannie_square.jpg",
  });
  return team;
};

const FeaturesGerd = [
  "Studium der Medizin an der Westfälischen Wilhelms-Universität Münster",
  "Weiterbildung am Anatomischen Institut der Wilhelms-Universität Münster (Prof. D. Eichner)",
  "Weiterbildung in der Unfallchirurgie am Universitätsklinikum Essen (Prof. K.-P. Schmitt-Neuerburg)",
  "Facharztausbildung in der Orthopädischen Universitätsklinik Düsseldorf (Prof. K.P. Schulitz)",
  "Spezielle orthopädische Chirurgie",
  "Ausbildung Sonografie der Säuglingshüfte (Stolzalpe/Österreich Prof. R. Graf)",
  "Ausbildung Chirotherapie (MWE, Isny, Dr. med. H-P Bischoff)",
  "Akademischer Rat und Oberarzt der Orthopädischen Universitätsklinik Düsseldorf",
  "Seit 1989 niedergelassener Orthopäde in Bochum",
  "Ausbildung Akupunktur (Forschungsgruppe Akupunktur)",
];

const FeaturesKatharina = [
  "Studium der Medizin an der Philipps-Universität Marburg und der Universität Duisburg-Essen",
  "Weiterbildung in der Orthopädischen Abteilung Klinikum Dortmund gGmbH (Prof. Katthagen, Prof. Lüring)",
  "Weiterbildung Unfallchirurgie an dem BG Universitätsklinikum Bergmannsheil Bochum (Prof. Schildhauer)",
  "Weiterbildung an der Klinik für Orthopädie und Unfallchirurgie am St. Josef Hospital Bochum-Klinikum der Ruhr-Universität-Bochum (Prof. Schulte)",
  "Facharztprüfung Orthopädie und Unfallchirurgie",
  "Ausbildung Sonografie Säuglingshüfte nach Graf (Dortmund)",
  "Zusatzbezeichnung Akupunktur (Forschungsgruppe Akupunktur)",
];

const FeaturesNannie = [
  "Studium der Medizin an der Ruhr-Universität Bochum, Universität Tours/Frankreich und Alcalá de Henares/Spanien",
  "Weiterbildung in der Klinik für Orthopädie und Unfallchirurgie im St. Josef-Hospital Bochum Klinikum der Ruhr-Universität Bochum",
  "Weiterbildung in der Chirurgischen Klinik und Poliklinik BG Universitätsklinikum Bergmannsheil Bochum",
  "Weiterbildung in der Klinik für Allgemein- und Viszeralchirurgie im St. Josef-Hospital Bochum Klinikum der Ruhr-Universität Bochum",
  "Weiterbildung in der Klinik für Orthopädie und Unfallchirurgie im St. Marienhospital Borken",
  "Weiterbildung in der Klinik für Orthopädie, Spezielle orthopädische Chirurgie und Wirbelsäulentherapie im Klinikum Westfalen - Knappschaftskrankenhaus Dortmund",
  "Fachärztin für Orthopädie und Unfallchirurgie",
  "Spezielle Orthopädische Chirurgie",
  "Fachkunde Rettungsdienst",
  "Zertifikat Fußchirurgie D.A.F.",
  "Zertifikat Medizinische Begutachtung",
];
