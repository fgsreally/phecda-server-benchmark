console.time("cold-start");
import "@bogeychan/elysia-polyfills/node/index.js";
import { Elysia } from "elysia";

const app = new Elysia();

app.get("/hello", () => "Hello, World!");

app.listen(process.env.PORT, () => {
  console.timeEnd("cold-start");

  // eslint-disable-next-line no-console
  console.log("elysia started on port "+process.env.PORT);
});
