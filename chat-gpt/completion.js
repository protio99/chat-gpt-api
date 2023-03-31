async function getCompletion(openai, messages) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0,
  });

  // if (!response) {
  //   return null;
  // }

  // if (!response.choises) {
  //   return null;
  // }

  // return response.data.choices[0];
  // return response.data.message;
  return response.data.choices[0].message.content;
}

module.exports = getCompletion;
