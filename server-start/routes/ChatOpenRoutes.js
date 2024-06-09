const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const geminiController = require("../controllers/geminiController");    
const ragController = require("../controllers/ragController");

//router.post("/", chatController.getResponseChat);
router.post("/gemini", geminiController.getResponseChatGemini);
//router.post("/context", ragController.getContextResponse);

module.exports = router;