import React from "react";

export const ClickCounterText: React.FC = () => {
  return (
    <div className="text">
      <h3 style={{ color: "#1ea7fd" }}>ClickCounter Component</h3>
      <p>
      The component ClickCounter is displayed directly below this text block.
      <br /><br />
        Go back to your IDE and navigate to the folder
        <strong> components</strong>.<br /> 
        Open the folder
        <strong> ClickCounter</strong>.
        <br /><br />
        In the ClickCounter folder are the files that belong to this
        component:
        <br />
        <strong>ClickCounter.tsx</strong> = the react file with the source code
        <br />
        <strong>ClickCounter.stories.tsx</strong> = the testfile
        <br />
        <strong>ClickCounter-example.ts</strong> = (Don't peak, I'm watching you.)
        <br />
        <br /> (Usually all .stories files can be put in a folder next to
        components, to make our lives easier during this workshop they are
        conveniently placed in the folder of their component)
        <br />
        <br />
        <strong>Open the testfile and check out the structure of the file.</strong> 
        <br />
        There are comments in the file explaining the code.
        <br />
        <br />
        Before we are going to write tests we are going to start Storybook and
        render the component in an isolated environment:
        <br />
        <strong>npm run storybook</strong>
        <br />
        Storybook opens on port 6006.
        <br />
        On the left you can find a sidebar with components. The file structure
        is determined by the meta object in the stories file.
        <br />
        Select the ClickCounter folder and open <strong>BasicUsage</strong>. You
        can now see the component and interact with it.
        <br />
        Below the component you can find a tab called
        <strong> Interactions</strong>. Select this tab to see the test. Click
        around to get familiar with the environment.
        </p>
        <p style={{ color: "#1ea7fd" }}>
          <strong>STORIES</strong>
          <br />
          BasicUsage is what Storybook calls a Story. You can also see this in
          the stories testfile.
          <br />
          <strong>A story is a rendered state of a UI component.</strong> A
          component can have multiple states, so it can also have multiple
          stories. Within a story you can have multiple tests asserting
          different parts of the component.
        </p>
        For our first tests we are keeping it simple. The buttons of the
        ClickCounter component do not have complicated states. We are going to
        write tests within the existing story BasicUsage. The first test is
        already there as example.
        <br />
        <br />
        <p>
        <strong>
          Write two new tests and run them in Storybook:
          <br />
          - Simulate another click on the "Click Me" button and assert the text
          <br />
          - Simulate click on the "Reset" button and assert the text
          <br />
        </strong>
        </p>
    </div>
  );
};
