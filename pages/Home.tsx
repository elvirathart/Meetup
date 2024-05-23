import React from "react";
import { Header } from "../components/Header/Header";
import { ClickCounter } from "../components/ClickCounter/ClickCounter";
import { PokemonCheckboxes } from "../components/PokemonCheckboxes/PokemonCheckboxes";
import { SelectedPokemonList } from "../components/PokemonList/SelectedPokemonList";
import { PokemonProvider } from "../components/PokemonList/PokemonContext";
import { WelcomeText } from "../components/WelcomeText/WelcomeText";
import { EvolutionButton } from "../components/EvolutionButton/EvolutionButton";
import { IncrementCounter } from "@/components/Counter/IncrementCounter";
import { Provider } from "react-redux";
import store from "@/store";
import { ClickCounterText } from "@/components/WelcomeText/ClickCounterText";
import { EvolutionButtonText } from "@/components/WelcomeText/EvolutionButtonText";

export const Home: React.FC = () => {
  return (
    <PokemonProvider>
      <article>
        <Header />

        <section className="storybook-page">
          <WelcomeText />

          < ClickCounterText/>
          <ClickCounter />
          <EvolutionButtonText/>
          <EvolutionButton />
          
          <Provider store={store}>
            <IncrementCounter />
          </Provider>

          <div className="pokemon-row">
            <PokemonCheckboxes />
            <SelectedPokemonList />
          </div>

        </section>
      </article>
    </PokemonProvider>
  );
};
