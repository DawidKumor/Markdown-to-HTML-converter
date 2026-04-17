const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
function convertMarkdown() {
    let str = ""
    const regexH1 = /^# (?<h1>.+)/gim;
    const regexH2 = /^## (?<h2>.+)/gim;
    const regexH3 = /^### (?<h3>.+)/gim;
    str = markdownInput.value.replaceAll(regexH1, "<h1>$<h1></h1>").replaceAll(regexH2, "<h2>$<h2></h2>")
    .replace(regexH3, "<h3>$<h3></h3>");
    return str;
}
markdownInput.addEventListener("input", () => {
    htmlOutput.innerText = convertMarkdown();
});
markdownInput.addEventListener("focus", () => {
    markdownInput.classList.add("background");
});
markdownInput.addEventListener("blur", () => {
    markdownInput.classList.remove("background");
})
