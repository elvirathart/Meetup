import React from "react";

export const IncrementCounterText: React.FC = () => {
  return (
    <div className="text">
      <h3 style={{ color: "#1ea7fd" }}>IncrementCounter Component</h3>
      This component interacts with a Redux store to display and increment the
      counter value.
      <br />
      <p style={{ color: "#1ea7fd" }}>
        <strong>REDUX</strong>
        <br />
        Redux is a state management library for JS applications, commonly used
        with React. It provides a centralized store to manage the state of an
        application, allowing for predictable state updates and easier
        debugging.
        <br />
        - Store: Holds the whole state of the application.
        <br />
        - Actions: Plain objects describing what happened.
        <br />
        - Reducers: Functions that determine changes to the state based on
        actions.
        <br />- Dispatch: A function to send actions to the store.
      </p>
      <br />
      <strong>In short how this component works:</strong> The current value is
      read from the counter state in the Redux store. When the button is clicked
      the increment action is dispatched. A reducer function handles the
      increment action by increasing the counter's value. The store updates the
      state and React re-renders the component with the new state.
      <br />
      <br />
      <p>
        <strong>
          Write tests in the Story Default to check the Redux store:
          <br /><br />
          Test steps - part 1:<br />
          - Get the initial value / the state from the store<br />
          - find the Counter button and Counter display elements<br />
          - verify the displayed value is the same as the initial value in the store<br />
          <br />
          Test steps - part 2:<br />
          - Simulate a click on the Counter button<br /> 
          - Get the updated value from the store<br />
          - Check if the initial value has been incremented.<br />
          - Verify if the displayed value has been updated as well
        </strong>
      </p>
      Go to Storybook to run the test, interact with the component to change the value.
       Run test again. If you did it right, the test will succeed no matter the value.
      <br />
      <br />
    </div>
  );
};
