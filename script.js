const markdownInput = document.getElementById("markdown-input");
function convertMarkdown() {
let str = ""
  const regexH1 = /^# (?<h1>.+)/gim;
  const regexH2 = /^## (?<h2>.+)/gim;
  const regexH3 = /^### (?<h3>.+)/gim;
  str = markdownInput.value.replaceAll(regexH1, "<h1>$<h1></h1>").replaceAll(regexH2, "<h1>$<h2></h1>")
  return str;
}