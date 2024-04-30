import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono<{ Bindings: { API_HOST: string } }>();

app.get("/*", serveStatic({ root: "./" }));

app.post("/upload", cors(), async (c) => {
  const body = await c.req.parseBody();
  const file = body.file as File;
  const formData = new FormData();
  formData.append("file", file, file.name);
  return fetch(`${c.env.API_HOST}/upload`, {
    method: "POST",
    body: formData,
  });
});

app.get("/file/:name", (c) => {
  return fetch(`${c.env.API_HOST}/file/${c.req.param("name")}`);
});

export default app;
