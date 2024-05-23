import React from 'react';
import { Header } from '../Header/Header';
import { ClickCounter } from '../ClickCounter/ClickCounter';
import { PokemonCheckboxes } from '../PokemonCheckboxes/PokemonCheckboxes';
import { SelectedPokemonList } from '../PokemonList/SelectedPokemonList';
import { PokemonProvider } from '../PokemonList/PokemonContext';
import { WelcomeText } from '../WelcomeText/WelcomeText';
import { EvolutionButton } from '../EvolutionButton/EvolutionButton';

export const Page: React.FC = () => {
  return (
    <PokemonProvider>
      <article>
        <Header />

        <section className="storybook-page">
          <WelcomeText />
          <EvolutionButton></EvolutionButton>
          <ClickCounter />
          <div className="pokemon-row">
            <PokemonCheckboxes />
            <SelectedPokemonList />
          </div>
        </section>
      </article>
    </PokemonProvider>
  );
};
