const cartIcon = document.querySelector(".cart-container");
const shoppingCart = document.querySelector(".shopping-cart");
const closeBtn = document.querySelector(".closeBtn");
const navbar = document.querySelector(".navbar");
let isClicked = false;

// cartIcon.addEventListener("click", () => {
//   if (!isClicked) {
//     shoppingCart.classList.add("slide-in");
//     isClicked = !isClicked;
//   } else {
//     shoppingCart.classList.remove("slide-in");
//     isClicked = !isClicked;
//   }
// });

function sliding() {
  if (!isClicked) {
    shoppingCart.classList.add("slide-in");
    navbar.classList.remove("navbar__show");
    isClicked = !isClicked;
  } else {
    shoppingCart.classList.remove("slide-in");
    navbar.classList.add("navbar__show");
    isClicked = !isClicked;
  }
}

cartIcon.addEventListener("click", () => sliding());
closeBtn.addEventListener("click", () => sliding());
