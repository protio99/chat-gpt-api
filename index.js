const createChatGPTCaller = require("./chat-gpt/openai-caller");
const getCompletion = require("./chat-gpt/completion");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
// const key = "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";
const key = "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";

app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const { messages } = req.body;
  const chatCaller = await createChatGPTCaller({ apiKey: key });
  const response = await getCompletion(chatCaller, messages);
  res.json({
    message: response,
  });

  // chatCaller.res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
