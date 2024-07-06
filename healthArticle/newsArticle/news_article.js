let xhr = new XMLHttpRequest();

xhr.open('GET', "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY", true);

xhr.responseType = 'json';

xhr.onload = function() {
    let articles = xhr.response.articles;
    let articlesDiv = document.getElementById('articles');
    
    articles.forEach(function(article) {
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        let author = document.createElement('h4');
        author.textContent = article.author;

        let title = document.createElement('h2');
        title.textContent = article.title;

        let description = document.createElement('p');
        description.textContent = article.description;

        let link = document.createElement('a');
        link.setAttribute("href", `${link.url}`);

        articleDiv.appendChild(author);
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(link);

        articlesDiv.appendChild(articleDiv);
    })
}

xhr.send();