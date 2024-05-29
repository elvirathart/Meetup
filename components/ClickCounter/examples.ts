import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ClickCounter } from "./ClickCounter";
import "../../assets/styles.css";

const meta: Meta<typeof ClickCounter> = {
  title: "Components/ClickCounter",
  component: ClickCounter,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {};

BasicUsage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const clickMeButton = canvas.getByText(/Click Me/i);
  await userEvent.click(clickMeButton);
  expect(clickMeButton).toHaveTextContent("Click Me (1)");

  await userEvent.click(clickMeButton);
  expect(clickMeButton).toHaveTextContent("Click Me (2)");

  const resetButton = canvas.getByText(/Reset/i);
  await userEvent.click(resetButton);
  expect(clickMeButton).toHaveTextContent("Click Me (0)");
};
