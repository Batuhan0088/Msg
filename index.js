const { API } = require('easy-api.ts')
const api = new API({
  port: process.env.PORT || 3000,
  database: {
    enabled: true,
    type: 'default',
  }
})
api.routes.load('./routes').then(() => {
  api.connect()
})