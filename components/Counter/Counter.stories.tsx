import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from 'react-redux';
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import store from '../../store';
import {Counter} from './Counter'; // Assuming Counter is exported as default from './Counter'
import '../../assets/styles.css';

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (_args: any) => (
    <Provider store={store}>
      <Counter {..._args} />
    </Provider>
  );
  
  Default.args = {}; 
  
  // Test to check the Redux store
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Get the initial value from the store
  const initialValue = store.getState().counter.value;

  // Simulate a click on the Counter component
  const counterButton = canvas.getByText(/Increment/i);
  await userEvent.click(counterButton);

  // Get the updated value from the store
  const updatedValue = store.getState().counter.value;

  // Check if the value has been incremented
  expect(updatedValue).toBe(initialValue + 1);
};