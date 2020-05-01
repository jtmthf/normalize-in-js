module.exports = {
  launch: {
    defaultViewport: null,
  },
  server: {
    command: '$(yarn bin)/start-storybook -p 9009 --ci --quiet',
    port: 9009,
    launchTimeout: 60000,
  },
};
