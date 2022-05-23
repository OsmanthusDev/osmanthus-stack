# 概览

## Init
```shell
npm install -g @ionic/cli@latest
ionic start osmanthus-mobile blank --type vue

npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
npm install @ionic/pwa-elements

npm install @ionic/vue@latest @ionic/vue-router@latest
npm install vue-virtual-scroller@next

ionic integrations enable capacitor
ionic capacitor add android
ionic capacitor add ios

ionic capacitor sync android
ionic capacitor sync ios
```

## Install Ionic Tooling
```shell
npm install -g @ionic/cli@latest native-run cordova-res
```

## 运行
```shell
ionic serve
```

## 构建
```shell
ionic build
ionic capacitor copy
ionic capacitor sync
ionic capacitor build android --prod --release
```

## 打开
```shell
ionic cap open android
```
