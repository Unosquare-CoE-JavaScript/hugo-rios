module.exports = {
  stories: [
    "../src/**/*.stories.jsx"
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['pdf'],
        },
        scriptsPackageName: '@my/react-scripts',
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
}