// A simple Deno Oak web server + router that host a static nuxt app

// Import the required modules
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const isDev = Deno.args.includes('--dev');
const port = isDev ? 5127 : 8000;

// Create a new instance of the Oak router
const router = new Router();

// Define our greeting route e.g. /say/{greeting}
// It's called for all HTTP verbs/requests matching the path: /say/*
router.all("/api/:greeting", (ctx, next) => {
  // Return the value of `:greeting` from the parsed URL
    ctx.response.body = `Deno says: ${ctx.params.greeting}`;
});

// Define a fallback route for any non-matching paths
router.get("/(.*)", async (ctx, next) => {
  try {
    console.log(ctx.request.url.pathname);
    if (ctx.request.url.pathname.startsWith('/server')) {
      throw new Error('Not Allowed');
    }
    console.log(ctx.request.url.href);
    await ctx.send({
      root: isDev ? `${Deno.cwd()}/dist` : Deno.cwd(),
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "404 File not found";
  }
});

// Create a new instance of the Oak application
const app = new Application();

// Initalize the router middleware
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
  "listen", () => console.log(`Listening on http://localhost:${port}`),
);

// Listen to requests on the sepecified port
app.listen({ port });