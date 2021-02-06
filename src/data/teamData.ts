import TeamMember from "../models/teamMember";

export const getTeam = () => {
  var team: TeamMember[] = [];

  var gerd: TeamMember = {
    name: "Dr. med. Gerhard Roggenland",
    features: FeaturesGerd,
    imageUrl: "img/gerd_square.jpg",
    position: "Facharzt für Orthopädie und Unfallchirugie",
  };
  team.push(gerd);
  var katharina: TeamMember = {
    name: "Katharina Roggenland",
    features: FeaturesKatharina,
    imageUrl: "img/katharina_square.jpg",
    position: "Fachärztin für Orthopädie und Unfallchirugie",
  };
  team.push(katharina);
  return team;
};

const FeaturesGerd = [
  "Studium der Medizin an der Westfälischen Wilhelms-Universität Münster",
  "Weiterbildung am Anatomischen Institut der Wilhelms-Universität Münster",
  "Weiterbildung in der Unfallchirurgie am Universitätsklinikum Essen",
  "Facharztausbildung in der Orthopädischen Universitätsklinik Düsseldorf",
  "Weiterbildung spezielle orthopädische Chirurgie",
  "Ausbildung Sonografie der Säuglingshüfte (Stolzalpe/Österreich)",
  "Ausbildung Chirotherapie (Isny-Neutrauchburg)",
  "Akademischer Rat und Oberarzt der Orthopädischen Universitätsklinik Düsseldorf",
  "Seit 1989 niedergelassener Orthopäde in Bochum",
  "Ausbildung Akupunktur (Forschungsgruppe Akupunktur)",
];

const FeaturesKatharina = [
  "Studium der Medizin an der Philipps-Universität Marburg und der Universität Duisburg-Essen",
  "Weiterbildung in der Orthopädischen Abteilung Klinikum Dortmund gGmbH",
  "Weiterbildung Unfallchirurgie an dem BG Universitätsklinikum Bergmannsheil Bochum",
  "Weiterbildung an der Klinik für Orthopädie und Unfallchirurgie am St. Josef Hospital Bochum-Klinikum der Ruhr-Universität-Bochum",
  "Facharztprüfung Orthopädie und Unfallchirurgie",
  "Ausbildung Sonografie Säuglingshüfte nach Graf (Dortmund)",
  "Ausbildung Akupunktur (Forschungsgruppe Akupunktur)",
];
