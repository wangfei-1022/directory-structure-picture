const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    DIRTREE: require('./dir.js'),
  }
}

const markdownPath = path.join(__dirname, 'README.md');
config.transforms.DIRTREE()
// markdownMagic(markdownPath, config);