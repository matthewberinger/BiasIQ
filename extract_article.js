console.log("Beginning extraction");

docClone = document.cloneNode(true);

// Run Readability on the cloned document
article = new Readability(docClone).parse();
console.log("article aquired");
console.log(article.textContent);
console.log("done")