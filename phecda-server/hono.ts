console.time('cold-start');

import { bind } from 'phecda-server/hono'
import { Factory, } from 'phecda-server'
import { AppController } from './app.controller.js'
import { Hono } from 'hono'
import { serve } from '@hono/node-server';

const data = await Factory([AppController], {
})


const app = new Hono()

bind(app, data)

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
})
