import React from 'react';
import { Header } from './Header';
import './page.css';
import { ClickCounter } from './ClickCounter';
import { PokemonCheckboxes } from './PokemonCheckboxes';
import { SelectedPokemonList } from './SelectedPokemonList';
import { PokemonProvider } from './PokemonContext';
import { WelcomeText } from './WelcomeText';

export const Page: React.FC = () => {
  return (
    <PokemonProvider>
      <article>
        <Header />

        <section className="storybook-page">
          <WelcomeText />
          <ClickCounter />
          <PokemonCheckboxes />
          <SelectedPokemonList />
        </section>
      </article>
    </PokemonProvider>
  );
};
