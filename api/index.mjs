import express from "express";
import { isWithinTokenLimit } from "gpt-tokenizer";

const app = express();
app.use(express.json());

app.post("/api/withinTokenLimit", (req, res) => {
  const { text, limit } = req.body;
  const _text = decodeURI(text);
  const tokenLimit = parseInt(limit);

  const withinTokenLimit = isWithinTokenLimit(_text, tokenLimit);

  const response = encodeURI(withinTokenLimit + "");
  res.end(response);
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

export default app;
