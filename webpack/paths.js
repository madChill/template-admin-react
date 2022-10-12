const path = require('path');

const path1 = path.join(__dirname, '../build')
module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: {
    filename: "[hash].[name].js",
    path: path1,
  },
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
