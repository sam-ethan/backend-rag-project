const { pipeline }= require("@xenova/transformers")
const chunks=require("./Chunking");
const { normalize } = require("node:path");

async function createEmbeddings() {
    const model= await pipeline("feature-extraction","Xenova/all-MiniLM-L6-v2")
    const embeddings=[]


    for(let chunk of chunks) {
        const output=await model(chunk,{
            pooling:"mean",
            normalize:true
        }
        )
        await  embeddings.push({
    chunk: chunk,
    embedding: Array.from(output.data)
});
    }

    console.log("total Chunks: ",chunks.length);
    console.log("EmbeddingSize :",embeddings[0].length)
   
    
    return embeddings;
}

module.exports=createEmbeddings;