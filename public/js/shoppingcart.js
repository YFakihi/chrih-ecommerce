/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/shoppingcart.js ***!
  \**************************************/
/**
 * @author Yassir Elkhaili
 * @license GPL-3.0
 */

document.addEventListener("DOMContentLoaded", function () {
  var shoppingCartButton = document.querySelector("[data-element='cart-button']");
  var shoppingcart = document.querySelector("[data-element='shopping-cart']");
  var backgroundBackdrop = document.querySelector("[data-element='background-backdrop']");
  var shoppingCartCloseButton = document.querySelector("[data-element='cart-close-button']");
  var toggleShoppingCartOpenClose = function toggleShoppingCartOpenClose() {
    if (shoppingcart) {
      shoppingcart.classList.toggle("translate-x-full");
      shoppingcart.classList.toggle("translate-x-0");
    }
  };
  var toggleBackgroundBackdrop = function toggleBackgroundBackdrop() {
    if (backgroundBackdrop) {
      backgroundBackdrop.classList.toggle("opacity-0");
      backgroundBackdrop.classList.toggle("opacity-100");
      backgroundBackdrop.classList.toggle("pointer-events-none");
    }
  };
  var handleShoppingCart = function handleShoppingCart() {
    toggleShoppingCartOpenClose();
    toggleBackgroundBackdrop();
  };
  [shoppingCartButton, backgroundBackdrop, shoppingCartCloseButton].forEach(function (element) {
    return element && element.addEventListener("click", handleShoppingCart);
  });
});
/******/ })()
;