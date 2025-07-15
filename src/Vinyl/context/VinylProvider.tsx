import { useEffect, useState } from "react";
import type { VinylProviderProps } from "../interface/context-interface";
import { VinylContext } from "./VinylContext";
import { DataVinilo } from "../services/data/vinylData";
import type { VinylData } from "../interface/data-interface";

export const VinylProvider = ({ children }: VinylProviderProps) => {
  const [allVinyl, setAllVinyl] = useState<VinylData[]>([]);

  useEffect(() => {
    setAllVinyl(DataVinilo);
  }, []);

  console.log("Vinyl data allVinyl:", allVinyl);
  const value = {
    allVinyl,
  };

  return (
    <VinylContext.Provider value={value}>{children}</VinylContext.Provider>
  );
};
