document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("article");

    articles.forEach(article => {
        article.addEventListener("click", function () {
            const paragraphs = this.querySelectorAll("p");

            paragraphs.forEach(p => {
                p.classList.toggle("visible");
            });
        });
    });
});