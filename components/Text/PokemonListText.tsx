import React from "react";

export const PokemonListText: React.FC = () => {
  return (
    <div className="text">
      <h3 style={{ color: "#1ea7fd" }}>PokemonCheckboxes and PokemonList Components</h3>

        The components below interact with each other. When you select a checkbox 
        in the 'Select Pokemon' component the other component 'Selected Pokemon' shows what has been selected in a list.
        <br />
        So far we have been testing one component at a time. Now we want to test the interaction between these components, 
        this means we need to render both components in Storybook. We also need to make the logic available to Storybook 
        that has been covered in PokemonContext.tsx.
        <br />
        To make the display in Storybook similar we also put the components in a div with styling.
        <p>
        <strong>Write tests:
        <br />
        - Assert that the 'Selected Pokemon' list is empty<br />
        - Select two checkboxes with pokemon<br />
        - Verify that the 'Selected Pokemon' list is updated and displays the selected pokemon<br />
        - Bonus: Verify the list is sorted alphabetically
        </strong>
        </p>
    </div>
  );
};
