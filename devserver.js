const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const compiler = webpack({
  // webpack options
  mode: 'development',
  plugins: [new BundleAnalyzerPlugin()]
});
const express = require('express');
const app = express();

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
