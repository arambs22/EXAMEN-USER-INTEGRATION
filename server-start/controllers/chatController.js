require('dotenv').config();
const OpenAi = require('openai');

async function getResponseChat(req,res) {
    const {prompt} = req.body;
    const openai = new OpenAi(process.env.OPENAI_API_KEY);
    try{    
        const stream = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[
                {role: "system", content: "You are an expert in the field of videogame programming. You can answer any question related to videogame programming"},
                {role: "user", conetnt: "prompt"},
            ],
            stream: true,
        });

        let responseText = "";
        for await (const chunk of stream){
            responseText += chunk.choices[0]?.delta.content || ""  
        }      
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getResponseChat};

