const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src'),
    },
  };

  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
    include: path.resolve(__dirname, 'src'),
  });

  return config;
};
