var xhr = new XMLHttpRequest();

xhr.open('GET', "./news_article.json", true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;

    var articlesDiv = document.getElementById('articles');
    
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var author = document.createElement('h4');
        author.textContent = article.author;

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var link = document.createElement('a');
        link.setAttribute("href", `${article.url}`);
        link.textContent = "Read more..."

        articleDiv.appendChild(author);
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(link);

        articlesDiv.appendChild(articleDiv);
    })
}

xhr.send();