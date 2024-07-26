console.time('cold-start');

import { bind } from 'phecda-server/koa'
import { Factory, } from 'phecda-server'
import { AppController } from './app.controller.js'
import Koa from 'koa'
import Router from '@koa/router'

const data = await Factory([AppController], {
})
const app = new Koa()

const router = new Router()

bind(router, data,)
app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT, () => {
    console.timeEnd('cold-start');

    console.log('phecda-server/koa started on port ' + process.env.PORT);
})

