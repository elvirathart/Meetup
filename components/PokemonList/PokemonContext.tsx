import React, { createContext, useContext, useState, ReactNode } from 'react';

type PokemonContextType = {
  selectedPokemons: string[];
  togglePokemon: (pokemon: string) => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState<string[]>([]);

  const togglePokemon = (pokemon: string) => {
    setSelectedPokemons(prevSelected => {
      if (prevSelected.includes(pokemon)) {
        return prevSelected.filter(p => p !== pokemon);
      } else {
        return [...prevSelected, pokemon];
      }
    });
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemons, togglePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
