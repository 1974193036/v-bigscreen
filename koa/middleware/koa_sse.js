import { PassThrough } from 'node:stream'

async function responseSSEMiddleware(ctx, next) {
  const url = ctx.request.url
  if (url !== '/events') {
    await next()
    return
  }

  ctx.request.socket.setTimeout(0)
  ctx.req.socket.setNoDelay(true)
  ctx.req.socket.setKeepAlive(true)

  ctx.set('Content-Type', 'text/event-stream')
  ctx.set('Cache-Control', 'no-cache')
  ctx.set('Connection', 'keep-alive')

  const stream = new PassThrough()
  ctx.status = 200
  ctx.body = stream

  const data = { list: [120, 200, 150, 80, 70, 110, 130], timestamp: new Date() }
  stream.write(`data: ${JSON.stringify(data)}\n\n`)

  setTimeout(async () => {
    const data = { list: [400, 800, 150, 80, 70, 110, 130], timestamp: new Date() }
    stream.write(`data: ${JSON.stringify(data)}\n\n`)
  }, 2000)

  setTimeout(async () => {
    const data = { list: [1400, 3800, 150, 80, 70, 110, 3130], timestamp: new Date() }
    stream.write(`data: ${JSON.stringify(data)}\n\n`)
  }, 4000)
}

export default responseSSEMiddleware
