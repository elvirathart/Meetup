import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from 'msw-storybook-addon';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Initialize MSW
initialize();
export const decorators = [mswDecorator];

export default preview;
