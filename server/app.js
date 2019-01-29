const env = require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const routesShopHapi = require('./routes/shop')
const routesOrderHapi = require('./routes/order')

const pluginHapiSwagger = require('./plugins/hapi-swagger')

const pluginHapiJoi = require('./plugins/hapi-joi')


const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger,
    ...pluginHapiJoi
  ])

  server.route([
    ...routesHelloHapi,
    ...routesShopHapi,
    ...routesOrderHapi
  ])

  await server.start()
  console.log(`Server running at : ${server.info.uri}`);
};

init()