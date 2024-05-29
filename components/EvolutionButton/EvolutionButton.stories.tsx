import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from 'react-redux';
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import store from '../../store';
import '../../assets/styles.css';
import { EvolutionButton } from './EvolutionButton';

const meta: Meta<typeof EvolutionButton> = {
  title: "Components/EvolutionButton",
  component: EvolutionButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultState: Story = (args: any) => (
  <Provider store={store}>
    <EvolutionButton {...args} />
    </Provider>
)
DefaultState.args = {}

DefaultState.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole('button');

  /*
Write tests:
- Assert the content (text and color) of the button before any interaction.
- Assert the content after 1 click.
- Assert the content after 2 clicks.
- Assert the content after 3 clicks.
*/

}

/*
- Finish the tests for the PichuState Story below:
*/

export const PichuState: Story = (args: any) => (
<Provider store={store}>
  <EvolutionButton {...args} stateIndex={0} />
</Provider>
)
PichuState.args = {stateIndex: 0};

PichuState.play = async ({canvasElement}) => {
  const canvas = within(canvasElement)

}

/*
- Write a Story for the state when Pikachu is displayed and add tests
*/

/*
- Write a Story for the state when Raichu is displayed and add tests
*/
