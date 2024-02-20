/**
 * @author Yassir Elkhaili
 * @license GPL-3.0 
 */

//handle checkout

const checkoutButton = document.getElementById("checkout-button");

const postCheckoutCart = async () => {
    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const cartData = JSON.stringify(localStorage.getItem('cart'));
        const response = await fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: cartData
        });
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('an error has occured during checkout');
        }
    } catch (error) {
        console.error('Error:', error);
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
    console.log("triggered")
}

//add click event listener to checkout button

checkoutButton && checkoutButton.addEventListener("click", handleCheckout);