import '@fontsource-variable/baloo-2';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/globals.css';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
