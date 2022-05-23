# Osmanthus Stack

nodejs monorepo


+ [Rush](https://rushjs.io/zh-cn/)
+ [VitePress](https://vitepress.vuejs.org/)

## 安装 rush
```shell
npm install -g @microsoft/rush
```

## 安装依赖
```shell
rush update
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
