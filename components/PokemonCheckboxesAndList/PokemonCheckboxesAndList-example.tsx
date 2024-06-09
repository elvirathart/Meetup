import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { PokemonCheckboxes } from "./PokemonCheckboxes";
import { SelectedPokemonList } from "./SelectedPokemonList";
import { PokemonProvider } from "./PokemonContext";
import "../../assets/styles.css";

const meta: Meta<typeof PokemonCheckboxes> = {
  title: "Components/PokemonInteraction",
  component: PokemonCheckboxes,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  fontFamily: "nunito sans",
};

export const DefaultState: Story = (args: any) => (
  <PokemonProvider>
    <div style={containerStyle}>
      <PokemonCheckboxes {...args} />
      <SelectedPokemonList />
    </div>
  </PokemonProvider>
);

DefaultState.args = {};

DefaultState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const bulbasaurCheckbox = canvas.getByLabelText("Bulbasaur");
  const charmanderCheckbox = canvas.getByLabelText("Charmander");
  const selectedPokemonList = canvas.getByRole("list");

  // - Assert that the 'selected pokemon' list is empty
  expect(selectedPokemonList).toBeEmptyDOMElement();

  // - Select two checkboxes with pokemon
  fireEvent.click(bulbasaurCheckbox);
  fireEvent.click(charmanderCheckbox);

  // - Verify that the 'Selected Pokemon' list is updated and displays the selected pokemon
  expect(selectedPokemonList).toHaveTextContent("Bulbasaur");
  expect(selectedPokemonList).toHaveTextContent("Charmander");

  // - Bonus: Verify the list is sorted alphabetically
  const listItems = canvas.getAllByRole("listitem");

  expect(listItems[0]).toHaveTextContent("Bulbasaur");
  expect(listItems[1]).toHaveTextContent("Charmander");
  // or
  const pokemonNames = listItems.map((item) => item.textContent);
  expect(pokemonNames).toEqual(["Bulbasaur", "Charmander"]);
};
