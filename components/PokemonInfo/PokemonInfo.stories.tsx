import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import PikachuComponent from './PokemonInfo';
import { userEvent, within } from '@storybook/testing-library';
import { handlers } from '../../mocks/handlers';
import { setupWorker } from 'msw/browser';

export default {
  title: "Components/PikachuComponent",
  component: PikachuComponent,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
    msw: true,
  },
} as Meta;
const worker = setupWorker(...handlers);
const Template: StoryFn = (args) => <PikachuComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
worker.start()

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    const button = canvas.getByText('Pikachu');
    await userEvent.click(button)
    await canvas.findByText('Type: electric');
  };
  