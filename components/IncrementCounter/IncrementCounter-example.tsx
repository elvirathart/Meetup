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

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
// part 1
  const initialValue = store.getState().counter.value;

  const counterDisplay = canvas.getByText(initialValue.toString()); // toString kan weg 
  const counterButton = canvas.getByText(/Increment/i);

  expect(counterDisplay).toBeInTheDocument();
  // expect(counterDisplay.textContent).toBe(initialValue.toString());

// part 2
  await userEvent.click(counterButton);

  const updatedValue = store.getState().counter.value;
  expect(updatedValue).toBe(initialValue + 1);

  const updatedDisplay = canvas.getByText(updatedValue.toString());
  expect(updatedDisplay).toBeInTheDocument();
  expect(updatedDisplay.textContent).toBe(updatedValue.toString());
};