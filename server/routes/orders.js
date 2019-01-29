const Joi = require('joi')

const GROUP_NAME = 'orders'
module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply()
    },
    config: {
      tags: ['api', 'GROUP_NAME'],
      description: '创建订单',
      validate: {
        // 对应的嵌套入参校验
        payload: {
          goodsList: Joi.array().items(
            Joi.object().keys({
              goods_id: Joi.number().integer(),
              count: Joi.number().integer()
            })
          )
        }
      }
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, reply) => {
      reply('4444444')
    },
    config: {
      tags: ['api', 'GROUP_NAME'],
      description: '支付某条订单',
      // 动态路由的 params 验证
      validate: {
        params: {
          orderId: Joi.string().required()
        }
      }
    }
  }
]
