# h5 模板

一个 基于 vue3 + element-plus 的 pc 模板工程。

## 特色

- 使用 vite 作为构建工具， 提升开发体验。
- SFC 中使用 script setup。
- 集成 [阿里的前端规范（eslint、stylelist、commitlint）](https://github.com/alibaba/f2e-spec)。
- 集成 yapi mock 及生成 ts type 能力。

## 技术栈

技术栈：vue3 + typescript + sass
路由： vue-router 4
状态库： vuex 4
ui 库： element-plus
打包器： vite (node >= 12.0.0)

## 兼容性

Edge ≥ 79 Firefox ≥ 78 Chrome ≥ 64 Safari ≥ 12

## 开发（dev）

1. 初始化<br>
   主要为安装依赖和安装 husky

```sh
npm run init
```

2. 启动开发模式

```sh
npm run dev
```

## 校验（lint）

检验所有。

```sh
npm run lint
```

只进行 eslint 校验
eslint

```sh
npm run lint:eslint
```

只进行 stylelint 校验
stylelint

```
npm run lint:stylelint
```

## 打包（build）

1. 安装依赖

```sh
npm install
```

2. 启动打包

```sh
npm run build
```

## 预览（preview）

用于本地预览线上(build 内容)。会在本地起一个 web 服务预览

```sh
npm run build & npm run preview
```

## 生成 api

1. 在 ytt.config.ts 文件配置 serverUrl，及项目 token。
2. 执行 npm run api 生成 api 请求体及相应类型到 src/api 目录。

```sh
npm run api
```

3. 使用方式为 直接 import 请求函数使用。

> 注意： npm run api 会覆盖 src/api 目录，该文件夹不允许手动修改，仅用于自动生成，以防被覆盖。

## mock 数据

mock 数据结合 yapi 平台。更改.env 的 VITE_API_MODEL 环境变量来切换 api 请求的 域名。

- local: 本地。空；
- test: 使用测试数据。配置与 yapi 的配置环境，如遇跨域问题请使用 local 和配置代理实现代理测试数据；
- prod: 使用线上数据。配置与 yapi 的配置环境，如遇跨域问题请使用 local 和配置代理实现代理线上数据；
- mock: mock 数据。有 yapi 提供 mock 数据，可在 yapi 配置详细 mock 规则；
  > 只在 dev 环境生效

## 规范

使用阿里配套的 eslint + stylelint + commitlint 规范。
https://github.com/alibaba/f2e-spec

### git commit

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

type: 类型。必填。值如下<br>

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style：格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

scope: 范围。可选。可以是指定提交更改位置的任何内容。<br>
subject: 主题。必填<br>
body: 正文。可选<br>
footer: 页脚。可选<br>

#### 示例

```git
git commit -m 'feat(xx-xx模块): 新增xxx模块'
----
git commit -m 'style: eslint 修复'
----
git commit -m 'chore(package.json): 升级xxx依赖版本'
...
```
