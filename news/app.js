let newsStoriesDiv = document.getElementById("newsStoriesDiv")

console.log(news.articles[1].author)
console.log(news.articles.length)

for (i=0; i<news.articles.length; i++) {
    let newsStoryDiv = `<div class="newsStoryDiv">
                        <h3>${news.articles[i].title}</h3>  
                        <h4>${news.articles[i].author}</h4>
                        <img class="articleImage" src="${news.articles[i].urlToImage}"/>
                        <span>${news.articles[i].description}</span>
                        <a href="${news.articles[i].url}">Link to Article</a>  
                        <div>"${news.articles[i].publishedAt}"</div> 
                        </div>`
    newsStoriesDiv.insertAdjacentHTML("beforeend", newsStoryDiv)
}

console.log(news.articles[5].url, news.articles[5].urlToImage, news.articles[5].publishedAt)
