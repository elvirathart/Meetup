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

  /*
  Test steps - part 1
   - Find the counter display by using the value (text)
     that should be displayed (the initial value).
   - Verify that the counter display is in the document.
  */

  /*
  Test steps - part 2
  - Simulate a click on the Counter button
  - Get the updated value from the store
  - Check if the initial value has been incremented 
    (expect the updated value to be initial value + 1).
  - Verify that the updated value is displayed in the document.
  */
};
