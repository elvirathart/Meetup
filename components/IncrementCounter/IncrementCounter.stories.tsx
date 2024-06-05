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

  // TODO explain
  const initialValue = store.getState().counter.value;

  /*
  Test steps - part 1
   - Get the initial value / the state from the store
   - find the counter display element (text / number) by using the displayed value
   - verify the displayed value is the same as the initial value in the store.
  */

  /*
  Test steps - part 2
  - Simulate a click on the Counter button
  - Get the updated value from the store
  - Check if the initial value has been incremented (expect the updated value to be initial value + 1)
  - Verify if the displayed value has been updated as well
  */

};
