const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
function convertMarkdown() {
    let str = ""
    const regexH1 = /^# (?<h1>.+)/gim;
    const regexH2 = /^## (?<h2>.+)/gim;
    const regexH3 = /^### (?<h3>.+)/gim;
    const regexBold = /\*\*(?<B>.+)\*\*|__(?<B>.+)__/gim;
    const regexItalic = /\*(?<I>.+)\*|_(?<I>.+)_/gim;
    const regexImg = /!\[(?<alt>.+)\]\((?<img>.+)\)/gim;
    const regexUrl = /(?<!!)\[(?<l>.+)\]\((?<url>.+)\)/gim;
    const regexQuote = /^> (?<q>.+)/gim;
    str = markdownInput.value.replaceAll(regexH1, "<h1>$<h1></h1>").replaceAll(regexH2, "<h2>$<h2></h2>")
        .replaceAll(regexH3, "<h3>$<h3></h3>").replaceAll(regexQuote, "<blockquote>$<q></blockquote>")
        .replaceAll(regexBold, "<strong>$<B></strong>").replaceAll(regexItalic, "<em>$<I></em>")
        .replaceAll(regexImg, '<img alt="$<alt>" src="$<img>">').replaceAll(regexUrl, '<a href="$<url>">$<l></a>');
    return str;
}
markdownInput.addEventListener("input", () => {
    htmlOutput.innerText = convertMarkdown();
    preview.innerHTML = convertMarkdown()
});
markdownInput.addEventListener("focus", () => {
    markdownInput.classList.add("background");
});
markdownInput.addEventListener("blur", () => {
    markdownInput.classList.remove("background");
})