import { createContext } from "react";
import type { VinylContextType } from "../interface/context-interface";


export const VinylContext = createContext<VinylContextType>({
  allVinyl: [],
});