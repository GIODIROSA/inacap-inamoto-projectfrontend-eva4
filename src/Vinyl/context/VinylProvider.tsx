import type { VinylProviderProps } from "../interface/context-interface";
import { VinylContext } from "./VinylContext";


export const VinylProvider = ({ children }: VinylProviderProps) => {
  return <VinylContext.Provider value={{}}>{children}</VinylContext.Provider>;
};


