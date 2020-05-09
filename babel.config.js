Error.stackTraceLimit = Infinity;

module.exports = (api) => {
  const isTest = api.env('test');

  return {
    babelrcRoots: ['.', 'packages/*'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: isTest ? { node: 'current' } : { esmodules: true },
          modules: isTest ? 'auto' : false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
  };
};
