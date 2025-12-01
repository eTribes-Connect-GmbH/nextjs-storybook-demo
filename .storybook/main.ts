import type { StorybookConfig } from '@storybook/nextjs-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/components/**/story.tsx', '../docs/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal: async config => ({ ...config, plugins: [...(config.plugins ?? []), svgr()] })
};

export default config;
