import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getFileJsonData } from '../utils/file_utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function responseDataMiddleware(ctx, next) {
  const url = ctx.request.url
  let filePath = url.replace('/api', '')
  filePath = `../data${filePath}.json`
  filePath = path.join(__dirname, filePath)

  try {
    const ret = await getFileJsonData(filePath)
    // console.log(ret)
    const data = {
      code: 200,
      data: JSON.parse(ret),
    }
    ctx.response.body = data
  }
  catch (error) {
    console.log(error)
    const errorMsg = {
      code: '400',
      message: error,
    }
    ctx.response.body = errorMsg
  }
  // console.log(filePath)
  await next()
}

export default responseDataMiddleware
