import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { WebSocketServer } from 'ws'
import { getFileJsonData } from './utils/file_utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 创建websocket对象
const wss = new WebSocketServer({
  port: 9998,
})

export function createSocket() {
  // 对客户端连接事项进行监听，client代表的是客户端连接 socket对象
  wss.on('connection', (client, _req) => {
    // console.log('client', client)
    // console.log('req.url', req.url)
    // console.log('req.headers', req.headers)
    // console.log('req.headers.cookie', req.headers.cookie)

    // 监听客户端向服务端发送数据
    client.on('message', async (msg) => {
      // console.log('客户端发送数据给服务端了：', msg.toString())
      const payload = JSON.parse(msg.toString())
      // console.log('payload', payload)
      const action = payload.action
      if (action === 'getData') {
        let filePath = `./data/${payload.chartName}.json`
        filePath = path.join(__dirname, filePath)
        // 读取到文件内容
        const result = await getFileJsonData(filePath)
        // console.log(result)
        // 根据请求的路径返回对应的内容
        payload.data = JSON.parse(result)
        // 返回给客户端
        client.send(JSON.stringify(payload))

        // 模拟数据更新
        // setInterval(() => {
        //   payload.data[1].value += 100
        //   client.send(JSON.stringify(payload))
        // }, 2000)
      }
      else {
        // 原封不动的将所接收到的数据转发给处于连接状态的每一个客户端
        // 所有客户端的连接 wss.clients
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(payload))
        })
      }
    })
  })
}
