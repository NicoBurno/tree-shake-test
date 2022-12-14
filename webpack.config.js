const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'simple': path.resolve(__dirname, 'src', 'index-simple.mjs'),
    'self-invoked': path.resolve(__dirname, 'src', 'index-self-invoked.mjs'),
    'self-invoked-comment': path.resolve(__dirname, 'src', 'index-self-invoked-comment.mjs'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
