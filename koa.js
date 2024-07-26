console.time('cold-start');

import Koa from 'koa';
import Router from '@koa/router';
const app = new Koa();
const router = new Router();

router.get('/hello', async function(ctx) {
  ctx.body = 'Hello, World!';
});

app.use(router.routes());

app.listen(process.env.PORT, () => {
  console.timeEnd('cold-start');
  console.log(`Koa started on port  ${process.env.PORT}`);
});