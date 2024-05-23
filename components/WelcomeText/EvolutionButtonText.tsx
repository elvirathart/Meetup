import React from "react";

export const EvolutionButtonText: React.FC = () => {
  return (
    <div className="text">
      <p>
        {/* <strong>Component testen met storybook </strong> <br /> */}
        Below you can find the EvolutionButton component. Click to see how it
        works. Navigate to the testfile and ...
        <br />
        <br />
        <strong>Write tests:</strong>
        <br />
        - Assert the content of the button before any interaction.
        <br />
        - Assert the content after 1 click.
        <br />
        - Assert the content after 2 clicks.
        <br />
        - Assert the content after 3 clicks.
        <br />
        <br />
        There are more ways to test the same. We are now going to make new
        stories for the same component to test each state of the button
        separately.
        <br />
        We also want to be a bit more efficient this time. Instead of clicking
        through all the states to get to a certain state, we are going to make
        use of <strong>args</strong>
      </p>
      <p style={{ color: "#1ea7fd" }}>
        <strong>ARGS</strong><br />
        "A story is a component with a set of arguments that define how the
        component should render. Args are Storybook's mechanism for defining
        those arguments in a single JS object. Args can be used to dynamically
        change props, slots, styles, inputs, etc. It allows Storybook and its
        addons to live edit components. You do not need to modify your
        underlying component code to use args."
      </p>
      <p>
        The skeleton for the story of the initial state is already there.
        {/* <br /> */}
        <br />
        - Finish the RaichuState story.
        <br />
        - Create a Story for the second state.
        <br />
        - Create a Story for the third state.
        <br />
      </p>
    </div>
  );
};
