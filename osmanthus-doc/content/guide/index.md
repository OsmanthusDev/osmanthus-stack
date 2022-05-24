# 项目指南


## 参考文档
+ [Rush](https://rushjs.io/zh-cn/)
+ [VitePress](https://vitepress.vuejs.org/)

## 目录结构
```txt
.
├── common                 rush 目录
├── osmanthus-backend      Express 后端接口服务
├── osmanthus-doc          文档
├── osmanthus-lib          通用库
├── osmanthus-mobile       ionic 的移动应用
├── osmanthus-spa          vue web页面
├── osmanthus-toolchain    工具库
├── README.md
└── rush.json              rush 配置文件
```

## 初始化
```shell
mkdir osmanthus-stack
rush init

mkdir osmanthus-doc
npm init
npm install -D vitepress

mkdir osmanthus-lib
npm init
mkdir osmanthus-toolchain
npm init

mkdir osmanthus-backend
npm init

mkdir osmanthus-spa

mkdir osmanthus-mobile

mkdir osmanthus-ssr

mkdir osmanthus-bff

mkdir osmanthus-server
cd osmanthus-server

rush update

```
