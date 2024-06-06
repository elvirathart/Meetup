import React from "react";

export const EvolutionButtonText: React.FC = () => {
  return (
    <div className="text">
      <h2 style={{ color: "#1ea7fd" }}>EvolutionButton Component</h2>

        Below you can find the EvolutionButton component. Click to see how it
        works. Navigate to the testfile and ...
        <br />
        <h3>Write tests - part 1:</h3>
        <p>
        <strong>
        - Assert the content of the button before any interaction.
        <br />
        - Assert the content after 1 click.
        <br />
        - Assert the content after 2 clicks.
        <br />
        - Assert the content after 3 clicks.
        </strong>
        <br />
        <br />
        There are several ways to test the same. We are now going to make new
        stories for the same component to test each state of the button
        separately.
        <br />
        We also want to be a bit more efficient this time. Instead of clicking
        through all the states to get to a certain state, we are going to make
        use of <strong>args</strong>.
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
    
          <h3>Write stories and tests - part 2:</h3>
        <strong>
        - Finish the PichuState story by adding a test. The skeleton for the story is already there.
        <br />
        - Create a Story for the second state.
        <br />
        - Create a Story for the third state.
        </strong>

        <h3>Add documentation:</h3>
        This button has several states and because we now created a story for each state it would be nice to document this somewhere.
        We can add a tag to the metadata that automatically generates a documentation page about our component.<br />
        <strong>Go to the stories file and add in the metadata object: tags: ["autodocs"],</strong>
        Go to Storybook, check the folder EvolutionButton to find the file 'Docs'. 
        In this file you can now find each state of the button and its code.
        <br /><br />
    </div>
  );
};
