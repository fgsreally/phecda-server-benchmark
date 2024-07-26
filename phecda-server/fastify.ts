console.time('cold-start');

import { bind } from 'phecda-server/fastify'
import { Factory, } from 'phecda-server'
import { AppController } from './app.controller.js'
import Fastify from 'fastify'

const data = await Factory([AppController], {
})
const app = Fastify({
    logger: false,
})

bind(app, data,)


app.listen(process.env.PORT!, () => {
    console.timeEnd('cold-start');

    console.log('phecda-server/fastify started on port ' +process.env.PORT);
})

