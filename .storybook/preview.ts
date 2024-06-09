import { initialize, mswDecorator } from 'msw-storybook-addon';
import { handlers } from '../mocks/handlers';

initialize();

export const decorators = [mswDecorator];

export const parameters = {
  msw: { handlers },
};
