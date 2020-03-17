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
const createTopic = arr => {
  console.log("arr:", arr);
  Array.from(arr).map(article => {
    return createArticleCard(article);
  });
};

const cardsContainer = document.querySelector(".cards-container");
console.log("cardsContainer:", cardsContainer);

const createArticleCard = (article = {}) => {
  const articleCard = document.createElement("card");
  articleCard.classList.add("card");

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
  articleImg.src = `${article.authorPhoto}`;
  articleImgDiv.appendChild(articleImg);

  const authorsName = document.createElement("span");
  authorsName.textContent = `By:${article.authorName}`;
  authorDiv.appendChild(authorsName);
  console.log("articleCard:", articleCard);
  cardsContainer.appendChild(articleCard);
};
const fetchData = () => {
  axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
      const eachArticle = Object.values(response.data.articles).map(topic => {
        return Object.values(topic).map(article => {
          return createArticleCard(article);
        });
      });
      console.log("eachArticle:", eachArticle);

      console.log(eachArticle);
    })                       
    .catch(function(error) {
      console.error(error);
    });
};

fetchData();
