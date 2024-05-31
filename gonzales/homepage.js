const product = [
    {
        id: 0,
        image: 'elfprimer.png',
        title: 'Elf Primer',
        price: 199,
        category: 'Primer',
    },
    {
        id: 1,
        image: 'maybellineprimer.png',
        title: 'Maybelline Primer',
        price: 299,
        category: 'Primer',
    },
    {
        id: 2,
        image: 'nyxprimer.png',
        title: 'NYX Primer',
        price: 199,
        category: 'Primer',
    },
    {
        id: 3,
        image: 'o2oprimer.png',
        title: 'O.TWO.O Primer',
        price: 399,
        category: 'Primer',
    },
    {
        id: 4,
        image: 'maybellineliquid.png',
        title: 'Maybelline Liquid Foundation',
        price: 399,
        category: 'Liquid Foundation',
    },
    {
        id: 5,
        image: 'macliquid.png',
        title: 'MAC Lquid Foundation',
        price: 399,
        category: 'Liquid Foundation',
    },
    {
        id: 6,
        image: 'nichidoliquid.png',
        title: 'Nichido Liquid Foundation',
        price: 299,
        category: 'Liquid Foundation',
    },
    {
        id: 7,
        image: 'images/Large Fruit Bowl.jpg',
        title: 'Large Fruit Bowl',
        price: 499,
        category: 'Tableware',
    },
    {
        id: 8,
        image: 'images/Large Serving Platter.jpg',
        title: 'Large Serving Platter',
        price: 299,
        category: 'Tableware',
    },
    {
        id: 9,
        image: 'images/spatulas.jpg',
        title: 'Spatula Set',
        price: 299,
        category: 'Utensils',
    },
    {
        id: 10,
        image: 'images/Spatula and  Soup Spoon Set.jpg',
        title: 'Spatula and Soup Spoon Set',
        price: 399,
        category: 'Utensils',
    },
    {
        id: 11,
        image: 'images/Mortar & Pestle.jpg',
        title: 'Mortar & Pestle',
        price: 399,
        category: 'Utensils',
    },
    {
        id: 12,
        image: 'images/Wooden Measuring Cups.jpg',
        title: 'Wooden Measuring Cups',
        price: 299,
        category: 'Utensils',
    },
    {
        id: 13,
        image: 'images/utensils.jpg',
        title: 'Spoon and Fork Set',
        price: 199,
        category: 'Cutlery',
    },
    {
        id: 14,
        image: 'images/straws.jpg',
        title: 'Straw',
        price: 99,
        category: 'Cutlery',
    },
    {
        id: 15,
        image: 'images/Salad Serving Spoon Fork Set.jpg',
        title: 'Salad Serving Spoon Fork Set',
        price: 299,
        category: 'Cutlery',
    },
    {
        id: 16,
        image: 'images/Bento Box Set.jpg',
        title: 'Bento Box Set',
        price: 299,
        category: 'Food Canisters',
    },
    {
        id: 17,
        image: 'images/Wood Spice Tower.jpg',
        title: 'Wood Spice Tower.jpg',
        price: 299,
        category: 'Food anisters',
    },
];

const cart = [];

        const addToCart = (productId) => {
            cart.push({ ...product[productId] });
            displayCart();
            document.getElementById("count").innerHTML = cart.length; 
        };

        const removeCartItem = (index) => {
            cart.splice(index, 1);
            displayCart();
            document.getElementById("count").innerHTML = cart.length; 
            console.log("Item removed from cart. New cart count:", cart.length);
        };

        const displayCart = () => {
            const cartItemDiv = document.getElementById('cartItem');
            cartItemDiv.innerHTML = '';
            let total = 0;
            if (cart.length === 0) {
                cartItemDiv.textContent = "Your cart is empty";
                document.getElementById("total").innerHTML = "Php 0.00";
            } else {
                cart.forEach((item, index) => {
                    total += item.price; 
                    const cartItem = document.createElement('div');
                    cartItem.classList.add('cart-item');
                    cartItem.innerHTML = `
                        <div class='row-img'>
                            <img class='rowing' src='${item.image}' alt='${item.title}'>
                        </div>
                        <p style='font-size:12px;'>${item.title}</p>
                        <h2 style='font-size:15px;'>Php ${item.price}.00</h2>
                        <button class='remove-button' onclick='removeCartItem(${index})'>Remove</button>
                    `;
                    cartItemDiv.appendChild(cartItem);
                });
                document.getElementById("total").innerHTML = "Php " + total.toFixed(2); 
            }
        };

        const rootDiv = document.getElementById('root');
        product.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('box');
            productDiv.innerHTML = `
                <div class="img-box">
                    <img class="images" src="${item.image}" alt="${item.title}">
                </div>
                <div class="bottom">
                    <p>${item.title}</p>
                    <h2>Php ${item.price}.00</h2>
                    <button onclick="addToCart(${index})">Add to cart</button>
                </div>
            `;
            rootDiv.appendChild(productDiv);
        });