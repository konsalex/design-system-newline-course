import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default {
  framework: '@storybook/react-vite',
  features: {
    storyStoreV7: true,
  },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  docs: {
    autodocs: true,
    docsPage: true,
    defaultName: 'Docs',
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      build: {
        rollupOptions: {
          external: ['@storybook/window'],
        },
      },
      // Add storybook-specific dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['@newline-ds/foundation', '@newline-ds/react'],
      // },
      resolve: {
        alias: {
          '@newline-ds/foundation/src': path.resolve(
            __dirname,
            '../../foundation/src'
          ),
          '@newline-ds/react/src': path.resolve(__dirname, '../../react/src'),
        },
      },
    });
  },
};
