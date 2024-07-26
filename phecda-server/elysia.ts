console.time('cold-start');
import '@bogeychan/elysia-polyfills/node/index.js'
import { bind } from 'phecda-server/elysia'
import { Factory, } from 'phecda-server'
import { AppController } from './app.controller.js'
import { Elysia } from 'elysia'

const data = await Factory([AppController], {
})


const app = new Elysia()

bind(app, data)

app.listen(process.env.PORT, () => {
    console.timeEnd('cold-start');

    console.log('phecda-server/elysia started on port '+ process.env.PORT);
})