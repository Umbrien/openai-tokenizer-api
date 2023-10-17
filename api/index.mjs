import express from "express";
import { isWithinTokenLimit } from "gpt-tokenizer";

const app = express();

app.get("/api/withinTokenLimit", (req, res) => {
  const { text, limit } = req.query;
  const _text = decodeURI(text);
  const tokenLimit = parseInt(limit);

  const withinTokenLimit = isWithinTokenLimit(_text, tokenLimit);

  const response = encodeURI(withinTokenLimit + "");
  res.end(response);
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export default app;
