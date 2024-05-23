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

/*
Write tests:
- Assert the content of the button before any interaction.
- Assert the content after 1 click.
- Assert the content after 2 clicks.
- Assert the content after 3 clicks.
*/}

/*
- Finish the RaichuState story.
- Create a Story for the second state.
- Create a Story for the third state.
*/

export const RaichuState: Story = {
  args: {
    initialStateIndex: 0,
  },
};

RaichuState.play = async ({ }) => {
 
};
