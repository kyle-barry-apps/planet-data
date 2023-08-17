import { useState, createContext, ReactNode} from "react";

interface PlanetContextType {
  planet: string,
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
}

export const PlanetContext = createContext<PlanetContextType | null>(null)

interface PlanetProviderProps {
  children: ReactNode
}

export const PlanetProvider = ({ children }: PlanetProviderProps) => {
  const [planet, setPlanet] = useState<string>('Mercury')

return (
  <PlanetContext.Provider value={{planet, setPlanet}}>
    {children}
  </PlanetContext.Provider>
);
};
