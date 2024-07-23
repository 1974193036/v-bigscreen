import Koa from 'koa'
import responseDurationMiddleware from './middleware/koa_response_duration.js'
import responseHeaderMiddleware from './middleware/koa_response_header.js'
import responseDataMiddleware from './middleware/koa_response_data.js'
import { createSocket } from './web_socket_service.js'

const app = new Koa()

// 用于计算耗时最好第一层中间件
app.use(responseDurationMiddleware)

app.use(responseHeaderMiddleware)

app.use(responseDataMiddleware)

const port = 7777

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})

createSocket()
