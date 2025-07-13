import { ReactNode, useState } from 'react';
import { AppContext, AppContextType } from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const value: AppContextType = {
    loading,
    error,
    // Agrega más estado y funciones aquí
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

