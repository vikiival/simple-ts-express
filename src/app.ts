import express from 'express'
import cors from 'cors'
import consola from 'consola'

import { dummyHandler, handlerWithBody, handlerWithParams } from './handlers'

const app = express()
app.use([cors(), express.json()])
const port = 3003

app.get('/hello/:name', handlerWithParams)
app.get('/', dummyHandler)
app.get('/post', handlerWithBody)

app.listen(port, () => {
  consola.log(
    `~~~ [${new Date().toLocaleTimeString()}] Express running: ${port} ~~~.`
  )
})
