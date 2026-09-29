const findSimilarChunk = require("./similiarity");

function cosineSimilarity(vectorA, vectorB) {

    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    for (let i = 0; i < vectorA.length; i++) {

        dotProduct += vectorA[i] * vectorB[i];

        magnitudeA += vectorA[i] * vectorA[i];

        magnitudeB += vectorB[i] * vectorB[i];
    }

    return dotProduct /
        (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}


async function similarity() {

    const {
        questionEmbedding,
        documentEmbedding
    } = await findSimilarChunk();

    let results = [];

    for (let item of documentEmbedding) {

        const score = cosineSimilarity(
            questionEmbedding,
            item.embedding
        );

        results.push({
            chunk: item.chunk,
            score: score
        });
    }

    results.sort((a, b) => b.score - a.score);

    console.log("Most Similar Chunk:");
    console.log(results[0]);

        return results[0];
}

module.exports = similarity;