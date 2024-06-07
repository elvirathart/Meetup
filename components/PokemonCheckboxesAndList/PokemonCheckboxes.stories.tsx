import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { PokemonCheckboxes } from './PokemonCheckboxes';
import { SelectedPokemonList } from './SelectedPokemonList';
import { PokemonProvider } from './PokemonContext';
import "../../assets/styles.css";

const meta: Meta<typeof PokemonCheckboxes> = {
  title: 'Components/PokemonInteraction',
  component: PokemonCheckboxes,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PokemonCheckboxes>;

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  fontFamily: "nunito sans"
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

  const selectedPokemonList = canvas.getByRole('list'); 
/*
Write tests:
- Expect that the 'selectedPokemonList' is empty - hint: toBeEmptyDomElement()
- Select two checkboxes with pokemon - hint: getByLabelText(..) to find element, use fireEvent to click
- Verify that the 'selectedPokemonList' is updated and displays the selected pokemon
*/

// Bonus: Verify the list is sorted alphabetically

const listItems = canvas.getAllByRole('listitem'); // listitems is array


};

