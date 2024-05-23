// import React from 'react';
// import { Header } from '../components/Header/Header';
// import { ClickCounter } from '../components/ClickCounter/ClickCounter';
// import { PokemonCheckboxes } from '../components/PokemonCheckboxes/PokemonCheckboxes';
// import { SelectedPokemonList } from '../components/PokemonList/SelectedPokemonList';
// import { PokemonProvider } from '../components/PokemonList/PokemonContext';
// import { WelcomeText } from '../components/WelcomeText/WelcomeText';
// import { EvolutionButton } from '../components/EvolutionButton/EvolutionButton';

// export const Page: React.FC = () => {
//   return (
//     <PokemonProvider>
//       <article>
//         <Header />

//         <section className="storybook-page">
//           <WelcomeText />
//           <EvolutionButton></EvolutionButton>
//           <ClickCounter />
//           <div className="pokemon-row">
//             <PokemonCheckboxes />
//             <SelectedPokemonList />
//           </div>
//         </section>
//       </article>
//     </PokemonProvider>
//   );
// };

import React from "react";
import { Header } from "../components/Header/Header";
import { ClickCounter } from "../components/ClickCounter/ClickCounter";
import { PokemonCheckboxes } from "../components/PokemonCheckboxes/PokemonCheckboxes";
import { SelectedPokemonList } from "../components/PokemonList/SelectedPokemonList";
import { PokemonProvider } from "../components/PokemonList/PokemonContext";
import { WelcomeText } from "../components/WelcomeText/WelcomeText";
import { EvolutionButton } from "../components/EvolutionButton/EvolutionButton";
import Counter from "@/components/Counter/Counter";
import { Provider } from "react-redux";
import store from "@/store";

export const Home: React.FC = () => {
  return (
    <PokemonProvider>
      <article>
        <Header />

        <section className="storybook-page">
          <WelcomeText />

          <EvolutionButton />
          <ClickCounter />

          <Provider store={store}>
            <Counter />
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
