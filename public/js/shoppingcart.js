/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/shoppingcart.js ***!
  \**************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * @author Yassir Elkhaili
 * @license GPL-3.0
 */

document.addEventListener("DOMContentLoaded", function () {
  var shoppingCartButton = document.querySelector("[data-element='cart-button']");
  var shoppingcart = document.querySelector("[data-element='shopping-cart']");
  var backgroundBackdrop = document.querySelector("[data-element='background-backdrop']");
  var shoppingCartCloseButton = document.querySelector("[data-element='cart-close-button']");
  var continueShoppingButton = document.querySelector("[data-element='continue-shopping']");
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
  [shoppingCartButton, backgroundBackdrop, shoppingCartCloseButton, continueShoppingButton].forEach(function (element) {
    return element && element.addEventListener("click", handleShoppingCart);
  });

  //shopping cart functionality
  // const products = [
  //     {
  //         "productId": "1",
  //         "productName": "Example Product 1",
  //         "price": 10.99,
  //         "quantity": 0
  //     },
  //     {
  //         "productId": "2",
  //         "productName": "Example Product 2",
  //         "price": 19.99,
  //         "quantity": 0
  //     },
  //     {
  //         "productId": "3",
  //         "productName": "Example Product 3",
  //         "price": 15.50,
  //         "quantity": 0
  //     },
  //     {
  //         "productId": "4",
  //         "productName": "Example Product 4",
  //         "price": 24.75,
  //         "quantity": 0
  //     },
  //     {
  //         "productId": "5",
  //         "productName": "Example Product 5",
  //         "price": 12.00,
  //         "quantity": 0
  //     },
  //     {
  //         "productId": "6",
  //         "productName": "Example Product 6",
  //         "price": 29.99,
  //         "quantity": 0
  //     }
  // ];

  var fetchProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var endpoint, response, _products;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            endpoint = window.location.href + 'products';
            _context.prev = 1;
            _context.next = 4;
            return fetch(endpoint);
          case 4:
            response = _context.sent;
            if (response.ok) {
              _context.next = 7;
              break;
            }
            throw new Error("Failed to fetch products. Status: ".concat(response.status));
          case 7:
            _context.next = 9;
            return response.json();
          case 9:
            _products = _context.sent;
            return _context.abrupt("return", _products);
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            throw new Error("Failed to fetch products: ".concat(_context.t0.message));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }));
    return function fetchProducts() {
      return _ref.apply(this, arguments);
    };
  }();
  var productCounter = document.querySelector("[data-element='product-count']");

  //initialize cart in localstorage
  !localStorage.getItem("cart") && localStorage.setItem("cart", JSON.stringify([]));
  var addProductToCart = function addProductToCart(productId) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var product = products.find(function (product) {
      return product.productId === productId;
    });
    var productExists = cart.some(function (product) {
      return product.productId === productId;
    });
    if (!productExists) {
      if (product.quantity === 0) product.quantity = (product.quantity || 0) + 1;
      cart.push(product);
    } else {
      //if it already exists find and update the quantity
      cart.forEach(function (product) {
        if (product.productId === productId) {
          product.quantity = (product.quantity || 0) + 1;
          return;
        }
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  var removeProductFromCart = function removeProductFromCart(productId) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(function (item) {
      return item.productId !== productId;
    });
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  var createCartItem = function createCartItem(product) {
    var listItem = document.createElement('li');
    listItem.classList.add('flex', 'py-6');
    var imageDiv = document.createElement('div');
    imageDiv.classList.add('h-24', 'w-24', 'flex-shrink-0', 'overflow-hidden', 'rounded-md', 'border', 'border-gray-200');
    var image = document.createElement('img');
    image.src = 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg';
    image.alt = 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.';
    image.classList.add('h-full', 'w-full', 'object-cover', 'object-center');
    imageDiv.appendChild(image);
    var detailsDiv = document.createElement('div');
    detailsDiv.classList.add('ml-4', 'flex', 'flex-1', 'flex-col');
    var innerDiv1 = document.createElement('div');
    var titlePriceDiv = document.createElement('div');
    titlePriceDiv.classList.add('flex', 'justify-between', 'text-base', 'font-medium', 'text-gray-900');
    var productTitle = document.createElement('h3');
    productTitle.innerHTML = '<a href="#">' + product.name + '</a>';
    var price = document.createElement('p');
    price.textContent = '$' + product.price;
    price.classList.add('ml-4');
    titlePriceDiv.appendChild(productTitle);
    titlePriceDiv.appendChild(price);
    var color = document.createElement('p');
    color.textContent = 'Salmon';
    color.classList.add('mt-1', 'text-sm', 'text-gray-500');
    innerDiv1.appendChild(titlePriceDiv);
    innerDiv1.appendChild(color);
    var innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('flex', 'flex-1', 'items-end', 'justify-between', 'text-sm');
    var quantity = document.createElement('p');
    quantity.textContent = 'Qty ' + product.quantity;
    quantity.classList.add('text-gray-500');
    var removeButtonDiv = document.createElement('div');
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.setAttribute("data-remove", product.id);
    removeButton.classList.add('font-medium', 'text-blue-600', 'hover:text-blue-500');
    //add remove event listener
    removeButton.addEventListener("click", function (event) {
      var eventTarget = event.target;
      var addButton = eventTarget.closest("button");
      var productId = addButton.getAttribute("data-remove");
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
  };
  var updateProductsTotalPrice = function updateProductsTotalPrice() {
    var totalPrice = 0;
    var totalContainer = document.querySelector("[data-total]");
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(function (item) {
      return totalPrice += item.price * item.quantity;
    });
    totalContainer.textContent = '$' + totalPrice.toFixed(2); //2 digits after comma for ux
  };
  var updateCart = function updateCart() {
    var productList = document.querySelector("[role='list']");
    var cart = JSON.parse(localStorage.getItem('cart'));
    //clear existing cart items
    while (productList.firstChild) productList.removeChild(productList.firstChild);
    //update cart with products if product doesn't already exists
    cart.forEach(function (product) {
      return productList.appendChild(createCartItem(product));
    });
    //update cart toggle button item counter
    if (productCounter) productCounter.textContent = cart.length;
    updateProductsTotalPrice();
  };

  //generate and render the products on the home page
  var createProductCard = function createProductCard(product) {
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('group', 'border-gray-100/30', 'flex', 'w-full', 'max-w-xs', 'flex-col', 'self-center', 'overflow-hidden', 'rounded-lg', 'border', 'bg-gray-700', 'shadow-md');
    var link = document.createElement('a');
    link.classList.add('relative', 'mx-3', 'mt-3', 'flex', 'h-60', 'overflow-hidden', 'rounded-xl');
    link.href = '#';
    var primaryImg = document.createElement('img');
    primaryImg.classList.add('peer', 'absolute', 'top-0', 'right-0', 'h-full', 'w-full', 'object-cover');
    primaryImg.src = "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b";
    primaryImg.alt = 'product image';
    var secondaryImg = document.createElement('img');
    secondaryImg.classList.add('peer', 'peer-hover:right-0', 'absolute', 'top-0', '-right-96', 'h-full', 'w-full', 'object-cover', 'transition-all', 'delay-100', 'duration-1000', 'hover:right-0');
    secondaryImg.src = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
    secondaryImg.alt = 'product image';
    var svg = "<svg class=\"group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" width=\"1em\" height=\"1em\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 32 32\"><path fill=\"currentColor\" d=\"M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z\" /></svg>";
    link.innerHTML = svg;
    link.appendChild(primaryImg);
    link.appendChild(secondaryImg);
    var detailsDiv = document.createElement('div');
    detailsDiv.classList.add('mt-4', 'px-5', 'pb-5');
    var productLink = document.createElement('a');
    productLink.href = '#';
    var title = document.createElement('h5');
    title.classList.add('text-xl', 'tracking-tight', 'text-white');
    title.textContent = product.name;
    productLink.appendChild(title);
    var priceDiv = document.createElement('div');
    priceDiv.classList.add('mt-2', 'mb-5', 'flex', 'items-center', 'justify-between');
    var price = document.createElement('p');
    price.innerHTML = "<span class=\"text-3xl font-bold text-white\">$".concat(product.price, "</span><span class=\"text-sm text-white line-through\">").concat(product.price, "</span>");
    priceDiv.appendChild(price);
    var addButton = document.createElement('button');
    addButton.setAttribute("data-add", product.id);
    addButton.classList.add('hover:border-white/40', 'flex', 'items-center', 'justify-center', 'rounded-md', 'border', 'border-transparent', 'bg-blue-600', 'px-5', 'py-2.5', 'text-center', 'text-sm', 'font-medium', 'text-white', 'focus:outline-none', 'focus:ring-4', 'focus:ring-blue-300', 'w-full');
    addButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"mr-2 h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z\" /></svg>Add to cart";
    detailsDiv.appendChild(productLink);
    detailsDiv.appendChild(priceDiv);
    detailsDiv.appendChild(addButton);
    cardDiv.appendChild(link);
    cardDiv.appendChild(detailsDiv);
    return cardDiv;
  };
  var toggleLoader = function toggleLoader() {
    var loader = document.getElementById("loader");
    loader.classList.toggle("hidden");
  };
  var renderProducts = function renderProducts() {
    var productCardContainer = document.querySelector("[data-element='product-container']");
    toggleLoader();
    fetchProducts().then(function (products) {
      products.forEach(function (product) {
        return productCardContainer.appendChild(createProductCard(product));
      });
    })["catch"](function (error) {
      return console.error(error);
    })["finally"](function () {
      return toggleLoader();
    });
  };

  //execute functions
  renderProducts();
  updateCart();

  //attatch click event listener to add product Button
  var addButtons = document.querySelectorAll('[data-add]');
  addButtons && addButtons.forEach(function (addButton) {
    return addButton.addEventListener("click", function (event) {
      var eventTarget = event.target;
      var addButton = eventTarget.closest("button");
      var productId = addButton.getAttribute("data-add");
      addProductToCart(productId);
      //update cart after item is added
      updateCart();
    });
  });

  //attatch click event listener to remove product Button
  var removeButtons = document.querySelectorAll('[data-remove]');
  removeButtons && removeButtons.forEach(function (removeButton) {
    return removeButton.addEventListener("click", function (event) {
      var eventTarget = event.target;
      var addButton = eventTarget.closest("button");
      var productId = addButton.getAttribute("data-remove");
      removeProductFromCart(productId);
      //update cart after item is removed
      updateCart();
    });
  });
});
/******/ })()
;