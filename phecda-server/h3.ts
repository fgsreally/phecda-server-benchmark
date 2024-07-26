console.time('cold-start');

import { createServer } from 'node:http'
import { createApp, createRouter, toNodeListener } from 'h3'
import { bind } from 'phecda-server/h3'
import { Factory, HTTPGenerator } from 'phecda-server'
import { AppController } from './app.controller.js'
const data = await Factory([AppController], {
    generators: [new HTTPGenerator()],

})
const app = createApp()
const router = createRouter()

bind(router, data)
app.use(router)
createServer(toNodeListener(app)).listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.timeEnd('cold-start');
    console.log('phecda-server/h3 started on port '+ process.env.PORT);
})
