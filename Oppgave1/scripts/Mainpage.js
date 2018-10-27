/****** HEADER ******/
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



/******* PRODUCTS ******/

let products = [
    {
        title: 'KobberHouse',
        price: '3999,-',
        description: 'Asymmetric, Gold',
        img: 'images/AsymmetricLampeskjerm-KobberHouse.jpg',
    },

    {
        title: 'Pholc',
        price: '5999,-',
        description: 'Mobil5 Black',
        img: 'images/PHOLC-Mobil5Taklampe-Sort.jpg'
    },

    {
        title: 'PH Pinecone',
        price: '15000,-',
        description: 'Louis Poulsen, White',
        img: 'images/LOUISPOULSENPH-KonglePendel-Ø480 200W, hvit.jpg'
    },

    {
        title: 'Twice',
        price: '5000,-',
        description: 'Twice Gold',
        img: 'images/HOUSEDOCTOR-TwiceTaklampe-Grå.jpg'
    },
    {
        title: 'Enigma',
        price: '8000,-',
        description: 'Louis Paulsen, Aliminium',
        img: 'images/LOUISPOULSENEnigma-425Pendel-Aluminium.jpg'
    }
]




let container = document.createElement('div');
container.classList.add('container-product-area');



for (let i = 0; i < products.length; i++) {
    let product = document.createElement('div');
    let img = document.createElement('img');
    let tit = document.createElement('h2');
    let desc = document.createElement('p');
    let price = document.createElement('h3');

    product.classList.add('product-element-container');
    img.classList.add('product-img');
    tit.classList.add('product-tit');
    desc.classList.add('product-desc');
    price.classList.add('product-price');

    img.src = products[i].img;
    tit.innerHTML = products[i].title;
    desc.innerHTML = products[i].description;
    price.innerHTML = products[i].price;

    product.appendChild(img);
    product.appendChild(tit);
    product.appendChild(desc);
    product.appendChild(price);
    container.appendChild(product);

    //document.getElementsByClassName('product-container').appendChild(product);
}


document.body.appendChild(container);
