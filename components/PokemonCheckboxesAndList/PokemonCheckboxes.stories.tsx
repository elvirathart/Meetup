import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { PokemonCheckboxes } from './PokemonCheckboxes';
import { SelectedPokemonList } from './SelectedPokemonList';
import { PokemonProvider } from './PokemonContext';
// import "../../assets/styles.css";

const meta: Meta<typeof PokemonCheckboxes> = {
  title: 'Components/PokemonInteraction',
  component: PokemonCheckboxes,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
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

  const bulbasaurCheckbox = canvas.getByLabelText('Bulbasaur');
  const charmanderCheckbox = canvas.getByLabelText('Charmander');
  const selectedPokemonList = canvas.getByRole('list');

  // Initial assertions
  expect(selectedPokemonList).toBeEmptyDOMElement();

  // Trigger a click event on the checkbox elements
  fireEvent.click(bulbasaurCheckbox);
  fireEvent.click(charmanderCheckbox)

  // Verify that the selected Pokémon list updates
  const bulbasaurListItem = canvas.getByText('Bulbasaur', { selector: 'li' });
  const charmanderListItem = canvas.getByText('Charmander', { selector: 'li' });

  expect(bulbasaurListItem).toBeInTheDocument();
  expect(charmanderListItem).toBeInTheDocument();

  // Verify that the list is sorted alphabetically
  const listItems = canvas.getAllByRole('listitem');
  const pokemonNames = listItems.map(item => item.textContent?.trim() ?? '');

  expect(pokemonNames).toEqual(['Bulbasaur', 'Charmander']); // Assuming alphabetical order
};



// // Story for the state when only Bulbasaur is selected
// export const BulbasaurSelectedState: Story = (args: any) => (
//   <PokemonProvider>
//         <div style={containerStyle}>
//     <PokemonCheckboxes {...args} />
//     <SelectedPokemonList />
//     </div>
//   </PokemonProvider>
// );


// BulbasaurSelectedState.args = {};

// BulbasaurSelectedState.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   const bulbasaurCheckbox = canvas.getByLabelText('Bulbasaur');
//   const selectedPokemonList = canvas.getByRole('list');

//   // Initial assertions
//   expect(selectedPokemonList).toBeEmptyDOMElement();

//   // Simulate selecting Bulbasaur
//   await userEvent.click(bulbasaurCheckbox);

//   // Verify that the selected Pokémon list updates
//   expect(selectedPokemonList).toHaveTextContent('Bulbasaur');

//   // Verify that the list is sorted alphabetically
//   const listItems = within(selectedPokemonList).getAllByRole('listitem');
//   expect(listItems[0]).toHaveTextContent('Bulbasaur');
// };

// // Story for the state when Pikachu is selected
// export const PikachuSelectedState: Story = (args: any) => (
//   <PokemonProvider>
//         <div style={containerStyle}>
//     <PokemonCheckboxes {...args} />
//     <SelectedPokemonList />
//     </div>
//   </PokemonProvider>
// );

// PikachuSelectedState.args = {};

// PikachuSelectedState.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   const pikachuCheckbox = canvas.getByLabelText('Pikachu');
//   const selectedPokemonList = canvas.getByRole('list');

//   // Initial assertions
//   expect(selectedPokemonList).toBeEmptyDOMElement();

//   // Simulate selecting Pikachu
//   await userEvent.click(pikachuCheckbox);

//   // Verify that the selected Pokémon list updates
//   expect(selectedPokemonList).toHaveTextContent('Pikachu');

//   // Verify that the list is sorted alphabetically
//   const listItems = within(selectedPokemonList).getAllByRole('listitem');
//   expect(listItems[0]).toHaveTextContent('Pikachu');
// };

// // Story for the state when all Pokémon are selected
// export const AllSelectedState: Story = (args: any) => (
//   <PokemonProvider>
//         <div style={containerStyle}>
//     <PokemonCheckboxes {...args} />
//     <SelectedPokemonList />
//     </div>
//   </PokemonProvider>
// );

// AllSelectedState.args = {};

// AllSelectedState.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   const bulbasaurCheckbox = canvas.getByLabelText('Bulbasaur');
//   const charmanderCheckbox = canvas.getByLabelText('Charmander');
//   const squirtleCheckbox = canvas.getByLabelText('Squirtle');
//   const pikachuCheckbox = canvas.getByLabelText('Pikachu');
//   const jigglypuffCheckbox = canvas.getByLabelText('Jigglypuff');
//   const selectedPokemonList = canvas.getByRole('list');

//   // Initial assertions
//   expect(selectedPokemonList).toBeEmptyDOMElement();

//   // Simulate selecting all Pokémon
//   await userEvent.click(bulbasaurCheckbox);
//   await userEvent.click(charmanderCheckbox);
//   await userEvent.click(squirtleCheckbox);
//   await userEvent.click(pikachuCheckbox);
//   await userEvent.click(jigglypuffCheckbox);

//   // Verify that the selected Pokémon list updates
//   expect(selectedPokemonList).toHaveTextContent('Bulbasaur');
//   expect(selectedPokemonList).toHaveTextContent('Charmander');
//   expect(selectedPokemonList).toHaveTextContent('Squirtle');
//   expect(selectedPokemonList).toHaveTextContent('Pikachu');
//   expect(selectedPokemonList).toHaveTextContent('Jigglypuff');

//   // Verify that the list is sorted alphabetically
//   const listItems = within(selectedPokemonList).getAllByRole('listitem');
//   expect(listItems[0]).toHaveTextContent('Bulbasaur');
//   expect(listItems[1]).toHaveTextContent('Charmander');
//   expect(listItems[2]).toHaveTextContent('Jigglypuff');
//   expect(listItems[3]).toHaveTextContent('Pikachu');
//   expect(listItems[4]).toHaveTextContent('Squirtle');
// };
