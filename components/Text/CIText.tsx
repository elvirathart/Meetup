import React from "react";

export const CIText: React.FC = () => {
  return (
    <div className="text">
      <h3 style={{ color: "#1ea7fd" }}>Running the test in a CI pipeline</h3>

    Now that we have written our tests, adding them to a CI pipeline would be the obvious next step.<br />
    <strong>
        Go to the package.json<br />
        Look for the ci command<br />
        Run the command in your terminal
        </strong><br />
    Done!
    <p style={{ color: "#1ea7fd" }}>
    <strong>CI COMMAND</strong>
    <br />
    The command adds styling to the console output and also specifies the succes condition. <br />
    More importantly, the command we just ran, concurrently runs two sets of commands:<br />
    - Builds the Storybook static files and serves them on port 6006<br />
    - Waits for the Storybook server to be available on port 6006 and then runs the tests
    </p>

    </div>
  );
};
