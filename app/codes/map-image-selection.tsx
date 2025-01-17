import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";
import Antarctic_Peninsula from "@/public/images/Map_Images/Antarctic_Peninsula.png";
import Busan from "@/public/images/Map_Images/Busan.png";
import Ilios from "@/public/images/Map_Images/Ilios.png";
import Lijiang_Tower from "@/public/images/Map_Images/Lijiang_Tower.png";
import Nepal from "@/public/images/Map_Images/Nepal.png";
import Oasis from "@/public/images/Map_Images/Oasis.png";
import Samoa from "@/public/images/Map_Images/Samoa.png";
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
  "Lijiang Tower": Lijiang_Tower,
  Nepal: Nepal,
  Oasis: Oasis,
  Samoa: Samoa,
};

export default MapImageSelection;
