import type { Preview } from "@storybook/react";
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },loaders: [mswLoader],
  },
};

export default preview;
