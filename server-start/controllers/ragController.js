/*const { config } = require('dotenv');
config();

let nearbyyClient;

async function initializeNearbyyClient() {
  const module = await import('@nearbyy/core');
  nearbyyClient = new module.NearbyyClient({
    API_KEY: process.env.NEARBYY_API_KEY,
  });
}

initializeNearbyyClient();

async function getContextResponse(req, res) {
  const { message } = req.body;
  try {
    const context = await nearbyyClient.semanticSearch({
      limit: 3,
      query: message,
    });

    if (!context.success) {
      console.error(context.error);
      return res.send("I'm sorry, I don't understand.");
    }

    return res.json({ response: context });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getContextResponse };*/