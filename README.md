# hapi-demo
这是一个用 hapi + swagger + joi 的 demo 。

## 使用 env2
通过 env2 来隐藏关键性的数据配置，同时暴露 .env.sample

## 路由配置
将路由单独分离到 routes 目录中

## 插件配置
将插件单独分离到 plugins 目录中

## 配置
统一放在config目录下

## swagger 功能
可以自动生成接口文档

## joi
可以进行参数校验

## 如何开始
```
git clone git@github.com:godkun/hapi-demo.git

cd hapi-demo/server

npm i

```

然后将 `.env.sample` 文件重命名为 .env 然后执行 node app.js 就可以启动服务了。

打开 http://127.0.0.1:3000/documentation#/ 查看 swagger 效果

![image](https://user-images.githubusercontent.com/26134303/51919573-a9ecd480-241e-11e9-9f0e-085e61a6775c.png)

