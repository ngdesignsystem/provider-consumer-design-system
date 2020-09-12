module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  refs: {
    "Storefront": { 
      title: "Storefront", 
      url: "http://storefront.surge.sh"
    },
    "Backoffice": { 
      title: "Backoffice", 
      url: "http://storeoffice.surge.sh"
    }
   }
};
