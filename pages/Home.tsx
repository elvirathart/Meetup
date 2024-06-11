import React from "react";
import { Header } from "../components/Header/Header";
import { ClickCounter } from "../components/ClickCounter/ClickCounter";
import { PokemonCheckboxes } from "../components/PokemonCheckboxesAndList/PokemonCheckboxes";
import { SelectedPokemonList } from "../components/PokemonCheckboxesAndList/SelectedPokemonList";
import { PokemonProvider } from "../components/PokemonCheckboxesAndList/PokemonContext";
import { WelcomeText } from "../components/Text/WelcomeText";
import { EvolutionButton } from "../components/EvolutionButton/EvolutionButton";
import { IncrementCounter } from "@/components/IncrementCounter/IncrementCounter";
import { Provider } from "react-redux";
import store from "@/store";
import { ClickCounterText } from "@/components/Text/ClickCounterText";
import { EvolutionButtonText } from "@/components/Text/EvolutionButtonText";
import { IncrementCounterText } from "@/components/Text/IncrementCounterText";
import { PokemonListText } from "@/components/Text/PokemonListText";
import { CIText } from "@/components/Text/CIText";
import PikachuComponent from "@/components/PokemonInfo/PokemonInfo";
import { PokemonInfoText } from "@/components/Text/PokemonInfoText";
import { TestCoverageText } from "@/components/Text/TestCoverage";

export const Home: React.FC = () => {
  return (
    <article>
      <Header />

      <section className="storybook-page">
        <WelcomeText />

        <ClickCounterText />
        <ClickCounter />

        <EvolutionButtonText />
        <EvolutionButton />

        <IncrementCounterText />
        <Provider store={store}>
          <IncrementCounter />
        </Provider>

        <PokemonProvider>
          <PokemonListText />
          <div className="pokemon-row">
            <PokemonCheckboxes />
            <SelectedPokemonList />
          </div>
        </PokemonProvider>
        <PokemonInfoText></PokemonInfoText>
        <PikachuComponent></PikachuComponent>
        <TestCoverageText></TestCoverageText>
        <CIText></CIText>
      </section>
    </article>
  );
};
