import React from 'react';
import { usePokemonContext } from './PokemonContext';
// import './selectedPokemonList.css'

export const SelectedPokemonList: React.FC = () => {
  const { selectedPokemons } = usePokemonContext();

  return (
    <div className="selected-pokemon-list">
      <h2>Selected Pokémon</h2>
      <ul>
        {selectedPokemons.map(pokemon => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};
