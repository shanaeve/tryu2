const product = [
    {
        id: 0,
        image: 'elfprimer.png',
        title: 'Elf Primer',
        price: 567,
        category: 'Primer',
    },
    {
        id: 1,
        image: 'maybellineprimer.png',
        title: 'Maybelline Primer',
        price: 361,
        category: 'Primer',
    },
    {
        id: 2,
        image: 'nyxprimer.png',
        title: 'NYX Primer',
        price: 900,
        category: 'Primer',
    },
    {
        id: 3,
        image: 'o2oprimer.png',
        title: 'O.TWO.O Primer',
        price: 219,
        category: 'Primer',
    },
    {
        id: 4,
        image: 'maybellineliquid.png',
        title: 'Maybelline Liquid Foundation',
        price: 349,
        category: 'Liquid Foundation',
    },
    {
        id: 5,
        image: 'macliquid.png',
        title: 'MAC Lquid Foundation',
        price: 2400,
        category: 'Liquid Foundation',
    },
    {
        id: 6,
        image: 'nichidoliquid.png',
        title: 'Nichido Liquid Foundation',
        price: 271,
        category: 'Liquid Foundation',
    },
    {
        id: 7,
        image: 'blkpowder.png',
        title: 'BLK Powder Foundation',
        price: 599,
        category: 'Powder Foundation',
    },
    {
        id: 8,
        image: 'macpowder.png',
        title: 'MAC Powder Foundation',
        price: 1900,
        category: 'Powder Foundation',
    },
    {
        id: 9,
        image: 'fitmepowder.png',
        title: 'Maybelline Powder Foundation',
        price: 249,
        category: 'Powder Foundation',
    },
    {
        id: 10,
        image: 'barenblisspowder.png',
        title: 'Barenbliss Powder Foundation',
        price: 599,
        category: 'Powder Foundation',
    },
    {
        id: 11,
        image: 'rarebeautyliquidblush.png',
        title: 'Rare Beauty Liquid Blush',
        price: 1299,
        category: 'Liquid Blush',
    },
    {
        id: 12,
        image: 'focallureliquidblush.png',
        title: 'Focallure Liquid Blush',
        price: 299,
        category: 'Liquid Blush',
    },
    {
        id: 13,
        image: 'elfliquidblush.png',
        title: 'Elf Liquid Blush',
        price: 199,
        category: 'Liquid Blush',
    },
    {
        id: 14,
        image: 'narsliquidblush.png',
        title: 'Nars Liquid Blush',
        price: 2127,
        category: 'Liquid Blush',
    },
    {
        id: 15,
        image: 'issycopowderblush.png',
        title: 'Issy & Co. Powder Blush',
        price: 349,
        category: 'Powder Blush',
    },
    {
        id: 16,
        image: 'byspowderblush.png',
        title: 'BYS Powder Blush',
        price: 499,
        category: 'Powder Blush',
    },
    {
        id: 17,
        image: 'carelinepowderblush.png',
        title: 'Careline Powder Blush',
        price: 110,
        category: 'Powder Blush',
    },
    {
        id: 18,
        image: 'bobbibrownloose.png',
        title: 'Bobbi Brown Loose Powder',
        price: 3177,
        category: 'Loose Powder',
    },
    {
        id: 19,
        image: 'narsloose.png',
        title: 'Nars Loose Powder',
        price: 2150,
        category: 'Loose Powder',
    },
    {
        id: 20,
        image: 'barenblissloose.png',
        title: 'Barenbliss Loose Powder',
        price: 349,
        category: 'Loose Powder',
    },
    {
        id: 21,
        image: 'bysloose.png',
        title: 'BYS Loose Powder',
        price: 799,
        category: 'Loose Powder',
    },
    {
        id: 22,
        image: 'maclipstick.png',
        title: 'MAC Lipstcik',
        price: 1100,
        category: 'Lipstick',
    },
    {
        id: 23,
        image: 'everbilenalistick.png',
        title: 'Everbilena Lipstick',
        price: 185,
        category: 'Lipstick',
    },
    {
        id: 24,
        image: 'blklipstick.png',
        title: 'BLK Lipstick',
        price: 349,
        category: 'Lipstick',
    },
    {
        id: 25,
        image: 'maybellinelipstick.png',
        title: 'Maybelline Superstay',
        price: 329,
        category: 'Lipstick',
    },
    {
        id: 26,
        image: 'dazzlemesettingspray.png',
        title: 'Dazzle Me Setting Spray',
        price: 159,
        category: 'Setting Spray',
    },
    {
        id: 27,
        image: 'elfsettingspray.png',
        title: 'Elf Setting Spray',
        price: 699,
        category: 'Setting Spray',
    },
    {
        id: 28,
        image: 'nichidosettingspray.png',
        title: 'Nichido Setting Spray',
        price: 291,
        category: 'Setting Spray',
    },
    {
        id: 29,
        image: 'nyxsettingspray.png',
        title: 'Nyx Setting Spray',
        price: 369,
        category: 'Setting Spray',
    }
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
                        <p style='font-size: 20px;'>${item.title}</p>
                        <h2 style='font-size: 30px;'>Php ${item.price}.00</h2>
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
                    <p style='font-size: 20px;'>${item.title}</p>
                    <h2 style='font-size: 29px;'>Php ${item.price}.00</h2>
                    <button onclick="addToCart(${index})">Add to cart</button>
                </div>
            `;
            rootDiv.appendChild(productDiv);
        });