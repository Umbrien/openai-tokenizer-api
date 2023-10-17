# Tokenizer API for OpenAI

## endpoints

**POST /api/withinTokenLimit**

body: {text, limit}

returns: token count if text fits in token limit, false if it does not

Suitable for GPT-3.5-turbo, GPT-4

## running

For local run, uncomment `app.listen` lines in api/index.mjs and run it with node
