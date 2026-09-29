const {pipeline} =require("@xenova/transformers");
const question=require("./userQuestion")
async function createQuestionEmbedding() {
    const model=await pipeline("feature-extraction","Xenova/all-MiniLM-L6-v2");
    
    const output=await model(question,{
        pooling:"mean",
        normalize:true
    })

    const embedding=Array.from(output.data)
    console.log("Question :"+question);
    console.log("Embedding  "+embedding)
    return embedding;
}

module.exports=createQuestionEmbedding