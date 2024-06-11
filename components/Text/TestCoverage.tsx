import React from "react";

export const TestCoverageText: React.FC = () => {
  return (
    <div className="text">
      <h2 style={{ color: "#1ea7fd" }}>Test Coverage Reporting</h2>
      Now that we have written our tests, it would be nice to have a report with our test coverage.

      <br />
      <strong>
        npm install @storybook/addon-coverage --save-dev
        <br />
        Go to main.ts
        <br />
        Add in addons: '@storybook/addon-coverage',
      </strong>
      <br />
      Make sure you have Storybook running (npm run storybook). And run the following command:
      <br />
      <strong>
      npm run test-storybook -- --coverage
      </strong>
      <br />
    </div>
  );
};
