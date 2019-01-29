const env = require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const routesShopHapi = require('./routes/shops')
const routesOrderHapi = require('./routes/orders')

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server();

// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    // 挂载 hapi-swagger 插件
    ...pluginHapiSwagger
    // ...pluginHapiJoi
  ])

  server.route([
    // 创建 api 接口
    ...routesHelloHapi,
    ...routesShopHapi,
    ...routesOrderHapi
  ])

  await server.start()
  console.log(`Server running at : ${server.info.uri}`);
};

init()
