const fs = require("fs");
const userQuestionEmbedding = require("./userQuestionEmbedding")

async function findSimiliarChunk() {
    const questionEmbedding = await  userQuestionEmbedding();
    const documentEmbedding= JSON.parse( fs.readFileSync("data.json",'utf-8'))

    console.log("question Embedding  "+questionEmbedding);
    console.log("documentEmbedding  " ,documentEmbedding);

    return { questionEmbedding ,  documentEmbedding }
}

module.exports=findSimiliarChunk;