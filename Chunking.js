const fs = require("fs");

function chunkText(text , chunkSize=200) {
    let chunks=[]    

    for(let i=0;i<text.length;i+=chunkSize) {
        chunks.push(text.slice(i,i+chunkSize));
    }
    return chunks;
}

const files=["Express.txt","Mongodb.txt","Node.txt"]

let allChunks=[];

files.forEach(file=>{
    const text = fs.readFileSync(`./Documents/${file}` ,"utf-8")
    const chunk =chunkText(text);
    console.log(`\n${file}`);
    console.log(chunk);
    allChunks.push(...chunk);

})

module.exports=allChunks;