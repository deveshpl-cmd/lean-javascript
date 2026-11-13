let cart = [
    { item: "Notebook", price: 50, quantity: 2 },
    { item: "Pen", price: 10, quantity: 3 }
];

let total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
}, 0);

console.log("Cart Total:", total);