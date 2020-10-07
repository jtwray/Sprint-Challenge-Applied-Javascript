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
  const carousel = document.querySelector("div.carousel-container");
  const carouselImage = document.createElement("img");
  const leftBtn = document.createElement("div");
  const rightBtn = document.createElement("div");

  carouselImage.style.display = "inherit";
  carouselImage.style.minWidth = "100%";
  carouselImage.style.transition = "all ease 250ms";

  leftBtn.classList.add("left-button");
  leftBtn.style.right = "0px";
  leftBtn.style.top = "inherit";
  leftBtn.style.transform = "inherit";
  leftBtn.textContent = "<";

  rightBtn.classList.add("right-button");
  rightBtn.style.right = "0px";
  rightBtn.style.top = "inherit";
  rightBtn.style.transform = "inherit";
  rightBtn.textContent = ">";

  carouselDiv.classList.add("carousel");
  carouselDiv.style.height = "inherit";
  carouselDiv.style.position = "inherit";
  carouselDiv.style.overflow = "inherit";
  carouselDiv.appendChild(carouselImage);
  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(rightBtn);

  carousel.appendChild(carouselDiv);
  carousel.style.display = "flex";
  carousel.style.maxWidth = "500px";
  carousel.style.minWidth = "300px";
  carousel.style.width = "100%";

  const parseCarouselImgs = () => {
    let i = 0;
    carouselImage.src = carouselIndex[i];
    rightBtn.addEventListener("click", () => {
      carouselImage.src = carouselIndex[i !== 3 ? (i += 1) : (i = 0)];
    });
    leftBtn.addEventListener("click", () => {
      carouselImage.src = carouselIndex[i !== 0 ? (i -= 1) : (i = 3)];
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
