import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import store from "../../store";
import "../../assets/styles.css";
import { EvolutionButton } from "./EvolutionButton";

const meta: Meta<typeof EvolutionButton> = {
  title: "Components/EvolutionButton",
  component: EvolutionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EvolutionButton>;

export const DefaultState: Story = {};

DefaultState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button");

  // Default / state 0: Pichu - yellow background
  expect(button).toHaveTextContent("Pichu");
  expect(button).toHaveStyle("background-color: rgb(255, 255, 0)");

  //  Pikachu
  await userEvent.click(button);
  expect(button).toHaveTextContent("Pikachu");
  expect(button).toHaveStyle("background-color: rgb(255, 165, 0)");

  // Click to change to Raichu
  await userEvent.click(button);
  expect(button).toHaveTextContent("Raichu");
  expect(button).toHaveStyle("background-color: rgb(255, 0, 0)");

  // Click to cycle back to Pichu
  await userEvent.click(button);
  expect(button).toHaveTextContent("Pichu");
  expect(button).toHaveStyle("background-color: rgb(255, 255, 0)");
};

// PichuState
export const PichuState: Story = (args: any) => (
  <EvolutionButton {...args} stateIndex={0} />
);

PichuState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button");
  expect(button).toHaveTextContent("Pichu");
  expect(button).toHaveStyle("background-color: rgb(255, 255, 0)");
};

// PikachuState
export const PikachuState: Story = (args: any) => (
  <EvolutionButton {...args} stateIndex={1} />
);

PikachuState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button");
  expect(button).toHaveTextContent("Pikachu");
  expect(button).toHaveStyle("background-color: rgb(255, 165, 0)");
};

// RaichuState
export const RaichuState: Story = (args: any) => (
  <EvolutionButton {...args} stateIndex={2} />
);

RaichuState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button");
  expect(button).toHaveTextContent("Raichu");
  expect(button).toHaveStyle("background-color: rgb(255, 0, 0)");
};
