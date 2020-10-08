// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
///**big object=response.data */

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

// Create a card for each of the articles and add the card to the DOM.

//imports optional alternate image sources from assets directory
const images = require("../../assets/imgur.js")

const cardsContainer = document.querySelector(".cards-container");
function createArticleCard(article, topic) {
  const articleCard = document.createElement("card");
  articleCard.classList.add("card", topic);

  articleCard.setAttribute(`data-card`, topic);

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = `${article.headline}`;
  articleCard.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  articleCard.appendChild(authorDiv);

  const articleImgDiv = document.createElement("div");
  articleImgDiv.classList.add("img-container");
  authorDiv.appendChild(articleImgDiv);

  const articleImg = document.createElement("img");
  let parsedImage =
    images[article.authorPhoto.split("./assets/")[1].split(".jpg")[0]];
  articleImg.src = parsedImage;
  articleImgDiv.appendChild(articleImg);

  const authorsName = document.createElement("span");
  authorsName.textContent = `By:${article.authorName}`;
  authorDiv.appendChild(authorsName);
  cardsContainer.appendChild(articleCard);
}

function fetchData() {
  axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response) => {
      const { articles } = response.data;
      for (const topic in articles) {
        articles[topic].forEach((blog) => createArticleCard(blog, topic));
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

fetchData();
