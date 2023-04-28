"use strict";
const btnLogin = document.querySelector(".btnLogin");
const signup = document.querySelector(".input-area");
const login = document.querySelector(".input-login");
const noCart = document.querySelector(".no-cart");
const withCart = document.querySelector(".with-cart");
let cart = document.querySelector(".cart");
const btnCart = document.querySelectorAll(".cart-btn");
// const addToCart = btnCart.addEventListener("click", function () {
//   noCart.classList.add("no-cart-modal");
// });

// add-to-cart-counter
var count = "";
cart.textContent = count;
const handleIncrement = () => {
  count++;
  cart.textContent = count;
};
for (let i = 0; i < btnCart.length; i++)
  btnCart[i].addEventListener("click", handleIncrement);

for (let i = 0; i < btnCart.length; i++)
  btnCart[i].addEventListener("click", function () {
    noCart.classList.add("no-cart-modal");
    withCart.classList.remove("hide-added-modal");
  });

// QUANTITY-COMPONENTS
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
