import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ClickCounter } from "./ClickCounter";
import "../../assets/styles.css";

/* This is the meta object. The meta object contains metadata 
about the 'CickCounter' component that Storybook makes use of. */
const meta: Meta<typeof ClickCounter> = {
  title: "Components/ClickCounter",
  component: ClickCounter,
  parameters: {
    layout: "centered",
  },
};

/* This object is exported, making it available to Storybook
to use when rendering the story. */
export default meta;
type Story = StoryObj<typeof meta>;

// BasicUsage is a Story = a rendered state of a UI component.
export const BasicUsage: Story = {};

// The tests for the Story BasicUsage start here:
BasicUsage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Get the Button with the Click Me text
  const clickMeButton = canvas.getByText("Click Me (0)");
  // Simulate click on the button and assert the text displayed within the button.
  await userEvent.click(clickMeButton);
  expect(clickMeButton).toHaveTextContent("Click Me (1)");

/* Write two new tests:
- Simulate another click on the "Click Me" button and assert the text
- Simulate click on the "Reset" button and assert the text */
};
