/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
import { computer, mountains, trees, turntable } from "../../assets/imgur.js";

const carouselIndex = [computer, mountains, trees, turntable];
const createCarousel = () => {
  const carouselDiv = document.createElement("div");
  const leftBtn = document.createElement("div");
  let carouselImage = document.createElement("img");
  carouselImage.style.display = "inherit";
  carouselImage.style.minWidth = "100%";
  const rightBtn = document.createElement("div");
  carouselDiv.classList.add("carousel");
  carouselDiv.style.position = "inherit";
  carouselDiv.style.height = "inherit";
  carouselDiv.style.overflow = "inherit";
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  rightBtn.style.top = "inherit";
  rightBtn.style.transform = "inherit";
  rightBtn.style.right = "0px";
  leftBtn.style.right = "0px";
  leftBtn.style.top = "inherit";
  leftBtn.style.transform = "inherit";
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  carouselDiv.appendChild(carouselImage);
  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(rightBtn);
  const carousel = document.querySelector("div.carousel-container");
  carousel.appendChild(carouselDiv);
  carousel.style.width = "100%";
  carousel.style.minWidth = "300px";
  carousel.style.maxWidth = "500px";
  carousel.style.display = "flex";

  console.log("carouselIndex:", carouselIndex);

  const parseCarouselImgs = () => {
    let i = 0;
    carouselImage.src = carouselIndex[i];
    rightBtn.addEventListener("click", (event) => {
      carouselIndex[i != 3 ? (i += 1) : (i = 0)];

      // i==-1? ( i=3 ):( i=4? ( i=0 ):i=1|2|3? i:i );
      carouselImage.src = carouselIndex[i];
      console.log(carouselImage);
      console.log(i);
    });

    leftBtn.addEventListener("click", (event) => {
      // i == -1 ? (i = 3) : (i = 4 ? (i = 0) : i=1|2|3);

      carouselImage.src = carouselIndex[i != 0 ? (i -= 1) : (i = 3)];
      console.log(carouselImage);
      console.log(i);
    });
  };
  parseCarouselImgs();
  return carouselDiv;
};
createCarousel();
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
