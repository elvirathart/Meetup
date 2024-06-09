import React from "react";

export const PokemonListText: React.FC = () => {
  return (
    <div className="text">
      <h2 style={{ color: "#1ea7fd" }}>
        PokemonCheckboxes and PokemonList Components
      </h2>
      The components below interact with each other. When you select a checkbox
      in the 'Select Pokemon' component the other component 'Selected Pokemon'
      shows what has been selected in a list.
      <br />
      So far we have been testing one component at a time. Now we want to test
      the interaction between these components, this means we need to render
      both components in Storybook.
      <br />
      We also need to make the logic available to Storybook that has been
      covered in PokemonContext.tsx. This is done by adding the
      &lt;PokemonProvider&gt; around the two components.
      <br />
      To make the display in Storybook similar we also put the components in a
      div with styling.
      <h3>Write tests:</h3>
      <p>
        <strong>
          - Assert that the 'Selected Pokemon' list is empty
          <br />
          - Select two checkboxes with pokemon
          <br />
          - Verify that the 'Selected Pokemon' list is updated and displays the
          selected pokemon
          <br />- Bonus: Verify the list is sorted alphabetically
        </strong>
      </p>
    </div>
  );
};
