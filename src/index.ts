import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono<{ Bindings: { API_HOST: string } }>();

app.get("/*", serveStatic({ root: "./public" }));

app.post("/upload", async (c) => {
  const body = await c.req.parseBody();
  const formData = new FormData();
  // Telegraph ignores filenames, so we can use any filename we want!
  formData.append("file", body.file as Blob, "test.png");
  return fetch(`${c.env.API_HOST}/upload`, {
    method: "POST",
    body: formData,
  });
});

app.get("/file/:fileName", async (c) => {
  return fetch(`${c.env.API_HOST}/file/${c.req.param("fileName")}`);
});

export default app;
