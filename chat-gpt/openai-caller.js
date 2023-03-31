const { Configuration, OpenAIApi } = require("openai");

async function createChatGPTCaller({ apiKey }) {
  const configuration = new Configuration({
    // organization: "org-H1mlAHw7xEDo7ExiHO28Q6Em",
    apiKey: apiKey,
  });
  return new OpenAIApi(configuration);
}

module.exports = createChatGPTCaller;
