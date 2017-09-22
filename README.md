# 
Creates a map pictrue about directory structrue.
输出当前目录的结构图

## Install

```bash
npm install -g directory-structrue-pictrue
```

## Usage
在需要生成目录位置运行命令，
```bash
$ create-pic
```
如果该位置有README.md文件，则直接将结果写入。否则创建README.md再写入结果，同时在控制台打印出了当前的目录结果。结果可见如下所示：

## Result
<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./&depth=1) -->
```bash
directory-structure-picture/
├── bin/
│   └── dir
├── lib/
│   ├── archy.js
│   ├── dir.js
│   └── index.js
├── LICENSE
├── package.json
└── README.md
```
<!-- AUTO-GENERATED-CONTENT:END -->