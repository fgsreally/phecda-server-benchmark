console.time('cold-start');

import { bind } from 'phecda-server/express'
import { createPhecda } from 'phecda-server'
import express from 'express'
import { AppController } from './app.controller.js'



const data = await createPhecda([AppController], {
})
const app = express()
app.disable('etag');
app.disable('x-powered-by')
const router = express.Router()

bind(router, data,)
app.use(router)

app.listen(process.env.PORT, () => {
    console.timeEnd('cold-start');

    console.log('phecda-server/express started on port '+ process.env.PORT);
})

