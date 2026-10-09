// Filter options for /codes and /codes/random. Made to avoid redundency.

// NOTE FOR FUTURE WILL ADD PLAYED/NOT PLAYED OVER HERE
// THAT SECTION IS COMMENETED OUT FOR NOW...
export type RandomFilters = {
    category: string;
    map: string;
    difficulty: string;
    // played: string;
};

export const EMPTY_FILTERS: RandomFilters = {
    category: "",
    map: "",
    difficulty: "",
    // played: "",
};

export const DEFAULT_RANGE = [1, 17];

export const categoryOptionItems = [
    "Clouds",
    "Many Orbs",
    "Rez Map",
    "Softlock/Hardlock",
    "Stuck/Balances"
].sort();

export const mapOptionItems = [
  "Aatlis",
  "Antarctic Peninsula",
  "Busan",
  "Ilios",
  "Lijiang Tower",
  "Nepal",
  "Oasis",
  "Samoa",
  "Circuit Royal",
  "Dorado",
  "Havana",
  "Junkertown",
  "Rialto",
  "Route 66",
  "Shambali Monastery",
  "Watchpoint: Gibraltar",
  "New Junk City",
  "Suravasa",
  "Blizzard World",
  "Eichenwalde",
  "Hollywood",
  "King's Row",
  "Midtown",
  "Numbani",
  "Paraíso",
  "Colosseo",
  "Esperança",
  "New Queen Street",
  "Runasapi",
  "Hanaoka",
  "Throne of Anubis",
  "Château Guillard",
  "Kanezaka",
  "Malevento",
  "Petra",
  "Hanamura",
  "Horizon Lunar Colony",
  "Paris",
  "Temple of Anubis",
  "Volskaya Industries",
  "Ayutthaya",
  "Black Forest",
  "Castillo",
  "Ecopoint: Antarctica",
  "Necropolis",
  "Workshop Chamber",
  "Workshop Expanse",
  "Workshop Green Screen",
  "Workshop Island",
  "Practice Range",
].sort();

export const difficultyOptionItems = [
  "Multi Difficulty",
  "Beginner",
  "Beginner / Easy",
  "Easy",
  "Easy / Low Intermediate",
  "Low Intermediate",
  "Low Intermediate / Intermediate",
  "Intermediate",
  "Intermediate / High Intermediate",
  "High Intermediate",
  "High Intermediate / Hard",
  "Hard",
  "Hard / Very Hard",
  "Very Hard",
  "Very Hard / Expert",
  "Expert",
  "Expert / Super Expert",
  "Super Expert",
];

export const hasPlayedItems = [
  "Played",
  "Not Played"
];

export const categoryToUrl = (category: string) => {
  switch (category) {
    case "Clouds":
      return "Cloud";
    case "Many Orbs":
      return "Many_Orbs";
    case "Softlock/Hardlock":
      return "Softlock";
    case "Stuck/Balances":
      return "Stuck_Balance";
    case "Rez Map":
      return "Rez Map";
    default:
      return "";
  }
};