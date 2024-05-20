import React from 'react';
import './pokemonCheckboxes.css'; // Ensure this CSS file is imported
import { usePokemonContext } from './PokemonContext';

export const PokemonCheckboxes: React.FC = () => {
  const { selectedPokemons, togglePokemon } = usePokemonContext();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    togglePokemon(name);
  };

  return (
    <div className="pokemon-checkboxes-container">
            <h2>Select Pokémon</h2>
      {['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Jigglypuff'].map(pokemon => (
        <label key={pokemon}>
          <input
            type="checkbox"
            name={pokemon}
            checked={selectedPokemons.includes(pokemon)}
            onChange={handleCheckboxChange}
          />
          <span className="pokemon-name">{pokemon}</span> {/* Wrap the text in a span */}
        </label>
      ))}
    </div>
  );
};

