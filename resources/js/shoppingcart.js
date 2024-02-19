/**
 * @author Yassir Elkhaili
 * @license GPL-3.0
 */


document.addEventListener("DOMContentLoaded", () => {
    const shoppingCartButton = document.querySelector("[data-element='cart-button']");
    const shoppingcart = document.querySelector("[data-element='shopping-cart']");
    const backgroundBackdrop = document.querySelector("[data-element='background-backdrop']");
    const shoppingCartCloseButton = document.querySelector("[data-element='cart-close-button']");
    const continueShoppingButton = document.querySelector("[data-element='continue-shopping']");

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

    [shoppingCartButton, backgroundBackdrop, shoppingCartCloseButton, continueShoppingButton].forEach((element) => element && element.addEventListener("click", handleShoppingCart));

    //shopping cart functionality
    const products = [
        {
            "productId": "1",
            "productName": "Example Product 1",
            "price": 10.99,
            "quantity": 0
        },
        {
            "productId": "2",
            "productName": "Example Product 2",
            "price": 19.99,
            "quantity": 0
        },
        {
            "productId": "3",
            "productName": "Example Product 3",
            "price": 15.50,
            "quantity": 0
        },
        {
            "productId": "4",
            "productName": "Example Product 4",
            "price": 24.75,
            "quantity": 0
        },
        {
            "productId": "5",
            "productName": "Example Product 5",
            "price": 12.00,
            "quantity": 0
        },
        {
            "productId": "6",
            "productName": "Example Product 6",
            "price": 29.99,
            "quantity": 0
        }
    ];
    const productCounter = document.querySelector("[data-element='product-count']");
    
    //initialize cart in localstorage
    !localStorage.getItem("cart") && localStorage.setItem("cart", JSON.stringify([]));

    const addProductToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const product = products.find(product => product.productId === productId);
    const productExists = cart.some((product) => product.productId === productId);
    if (!productExists) {
        product.quantity = (product.quantity || 0) + 1;
        cart.push(product);
    } else {
        //if it already exists find and update the quantity
        cart.forEach((product) => {
            if (product.productId === productId) {
                product.quantity = (product.quantity || 0) + 1;
                return;
            }
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    }

    const removeProductFromCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(item => item.productId !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const createCartItem = (product) => {
        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'py-6'); 
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('h-24', 'w-24', 'flex-shrink-0', 'overflow-hidden', 'rounded-md', 'border', 'border-gray-200');
        const image = document.createElement('img');
        image.src = 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg';
        image.alt = 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.';
        image.classList.add('h-full', 'w-full', 'object-cover', 'object-center');
        imageDiv.appendChild(image);
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('ml-4', 'flex', 'flex-1', 'flex-col');
        const innerDiv1 = document.createElement('div');
        const titlePriceDiv = document.createElement('div');
        titlePriceDiv.classList.add('flex', 'justify-between', 'text-base', 'font-medium', 'text-gray-900');
        const productTitle = document.createElement('h3');
        productTitle.innerHTML = '<a href="#">' + product.productName + '</a>';
        const price = document.createElement('p');
        price.textContent = '$' + product.price;
        price.classList.add('ml-4');
        titlePriceDiv.appendChild(productTitle);
        titlePriceDiv.appendChild(price);
        const color = document.createElement('p');
        color.textContent = 'Salmon';
        color.classList.add('mt-1', 'text-sm', 'text-gray-500');
        innerDiv1.appendChild(titlePriceDiv);
        innerDiv1.appendChild(color);
        const innerDiv2 = document.createElement('div');
        innerDiv2.classList.add('flex', 'flex-1', 'items-end', 'justify-between', 'text-sm');
        const quantity = document.createElement('p');
        quantity.textContent = 'Qty ' + product.quantity;
        quantity.classList.add('text-gray-500');
        const removeButtonDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute("data-remove", product.productId);
        removeButton.classList.add('font-medium', 'text-blue-600', 'hover:text-blue-500');
        //add remove event listener
        removeButton.addEventListener("click", (event) => {
            const eventTarget = (event.target);
            const addButton = eventTarget.closest("button");
            const productId = addButton.getAttribute("data-remove");
            removeProductFromCart(productId);
            //update cart after item is removed
            updateCart();
        });
        removeButtonDiv.appendChild(removeButton);
        innerDiv2.appendChild(quantity);
        innerDiv2.appendChild(removeButtonDiv);
        detailsDiv.appendChild(innerDiv1);
        detailsDiv.appendChild(innerDiv2);
        listItem.appendChild(imageDiv);
        listItem.appendChild(detailsDiv);
        return listItem;
    }

    const updateProductsTotalPrice = () => {
        let totalPrice = 0;
        const totalContainer = document.querySelector("[data-total]");
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach((item) => totalPrice += (item.price * item.quantity));
        totalContainer.textContent = '$' + totalPrice.toFixed(2); //2 digits after comma for ux
    }

    const updateCart = () => {
        const productList = document.querySelector("[role='list']");
        const cart = JSON.parse(localStorage.getItem('cart'));
        //clear existing cart items
        while(productList.firstChild) productList.removeChild(productList.firstChild);
        //update cart with products if product doesn't already exists
        cart.forEach((product) => productList.appendChild(createCartItem(product)));
        //update cart toggle button item counter
        if (productCounter) productCounter.textContent = cart.length;
        updateProductsTotalPrice();
    }

    //generate and render the products on the home page
    const createProductCard = (product) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('group', 'border-gray-100/30', 'flex', 'w-full', 'max-w-xs', 'flex-col', 'self-center', 'overflow-hidden', 'rounded-lg', 'border', 'bg-gray-700', 'shadow-md');
        const link = document.createElement('a');
        link.classList.add('relative', 'mx-3', 'mt-3', 'flex', 'h-60', 'overflow-hidden', 'rounded-xl');
        link.href = '#';
        const primaryImg = document.createElement('img');
        primaryImg.classList.add('peer', 'absolute', 'top-0', 'right-0', 'h-full', 'w-full', 'object-cover');
        primaryImg.src = "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b";
        primaryImg.alt = 'product image';
        const secondaryImg = document.createElement('img');
        secondaryImg.classList.add('peer', 'peer-hover:right-0', 'absolute', 'top-0', '-right-96', 'h-full', 'w-full', 'object-cover', 'transition-all', 'delay-100', 'duration-1000', 'hover:right-0');
        secondaryImg.src = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
        secondaryImg.alt = 'product image';
        const svg = `<svg class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>`;
        link.innerHTML = svg;
        link.appendChild(primaryImg);
        link.appendChild(secondaryImg);
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('mt-4', 'px-5', 'pb-5');
        const productLink = document.createElement('a');
        productLink.href = '#';
        const title = document.createElement('h5');
        title.classList.add('text-xl', 'tracking-tight', 'text-white');
        title.textContent = product.productName;
        productLink.appendChild(title);
        const priceDiv = document.createElement('div');
        priceDiv.classList.add('mt-2', 'mb-5', 'flex', 'items-center', 'justify-between');
        const price = document.createElement('p');
        price.innerHTML = `<span class="text-3xl font-bold text-white">$${product.price}</span><span class="text-sm text-white line-through">${product.price}</span>`;
        priceDiv.appendChild(price);
        const addButton = document.createElement('button');
        addButton.setAttribute("data-add", product.productId);
        addButton.classList.add('hover:border-white/40', 'flex', 'items-center', 'justify-center', 'rounded-md', 'border', 'border-transparent', 'bg-blue-600', 'px-5', 'py-2.5', 'text-center', 'text-sm', 'font-medium', 'text-white', 'focus:outline-none', 'focus:ring-4', 'focus:ring-blue-300', 'w-full');
        addButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>Add to cart`;
        detailsDiv.appendChild(productLink);
        detailsDiv.appendChild(priceDiv);
        detailsDiv.appendChild(addButton);
        cardDiv.appendChild(link);
        cardDiv.appendChild(detailsDiv);
        return cardDiv;
    };
    

    const renderProducts = () => {
        const productCardContainer = document.querySelector("[data-element='product-container']");
        products.forEach((product) => productCardContainer.appendChild(createProductCard(product)));
    }

    
    //execute functions
    renderProducts();
    updateCart();

    //attatch click event listener to add product Button
    const addButtons = document.querySelectorAll('[data-add]');
    addButtons && addButtons.forEach((addButton) => addButton.addEventListener("click", (event) => {
        const eventTarget = (event.target);
        const addButton = eventTarget.closest("button");
        const productId = addButton.getAttribute("data-add");
        addProductToCart(productId);
        //update cart after item is added
        updateCart();
    }));

    //attatch click event listener to remove product Button
    const removeButtons = document.querySelectorAll('[data-remove]');
    removeButtons && removeButtons.forEach((removeButton) => removeButton.addEventListener("click", (event) => {
        const eventTarget = (event.target);
        const addButton = eventTarget.closest("button");
        const productId = addButton.getAttribute("data-remove");
        removeProductFromCart(productId);
        //update cart after item is removed
        updateCart();
    }));
})