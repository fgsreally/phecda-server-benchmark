console.time("cold-start");
import { serve } from "@hono/node-server";
import { Hono } from 'hono'

const app = new Hono()

app.get("/hello", () => "Hello, World!");

serve({
    fetch: app.fetch,
    port: process.env.PORT,
  }, () => {
  console.timeEnd("cold-start");

  // eslint-disable-next-line no-console
  console.log("elysia started on port "+ process.env.PORT);
});


  