# commit 自动提交配置

Commitizen是一个基于命令行的交互式工具，它可以帮助开发者规范化提交Git提交信息，符合Angular Commit Message Conventions的规范，从而更好地管理代码变更历史。

Commitizen提供了一个友好的命令行交互界面，让开发者根据规范选择提交信息的类型、影响范围等内容，自动生成符合规范的Git提交信息。

Commitizen可以与Git结合使用，使得开发者可以使用commitizen命令代替git commit命令提交代码变更，并且生成的提交信息格式更加规范化和易于管理。

## 1. 安装自动提交的工具

1. npm 全局安装
```txt
npm install -g commitizen 
npm install -g cz-conventional-changelog
```
2. 命令行跳过配置(可以先跳过)
```txt
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```
3. 使用commitizen生成符合AngularJS规范的提交说明
```txt
commitizen init cz-conventional-changelog --save --save-exact
```
4. 使用git cz规范提交commit信息


## 2. 定制自动化提交信息

cz-customizable是Commitizen的一个插件，可以帮助开发者自定义符合Angular Commit Message Conventions的提交信息格式和内容。
cz-customizable提供了一些配置选项，让开发者可以根据项目的需要自定义提交信息的格式和内容。

cz-customizable的配置选项包括：

types: 定义提交信息的类型，如feat（新功能）、fix（修复Bug）等。
scopes: 定义提交信息的影响范围，如模块、组件等。
allowCustomScopes: 是否允许自定义影响范围。
scopeOverrides: 定义不同类型的提交信息对影响范围的要求。
messages: 定义提交信息的模板，包括标题、正文、页脚等内容。
allowBreakingChanges: 是否允许提交破坏性变更。

1. 安装 cz-customizable
```txt
npm install cz-customizable --save-dev
```
2. 添加以下配置到package.json中
```json
"config": {
    "commitizen": {
    "path": "node_modules/cz-customizable"
    }
}
```
3. 项目根目录下创建.cz-config.js文件来自定义提示,配置如下：

```js
module.exports = {
    // 可选类型
    types: [
      {
        value: ':sparkles: feat',
        name: '✨ feat:      新功能'
      },
      {
        value: ':bug: fix',
        name: '🐛 fix:      修复'
      },
      {
        value: ':memo: docs',
        name: '📝 docs:      文档变更'
      },
      {
        value: ':lipstick: style',
  
        name: '💄 style:     代码格式(不影响代码运行的变动)'
      },
      {
        value: ':recycle: refactor',
  
        name: '♻️  refactor:    重构 (既不增加feature, 也不是修复bug)'
      },
      {
        value: ':zap: perf',
        name: '⚡️ perf:      性能优化'
      },
      {
        value: ':white_check_mark: test',
        name: '✅ test:      增加测试'
      },
      {
        value: ':wrench: chore',
        name: '🔧 chore:     构建过程或辅助工具的变动'
      },
      {
        value: ':rewind: revert',
        name: '⏪ revert:     回退'
      },
      {
        value: ':rocket: build',
        name: '🚀 build:     打包'
      }
    ],
    // 步骤
    messages: {
      type: '请选择提交的类型：',
      customScope: '情输入修改的范围(可选)',
      subject: '请简要描述提交(必填)',
      body: '请输入详细描述(可选)',
      footer: '请输入要关闭的issus(可选)',
      confirmCommit: '确认要使用以上信息提交？(y/n)'
    },
    // 默认长度72
    subjectLimit: 72
};
```

## 3. 增加对自动生成 commit 信息的校验

1. 安装 @commitlint/config-conventional
```txt
npm i @commitlint/config-conventional @commitlint/cli -D
```
2. 在根目录创建commitlint.config.js文件，配置commitlint
```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

若您使用cz-customizable了则需要使用以下配置方案
```txt
npm install commitlint-config-cz --save-dev
```
然后加入commitlint校验规则配置：
```js
module.exports = {
  extends: [
    'cz'
  ]
};
```