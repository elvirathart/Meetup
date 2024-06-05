import React from "react";
import { Header } from "../components/Header/Header";
import { ClickCounter } from "../components/ClickCounter/ClickCounter";
import { PokemonCheckboxes } from "../components/PokemonCheckboxesAndList/PokemonCheckboxes";
import { SelectedPokemonList } from "../components/PokemonCheckboxesAndList/SelectedPokemonList";
import { PokemonProvider } from "../components/PokemonCheckboxesAndList/PokemonContext";
import { WelcomeText } from "../components/WelcomeText/WelcomeText";
import { EvolutionButton } from "../components/EvolutionButton/EvolutionButton";
import { IncrementCounter } from "@/components/IncrementCounter/IncrementCounter";
import { Provider } from "react-redux";
import store from "@/store";
import { ClickCounterText } from "@/components/WelcomeText/ClickCounterText";
import { EvolutionButtonText } from "@/components/WelcomeText/EvolutionButtonText";
import { IncrementCounterText } from "@/components/WelcomeText/IncrementCounterText";
import { PokemonListText } from "@/components/WelcomeText/PokemonListText";
import { CIText } from "@/components/WelcomeText/CIText";

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

          <IncrementCounterText />          
          <Provider store={store}>
            <IncrementCounter />
          </Provider>

          <PokemonListText />
          <div className="pokemon-row">
            <PokemonCheckboxes />
            <SelectedPokemonList />
          </div>

          <CIText></CIText>

        </section>
      </article>
    </PokemonProvider>
  );
};
