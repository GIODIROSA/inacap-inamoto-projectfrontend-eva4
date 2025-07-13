import { createContext } from 'react';

export interface AppContextType {
  // Define aquí tu estado y funciones
  loading: boolean;
  error: string | null;
  // Agrega más según necesites
}

export const AppContext = createContext<AppContextType | undefined>(undefined);