const OpenAI = require("openai");
const dotenv = require("dotenv");
const similarity = require("./finalSimiliarityCheck");

dotenv.config();

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY
});


async function askQuestion(question) {

    
    const result = await similarity();

    
    const response = await client.chat.completions.create({

        model: "openrouter/free",

        messages: [
            {
                role: "system",
                content: `
You are a helpful assistant.

Answer the user's question using the provided context.

If the answer is not available in the context,
say "I don't know based on the provided documents."

Context:
${result.chunk}
                `
            },

            {
                role: "user",
                content: question
            }
        ]
    });

    return response.choices[0].message.content;
}


async function main() {

    const question = "What is Express.js?";

    const answer = await askQuestion(question);

    console.log("Answer:");
    console.log(answer);
}

main();