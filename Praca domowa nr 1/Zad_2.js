let dna = require("./brca1.json");
let startIndex = dna.indexOf("atg");
let endIndex = startIndex;
let stopCodons = ["taa", "tga", "tag"];
let geneArray = [];

for (let i = 0; i < stopCodons.length; i++) {
  if (startIndex >= 0) {
    for (let j = 0; j < dna.length; j++) {
      endIndex = dna.indexOf(stopCodons[i], j);
      if ((endIndex + 3 - startIndex) % 3 === 0) {
        geneArray.push(dna.slice(startIndex, endIndex + 3));
        startIndex = dna.indexOf("atg", startIndex + 3);
        endIndex = dna.indexOf(stopCodons[i], endIndex + j);
      } else if (endIndex === -1) continue;
    }
  }
}
geneArray = geneArray.filter((n) => n);
console.log(geneArray);
console.log(`Number of all genes: ${geneArray.length}`);
console.log(
  `Length of longest gene: ${Math.max(...geneArray.map((x) => x.length))}`
);
console.log(
  `Length of shortest gene: ${Math.min(...geneArray.map((x) => x.length))}`
);
