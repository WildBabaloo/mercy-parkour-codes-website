import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";
import AntarcticPeninsula from "@/public/images/Map_Images/Antarctic_Peninsula.png";
import Busan from "@/public/images/Map_Images/Busan.png";
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
  "Antarctic Peninsula": AntarcticPeninsula,
  Busan: Busan,
};

export default MapImageSelection;
