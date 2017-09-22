const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const matchCommentBlock = function(matchWord) {
  return new RegExp(`(?:\\<\\!--(?:.|\\r?\\n)*?${matchWord}:START(?:.|\\r?\\n)*?\\()(.*)\\)(?:.|\\r?\\n)*?<!--(?:.|\\r?\\n)*?${matchWord}:END(?:.|\\r?\\n)*?--\\>`, 'g')
}

const config = {
  transforms: {
    DIRTREE: require('./dir.js'),
  },
  matchWord: "AUTO-DIRECTORY-STRUCTRUE",
  DEBUG: true
}

var read = process.cwd()
const outputFilePath = path.join(read, './README.md')
const isExist = fs.existsSync(outputFilePath)

if(!isExist){
  fs.createWriteStream(outputFilePath)
}

let content = fs.readFileSync(outputFilePath, 'utf-8')
const regex = matchCommentBlock(config.matchWord)


const match = content.length > 0 ? content.match(regex) : false

if (!match) {
  content += "<!-- AUTO-DIRECTORY-STRUCTRUE:START (DIRTREE:dir=./&depth=1) --><!-- AUTO-DIRECTORY-STRUCTRUE:END -->"
  fs.writeFileSync(outputFilePath, content)
}

const markdownPath = path.join(read, './README.md');

markdownMagic(markdownPath, config);