const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

if (!fs.existsSync(outDir)) {
  throw new Error("Le dossier out/ est introuvable. Lancez d'abord npm run build:github.");
}

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

const notFoundHtml = path.join(outDir, "404.html");
const notFoundIndex = path.join(outDir, "404", "index.html");

if (!fs.existsSync(notFoundHtml) && fs.existsSync(notFoundIndex)) {
  fs.copyFileSync(notFoundIndex, notFoundHtml);
}

console.log("GitHub Pages prêt : out/.nojekyll créé.");
