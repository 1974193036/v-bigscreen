export default class SocketService {
  static instance = null
  static get Instance() {
    if (!this.instance)
      this.instance = new SocketService()

    return this.instance
  }

  ws = null
  connected = false
  connectRetryCount = 0
  callBackMapping = {}
  setIntervalSocketPush = null

  connect() {
    if (!window.WebSocket)
      return console.error('浏览器不支持websocket')

    this.ws = new WebSocket('ws://localhost:9998')
    this.ws.onopen = () => {
      console.log('==== 服务器连接成功 ====')
      this.connected = true
      this.connectRetryCount = 0
      this.sendPing()
    }
    // 链接失败或连接后断开会调用
    this.ws.onclose = (e) => {
      console.log('==== 连接服务器失败 ====', e)
      this.connected = false
      this.connectRetryCount++
      if (e.code === 1000)
        return
      setTimeout(() => {
        this.connect()
      }, this.connectRetryCount * 500)
    }

    this.ws.onmessage = (e) => {
      const recvData = JSON.parse(e.data)
      // console.log('从服务器获取到了数据', recvData)
      const socketType = recvData.socketType
      const { action } = recvData
      if (action === '/login') {
        console.log('登录实效，跳转页面，同时手动关闭ws')
        return
      }

      if (action === 'ping')
        return

      if (action === 'getData') {
        // const realData = JSON.parse(recvData.data)
        const realData = recvData.data
        recvData.data = realData
        this.callBackMapping[socketType] && this.callBackMapping[socketType](recvData)
      }
    }
  }

  send(data) {
    if (this.connected) {
      this.ws.send(JSON.stringify(data))
    }
    else {
      setTimeout(() => {
        this.send(data)
      }, 1000)
    }
  }

  // 发送心跳，避免断线
  sendPing(time = 15000, ping = 'ping') {
    clearInterval(this.setIntervalSocketPush)
    const data = JSON.stringify({ action: ping })
    this.ws.send(data)
    this.setIntervalSocketPush = setInterval(() => {
      this.ws.send(data)
    }, time)
  }

  registerCallBack(socketType, callBack) {
    this.callBackMapping[socketType] = callBack
  }

  unRegisterCallBack(socketType) {
    this.callBackMapping[socketType] = null
    delete this.callBackMapping[socketType]
  }

  // 手动关闭
  close() {
    this.ws.close(1000, '手动关闭连接')
    this.ws = null
    clearInterval(this.setIntervalSocketPush)
  }
}
