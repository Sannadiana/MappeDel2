/****** HEADER ARRAY ******/
let elements = ['LightUp', 'images/icones.png']


let element = document.createElement('div');
let logo = document.createElement('h1');
let icone = document.createElement('img');

element.classList.add('header-element-container');
logo.classList.add('header-logo');
icone.classList.add('header-img');

logo.innerHTML = elements[0];
icone.src = elements[1];

element.appendChild(logo);
element.appendChild(icone);

document.body.appendChild(element);



/******* PRODUCT ARRAY WITH OBJECTS AND ITS ELEMENTS ******/

let products = [{
        title: 'Pholc',
        price: '5999,-',
        description: 'Mobil5 Black',
        img: 'images/PHOLC-Mobil5Taklampe-Sort.jpg',
        heartIcon: 'images/clipart-hollow-heart-png.jpeg',
        cartIcon: 'images/COLOURBOX29626143.jpg',
        inStockIcon: 'images/green-dott.png',
        inStock: 'In Stock',
        saleS: ''
    },

    {
        title: 'PH Pinecone',
        price: '15000,-',
        description: 'Louis Poulsen, White',
        img: 'images/LOUISPOULSENPH-KonglePendel-Ø480 200W, hvit.jpg',
        heartIcon: 'images/clipart-hollow-heart-png.jpeg',
        cartIcon: 'images/COLOURBOX29626143.jpg',
        inStockIcon: 'images/red-dott.png',
        inStock: 'Preorder Item',
        saleS: ''
    },

    {
        title: 'Twice',
        price: '5000,-',
        description: 'Twice Gold',
        img: 'images/HOUSEDOCTOR-TwiceTaklampe-Grå.jpg',
        heartIcon: 'images/clipart-hollow-heart-png.jpeg',
        cartIcon: 'images/COLOURBOX29626143.jpg',
        inStockIcon: 'images/green-dott.png',
        inStock: 'In Stock',
        saleS: ''
    },
    {
        title: 'KobberHouse',
        price: '3999,-',
        description: 'Asymmetric, Gold',
        img: 'images/AsymmetricLampeskjerm-KobberHouse.jpg',
        heartIcon: 'images/clipart-hollow-heart-png.jpeg',
        cartIcon: 'images/COLOURBOX29626143.jpg',
        inStockIcon: 'images/green-dott.png',
        inStock: 'In Stock',
        saleS: 'images/sale.png'
    },

    {
        title: 'Enigma',
        price: '8000,-',
        description: 'Louis Paulsen, Aliminium',
        img: 'images/LOUISPOULSENEnigma-425Pendel-Aluminium.jpg',
        heartIcon: 'images/clipart-hollow-heart-png.jpeg',
        cartIcon: 'images/COLOURBOX29626143.jpg',
        inStockIcon: 'images/green-dott.png',
        inStock: 'In Stock',
        saleS: 'images/sale.png'
    }
]



/******* DECLARE INITIALIZE AND GENERATING HTML STRUCTURE FOR THE OBJECTS ELEMENTS ******/

let container = document.createElement('div');
container.classList.add('container-product-area');


/******* LOOPING THROUGH THE ARRAY AND GIVE THE ELEMENTS HTML STRUCTURE AND CLASSES ******/

for (let i = 0; i < products.length; i++) {
    let product = document.createElement('div');
    let sale = document.createElement('img');
    let img = document.createElement('img');
    let tit = document.createElement('h2');
    let desc = document.createElement('p');
    let price = document.createElement('h3');
    let heart = document.createElement('img');
    let cart = document.createElement('img');
    let stockI = document.createElement('img');
    let stockT = document.createElement('p');



    product.classList.add('product-element-container');
    sale.classList.add('product-sale');
    img.classList.add('product-img');
    tit.classList.add('product-tit');
    desc.classList.add('product-desc');
    price.classList.add('product-price');
    heart.classList.add('product-heart');
    cart.classList.add('product-cart');
    stockI.classList.add('product-stockI');
    stockT.classList.add('products-stockT');


    /******* INITIALIZE EACH ELEMENT VALUE ******/



    sale.src = products[i].saleS;
    if (products[i].saleS == '') {
        sale.style.display = 'none';
    }
    img.src = products[i].img;
    tit.innerHTML = products[i].title;
    desc.innerHTML = products[i].description;
    price.innerHTML = products[i].price;
    heart.src = products[i].heartIcon;
    cart.src = products[i].cartIcon;
    stockI.src = products[i].inStockIcon;
    stockT.innerHTML = products[i].inStock;

    product.appendChild(sale);
    product.appendChild(img);
    product.appendChild(tit);
    product.appendChild(desc);
    product.appendChild(price);
    product.appendChild(heart);
    product.appendChild(cart);
    product.appendChild(stockI);
    product.appendChild(stockT);

    container.appendChild(product);
}


document.body.appendChild(container);