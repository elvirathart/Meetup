import { Meta, StoryObj } from '@storybook/react';
import { EvolutionButton } from './EvolutionButton';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import '../../assets/styles.css'

const meta: Meta<typeof EvolutionButton> = {
  title: 'Components/EvolutionButton',
  component: EvolutionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Get the button element
  const button = canvas.getByRole('button');

  // Initial state should be Pichu with yellow background
  expect(button).toHaveTextContent('Pichu');
  expect(button).toHaveStyle('background-color: rgb(255, 255, 0)');

  // Click to change to Pikachu
  await userEvent.click(button);
  expect(button).toHaveTextContent('Pikachu');
  expect(button).toHaveStyle('background-color: rgb(255, 165, 0)');

  // Click to change to Raichu
  await userEvent.click(button);
  expect(button).toHaveTextContent('Raichu');
  expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');

  // Click to cycle back to Pichu
  await userEvent.click(button);
  expect(button).toHaveTextContent('Pichu');
  expect(button).toHaveStyle('background-color: rgb(255, 255, 0)');
};


export const InitialState: Story = {
    args: {
      initialStateIndex: 0,
    },
  };
  
  InitialState.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText(/The Pokemon Evolution Button - Click me!/i);
    expect(button).toHaveTextContent("Pichu");
    expect(button).toHaveStyle({ backgroundColor: 'yellow' });
  };
  
  // Second State Story
  export const PikachuState: Story = {
    args: {
      initialStateIndex: 1,
    },
  };
  
  PikachuState.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText(/The Pokemon Evolution Button - Click me!/i);
    expect(button).toHaveTextContent("Pikachu");
    expect(button).toHaveStyle({ backgroundColor: 'orange' });
  };
  
  // Third State Story
  export const RaichuState: Story = {
    args: {
      initialStateIndex: 2,
    },
  };
  
  RaichuState.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText(/The Pokemon Evolution Button - Click me!/i);
    expect(button).toHaveTextContent("Raichu");
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  };