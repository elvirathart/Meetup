import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ClickCounter } from "./ClickCounter";
import '../../styles.css'

const meta: Meta<typeof ClickCounter> = {
  title: "Components/ClickCounter",
  component: ClickCounter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulate click on the "Click Me" button
  const clickMeButton = canvas.getByText(/Click Me/i);
  await userEvent.click(clickMeButton);
  expect(clickMeButton).toHaveTextContent("Click Me (1)");

  // Simulate another click on the "Click Me" button
  await userEvent.click(clickMeButton);
  expect(clickMeButton).toHaveTextContent("Click Me (2)");

  // Simulate click on the "Reset" button
  const resetButton = canvas.getByText(/Reset/i);
  await userEvent.click(resetButton);
  expect(clickMeButton).toHaveTextContent("Click Me (0)");
};
