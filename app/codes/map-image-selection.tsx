import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";
import Antarctic_Peninsula from "@/public/images/Map_Images/Antarctic_Peninsula.png";
import Busan from "@/public/images/Map_Images/Busan.png";
import Ilios from "@/public/images/Map_Images/Ilios.png";
import Lijiang_Tower from "@/public/images/Map_Images/Lijiang_Tower.png";
import Nepal from "@/public/images/Map_Images/Nepal.png";
import Oasis from "@/public/images/Map_Images/Oasis.png";
import Samoa from "@/public/images/Map_Images/Samoa.png";
import Circuit_Royal from "@/public/images/Map_Images/Circuit_Royal.jpg";
import Dorado from "@/public/images/Map_Images/Dorado.jpg";
import Havana from "@/public/images/Map_Images/Havana.png";
import Junkertown from "@/public/images/Map_Images/Junkertown.jpg";
import Rialto from "@/public/images/Map_Images/Rialto.jpg";
import Route_66 from "@/public/images/Map_Images/Route_66.jpg";
import Shambali_Monastery from "@/public/images/Map_Images/Shambali_Monastery.png";
import Gibraltar from "@/public/images/Map_Images/Gibraltar.jpg";
import New_Junk_City from "@/public/images/Map_Images/New_Junk_City.jpg";
import Suravasa from "@/public/images/Map_Images/Suravasa.jpg";
import Blizzard_World from "@/public/images/Map_Images/Blizzard_World.jpg";
import Eichenwalde from "@/public/images/Map_Images/Eichenwalde.png";
import Hollywood from "@/public/images/Map_Images/Hollywood.jpg";
import Kings_Row from "@/public/images/Map_Images/Kings_Row.jpg";
import Midtown from "@/public/images/Map_Images/Midtown.png";
import Numbani from "@/public/images/Map_Images/Numbani.jpg";
import Paraíso from "@/public/images/Map_Images/Paraíso.jpg";
import Colosseo from "@/public/images/Map_Images/Colosseo.png";
import Esperança from "@/public/images/Map_Images/Esperança.jpg";
import New_Queen_Street from "@/public/images/Map_Images/New_Queen_Street.jpg";
import Runasapi from "@/public/images/Map_Images/Runasapi.jpg";
import Hanaoka from "@/public/images/Map_Images/Hanaoka.jpg";
import Throne_of_Anubis from "@/public/images/Map_Images/Throne_of_Anubis.png";
import Château_Guillard from "@/public/images/Map_Images/Chateau_Guillard.jpg";
import Kanezaka from "@/public/images/Map_Images/Kanezaka.jpg";
import Malevento from "@/public/images/Map_Images/Malevento.jpg";
import Petra from "@/public/images/Map_Images/Petra.jpg";
import Hanamura from "@/public/images/Map_Images/Hanamura.jpg";
import Horizon_Lunar_Colony from "@/public/images/Map_Images/Horizon_Lunar_Colony.jpg";
import Paris from "@/public/images/Map_Images/Paris.jpg";
import Temple_of_Anubis from "@/public/images/Map_Images/Temple_of_Anubis.jpg";
import Volskaya_Industries from "@/public/images/Map_Images/Volskaya_Industries.jpg";
import Ayutthaya from "@/public/images/Map_Images/Ayutthaya.png";
import Black_Forest from "@/public/images/Map_Images/Black_Forest.jpg";
import Castillo from "@/public/images/Map_Images/Castillo.jpg";
import Necropolis from "@/public/images/Map_Images/Necropolis.jpg";
import Workshop_Chamber from "@/public/images/Map_Images/Workshop_Chamber.png";
import Workshop_Expanse from "@/public/images/Map_Images/Workshop_Expanse.png";
import Workshop_Green_Screen from "@/public/images/Map_Images/Workshop_Green_Screen.png";
import Workshop_Island from "@/public/images/Map_Images/Workshop_Island.png";
import Practice_Range from "@/public/images/Map_Images/Practice_Range.jpg";
import { StaticImageData } from "next/image";

type MapImages = {
  [key: string]: StaticImageData;
};

const MapImageSelection = (mapName: string): StaticImageData => {
  const matchedKey = Object.keys(mapImages).find((key) =>
    mapName.includes(key)
  );
  return matchedKey ? mapImages[matchedKey] : Ecopoint;
};

const mapImages: MapImages = {
  "Antarctic Peninsula": Antarctic_Peninsula,
  Busan: Busan,
  Ilios: Ilios,
  Lijiang: Lijiang_Tower,
  Nepal: Nepal,
  Oasis: Oasis,
  Samoa: Samoa,
  "Circuit Royal": Circuit_Royal,
  Dorado: Dorado,
  Havana: Havana,
  Junkertown: Junkertown,
  Rialto: Rialto,
  "Route 66": Route_66,
  "Shambali Monastery": Shambali_Monastery,
  "Watchpoint: Gibraltar": Gibraltar,
  "New Junk City": New_Junk_City,
  Suravasa: Suravasa,
  "Blizzard World": Blizzard_World,
  Eichenwalde: Eichenwalde,
  Hollywood: Hollywood,
  "King's Row": Kings_Row,
  Midtown: Midtown,
  Numbani: Numbani,
  Paraíso: Paraíso,
  Colosseo: Colosseo,
  Esperança: Esperança,
  "New Queen Street": New_Queen_Street,
  Runasapi: Runasapi,
  Hanaoka: Hanaoka,
  "Throne of Anubis": Throne_of_Anubis,
  "Château Guillard": Château_Guillard,
  Kanezaka: Kanezaka,
  Malevento: Malevento,
  Petra: Petra,
  Hanamura: Hanamura,
  "Horizon Lunar Colony": Horizon_Lunar_Colony,
  Paris: Paris,
  "Temple of Anubis": Temple_of_Anubis,
  "Volskaya Industries": Volskaya_Industries,
  Ayutthaya: Ayutthaya,
  "Black Forest": Black_Forest,
  Castillo: Castillo,
  "Ecopoint: Antarctica": Ecopoint,
  Necropolis: Necropolis,
  "Workshop Chamber": Workshop_Chamber,
  "Workshop Expanse": Workshop_Expanse,
  "Workshop Green Screen": Workshop_Green_Screen,
  "Workshop Island": Workshop_Island,
  "Practice Range": Practice_Range,
};

export default MapImageSelection;
