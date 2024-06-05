import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import store from "../../store";
import { IncrementCounter } from "./IncrementCounter";
import "../../assets/styles.css";

const meta: Meta<typeof IncrementCounter> = {
  title: "Components/IncrementCounter",
  component: IncrementCounter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IncrementCounter>;

export const Default: Story = (args: any) => (
  <Provider store={store}>
    <IncrementCounter {...args} />
  </Provider>
);

Default.args = {};

// Test to check the Redux store
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // This gets the value from the store (have a look at the files in the store folder)
  const initialValue = store.getState().counter.value;

  // part 1
  const counterDisplay = canvas.getByText(initialValue);
  expect(counterDisplay).toBeInTheDocument();

  // part 2
  const counterButton = canvas.getByText("Increment");
  await userEvent.click(counterButton);

  const updatedValue = store.getState().counter.value;
  expect(updatedValue).toBe(initialValue + 1);

  const updatedDisplay = canvas.getByText(updatedValue);
  expect(updatedDisplay).toBeInTheDocument();
};
