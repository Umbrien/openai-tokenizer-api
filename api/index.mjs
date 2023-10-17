import express from "express";

const app = express();

app.get("/api", (req, res) => {
  const path = `/api/item/testpath`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export default app;
