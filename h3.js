console.time("cold-start");
import {
  createApp,
  createRouter,
  defineEventHandler,
  createServer,
  toNodeListener,
} from "h3";

// Create an app instance
export const app = createApp();

// Create a new router and register it in app
const router = createRouter();
app.use(router);

// Add a new route that matches GET requests to / path
router.get(
  "/hello",
  defineEventHandler(() => {
    return "Hello, World!";
  })
);

createServer(toNodeListener(app)).listen(process.env.PORT, () => {
  console.timeEnd("cold-start");

  console.log("h3 started on port "+ process.env.PORT);
});
