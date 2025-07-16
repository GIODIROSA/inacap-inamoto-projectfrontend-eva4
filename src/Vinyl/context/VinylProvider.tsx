import { useEffect, useState } from "react";
import type {
  VinylProviderProps,
  VinylContextType,
} from "../interface/context-interface";
import { VinylContext } from "./VinylContext";
import { DataVinilo } from "../services/data/vinylData";
import type { VinylData } from "../interface/data-interface";

export const VinylProvider = ({ children }: VinylProviderProps) => {
  const [allVinyl, setAllVinyl] = useState<VinylData[]>([]);

  useEffect(() => {
    setAllVinyl(DataVinilo as VinylData[]);
  }, []);

  // console.log("Vinyl data allVinyl:", allVinyl);
  const value: VinylContextType = {
    allVinyl,
  };

  return (
    <VinylContext.Provider value={value}>{children}</VinylContext.Provider>
  );
};
