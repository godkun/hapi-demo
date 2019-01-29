module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hello hapi')
    },
    config: {
      // 通过增加config字段的 tags:['api'] 就可以将路由暴露为 Swagger 文档
      tags: ['api', 'tests'],
      // 描述接口的内容，同时用于功能注释
      description: '测试hello api'
    }
  }
]
