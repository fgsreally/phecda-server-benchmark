console.time('cold-start');

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { logger: false });
  app.getHttpServer().keepAliveTimeout = 5000;
  await app.listen(process.env.PORT!, () => {
    console.timeEnd('cold-start');
    console.log('Nestjs started on port ' + process.env.PORT);
  });
}
bootstrap();