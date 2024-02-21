/**
 * @author Yassir Elkhaili
 * @license GPL-3.0 
 */

//handle checkout
const checkoutButton = document.getElementById("checkout-button");

const postCheckoutCart = async () => {
    const endpoint = window.location.origin + '/session';
    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const cartData = JSON.stringify(localStorage.getItem('cart'));
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: cartData
        });
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error('an error has occured during checkout');
        }
    } catch (error) {
        throw new Error('Error:', error);
    }
};

//UX/UI
const toggleCheckoutSpinner = (checkoutButton) => {
    const checkoutSpinner = document.getElementById("checkout-spinner");
    checkoutSpinner.classList.toggle("hidden");
    checkoutSpinner.classList.toggle("flex");
    checkoutButton.classList.toggle("hidden");
}

const handleCheckout = (event) => {
    const checkoutButton = (event.target).closest("button");
    toggleCheckoutSpinner(checkoutButton)
    //call fetch function and handle stripe redirect
    postCheckoutCart().then((response) => window.location.href = response).catch((error) => console.error(error))
      .finally(() => toggleCheckoutSpinner(checkoutButton));
}

//add click event listener to checkout button

checkoutButton && checkoutButton.addEventListener("click", handleCheckout);