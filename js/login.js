"use strict";
const btnLogin = document.querySelector(".btnLogin");
const signup = document.querySelector("#typeEmail");
const login = document.querySelector(".input-login");

let cart = document.querySelector(".cart");
const btnCart = document.querySelectorAll(".cart-btn");

var count = "";
cart.textContent = count;

const handleIncrement = () => {
  count++;
  cart.textContent = count;
};
for (let i = 0; i < btnCart.length; i++)
  btnCart[i].addEventListener("click", handleIncrement);
