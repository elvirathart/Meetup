import React from "react";

export const IncrementCounterText: React.FC = () => {
  return (
    <div className="text">
      <h2 style={{ color: "#1ea7fd" }}>IncrementCounter Component</h2>
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
      <p>
        <h3>In short how this component works:</h3>
        The current value is read from the counter state in the Redux store.
        When the button is clicked the increment action is dispatched. A reducer
        function handles the increment action by increasing the counter's value.
        The store updates the state and React re-renders the component with the
        new state.
        <br />
        <br />
        If you have a look at the Story Default in the file you see that{" "}
        <strong>Provider</strong> is placed around the IncrementCounter
        component. This provider component is a component that makes everything
        else connectable. It gives our IncrementCounter component the ability to
        use the redux store.
        <br />
        If you have several stories that need this wrapper, you can add
        decorators to the metadata object instead like this:
        <br />
        <strong>
          decorators : [ (Story) =&gt; (&lt;Provider
          store=&#123;store&#125;&gt;&lt;Story/&gt;&lt;/Provider&gt;) ]
        </strong>
        <br />
        <br />
        <strong>
          <h3>Write tests to check the Redux store:</h3>
          Test steps - part 1:
          <br />
          - Get the initial value / the state from the store
          <br />
          - Find the counter display by using the value (text) that should be
          displayed (the initial value).
          <br />
          - Verify that the counter display is in the document.
          <br />
          <br />
          Test steps - part 2:
          <br />
          - Simulate a click on the Counter button
          <br />
          - Get the updated value from the store
          <br />
          - Check if the initial value has been incremented (expect the updated
          value to be initial value + 1).
          <br />- Verify that the updated value is displayed in the document.
        </strong>
      </p>
      Go to Storybook to run the test, interact with the component to change the
      value. Run test again. If you did it right, the test will succeed no
      matter the value.
      <br />
      <br />
    </div>
  );
};
