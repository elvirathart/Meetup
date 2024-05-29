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
type Story = StoryObj<typeof meta>;

export const Default: Story = (_args: any) => (
  <Provider store={store}>
    <IncrementCounter {..._args} />
  </Provider>
);

Default.args = {};

// Test to check the Redux store
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  /*
   - Get the initial value / the state from the store
   - find the Counter button and counter display elements
   - verify the displayed value is the same as the initial value in the store.
  */

  const initialValue = store.getState().counter.value;

  const counterDisplay = canvas.getByText(initialValue.toString());
  const counterButton = canvas.getByText(/Increment/i);

  expect(counterDisplay).toBeInTheDocument();
  expect(counterDisplay.textContent).toBe(initialValue.toString());

  /*
  - Simulate a click on the Counter button
  - Get the updated value from the store
  - Check if the initial value has been incremented
  - Verify if the displayed value has been updated as well
  */

  await userEvent.click(counterButton);

  const updatedValue = store.getState().counter.value;
  expect(updatedValue).toBe(initialValue + 1);

  const updatedDisplay = canvas.getByText(updatedValue.toString());
  expect(updatedDisplay).toBeInTheDocument();
  expect(updatedDisplay.textContent).toBe(updatedValue.toString());
};
