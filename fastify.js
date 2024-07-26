console.time('cold-start');

import Fastify from 'fastify';
const fastify = Fastify({ logger: false, keepAliveTimeout: 5000 });

fastify.get('/hello', function (req, reply) {
  reply.send('Hello, World!');
});

fastify.listen({ port: process.env.PORT }, () => {
  console.timeEnd('cold-start');
  fastify.log.info(`Fastify listening on ${process.env.PORT}`);
});