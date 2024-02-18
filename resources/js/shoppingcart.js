/**
 * @author Yassir Elkhaili
 * @license GPL-3.0
 */


document.addEventListener("DOMContentLoaded", () => {
    const shoppingCartButton = document.querySelector("[data-element='cart-button']");
    const shoppingcart = document.querySelector("[data-element='shopping-cart']");
    const backgroundBackdrop = document.querySelector("[data-element='background-backdrop']");
    const shoppingCartCloseButton = document.querySelector("[data-element='cart-close-button']");

    const toggleShoppingCartOpenClose = () => {
        if (shoppingcart) {
            shoppingcart.classList.toggle("translate-x-full");
            shoppingcart.classList.toggle("translate-x-0");
        }
    }

    const toggleBackgroundBackdrop = () => {
        if (backgroundBackdrop) {
                backgroundBackdrop.classList.toggle("opacity-0");
                backgroundBackdrop.classList.toggle("opacity-100");
                backgroundBackdrop.classList.toggle("pointer-events-none");
        }
    }

    const handleShoppingCart = () => {
        toggleShoppingCartOpenClose();
        toggleBackgroundBackdrop();
    }

    [shoppingCartButton, backgroundBackdrop, shoppingCartCloseButton].forEach((element) => element && element.addEventListener("click", handleShoppingCart));
})