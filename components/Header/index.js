// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const todayDateMonYr = () => {
  const today = new Date();
  let mm = monthNames[today.getMonth()];
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  let dateMonth = `${dd} ${mm} ${yyyy}`;
  return dateMonth;
};

function Header() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = todayDateMonYr();
  headerDiv.appendChild(date);

  const h1 = document.createElement("h1");
  h1.textContent = "Lamda Times";
  headerDiv.appendChild(h1);

  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "98°";
  headerDiv.appendChild(temp);

  const headerContainer = document.querySelector(".header-container");
  return headerContainer.appendChild(headerDiv);
}

Header();
