import React from "react";

export const ClickCounterText: React.FC = () => {
  return (
    <div className="text">
      <p>
        {/* <strong>Component testen met storybook </strong> <br /> */}
        If you are reading this you made it through the installation and got
        the project running. Congrats! We can now continue with our first
        'assignment'. <br />
        <br />
        Go back to your IDE and navigate to the folder{" "}
        <strong>components</strong>, open the folder{" "}
        <strong>ClickCounter</strong>. <br />
        The component ClickCounter is displayed directly below this text block.
        <br />
        In the ClickCounter folder are all the files associated with this component:
        <br />
        <strong> ClickCounter.css</strong>
        <br />
        <strong>ClickCounter.tsx</strong>
        <br />
        <strong>ClickCounter.stories.tsx</strong>
        <br />
        <strong>answers.ts</strong> (Don't peak, I'm watching you.)

        <br /><br />
        ClickCounter.stories.tsx is the testfile. Open the testfile and check out the structure of the file.
        There are comments explaining the code.
        <br /><br />
        Before continuing writing more tests we are going to start Storybook
        and render the component in an isolated environment:
        <br />
        <strong>npm run storybook</strong>
        <br />
        Storybook opens on port 6006.
        <br />
        On the left you can find a sidebar with components. 
        The file structure is determined by the meta object in the stories file.
        <br />
        Select the ClickCounter folder and open <strong>Basic Usage</strong>. 
        You can now see the component and interact with it.
        <br />
        Below the component you can find a tab called <strong>Interactions</strong>.
        Select this tab to see the test. Click around to get familiar with the environment.<br /><br />
        <strong>Write two new tests:<br /></strong>
        - Simulate another click on the "Click Me" button and assert the text<br />
        - Simulate click on the "Reset" button and assert the text<br />

      </p>
    </div>
  );
};
