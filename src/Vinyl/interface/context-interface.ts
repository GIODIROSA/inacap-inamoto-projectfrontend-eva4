
import type { VinylData } from "./data-interface";

// INTERFACE: CONTEXT

export interface VinylProviderProps {
  children: React.ReactNode;
}

export interface VinylContextType {
  allVinyl: VinylData[];
}

