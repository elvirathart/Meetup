import React from "react";

export const PokemonInfoText: React.FC = () => {
  return (
    <div className="text">
      <h2 style={{ color: "#1ea7fd" }}>Mock Service Worker</h2>
    <p>
    So far all components did not make use of any backend. The component below makes a call to:
    <a href="https://pokeapi.co/"> pokeapi </a> 
     and returns the type of Pikachu. 
     <br />
     When we want to test this in Storybook we can replace the response with our own response.
     You can find our response in handlers.js in the folder mocks. <br />
     <br />
     <strong>Go to storybook to see the result.<br />
     Fix the test by adding the type of our response.</strong>
    </p>
    </div>
  );
};