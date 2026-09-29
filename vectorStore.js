const  fs = require("fs");
const createEmbeddings = require("./Embedding");
const { create } = require("domain");

async function vectorStore() {
    const embeddings = await createEmbeddings();
    console.log(embeddings);
    fs.writeFileSync("data.json",JSON.stringify(embeddings,null,2));
    console.log("vector store create successfully");
}

vectorStore();