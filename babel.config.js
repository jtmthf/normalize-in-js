module.exports = (api) => {
  const isTest = api.env('test');

  return {
    babelrcRoots: ['.', 'packages/*'],
    presets: [
      [
        '@babel/preset-env',
        isTest
          ? {
              targets: {
                node: 'current',
              },
            }
          : { modules: false },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
  };
};
