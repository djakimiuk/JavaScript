const height = 8;
for (i = 0; i < height; i++) {
  let spacesCount = height - i;
  let hashesCount = i;
  let outputLeft = "";
  let outputRight = "";
  for (j = 0; j <= spacesCount; j++) {
    outputLeft += " ";
  }
  for (k = 0; k <= hashesCount; k++) {
    outputLeft += "#";
    outputRight += "#";
  }
  console.log(outputLeft + " " + outputRight);
  
}
