// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then((response) => {
    const topics = response.data.topics;
    topics.forEach((tabData) => createTab(tabData));
  })
  .catch(function (error) {
    console.error(error);
  });

const createTab = (tabData) => {
  const tabDiv = document.createElement("div");
  tabDiv.classList.add("tab", tabData);
  tabDiv.textContent = `- ${tabData} -`;
  topicsDiv.append(tabDiv);
  tabDiv.addEventListener("click", (e) => displayCards(tabData, e));
};
function setActiveTab(topic, e) {
  let allActiveTabs = document.querySelectorAll(".activetab");
  const alltabs = document.querySelectorAll(".tab");
  allActiveTabs.forEach((tab) => {
    tab.classList.remove("activetab");
  });
  const { classList } = e.target;
  classList.add("activetab");
  allActiveTabs = document.querySelectorAll(".activetab");
}

function displayCards(topic, e) {
  setActiveTab(topic, e);
  let matchingCards, allCards;

  if (topic === "node.js") {
    matchingCards = document.querySelectorAll(`card[data-card='node']`);
  } else {
    matchingCards = document.querySelectorAll(`card[data-card='${topic}']`);
  }

  allCards = document.querySelectorAll(`card[data-card]`);

  allCards.forEach((card) => card.classList.add("hide"));
  matchingCards.forEach((card) => card.classList.remove("hide"));
}

const topicsDiv = document.querySelector("div.tabs");
