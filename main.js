import {cart,addProduct} from '../cart.js';
import {lines} from '../product.js';

function getBestsellerData(){ 

let bestsellerDisplay =document.querySelector('.bestseller-container');
let bestsellerHtml= '';

    lines.forEach((kind) =>{
        if(kind.kindLine==="Bestsellers"){
            kind.features.forEach(bestseller =>{
                bestsellerHtml+= ` 
                <div class="bestseller">
                <img src="../images/${bestseller.image}"  >
                <h5 class="name">${bestseller.name}</h5>
                <p>$${bestseller.price}</p>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <button class="add-to-cart-btn" data-feature-id="${bestseller.id}">Buy</button>
            </div>
            `;
            });

        }

    });
bestsellerDisplay.innerHTML=bestsellerHtml;
}

function getFaceData(){ 
    let faceDisplay =document.querySelector('.face-container');
    let faceHtml= '';
    lines.forEach((kind) =>{
        if(kind.kindLine==="FaceProducts"){
            kind.features.forEach(faceProduct =>{
        faceHtml+= ` <div class="bestseller">
        <img src="../images/${faceProduct.image}"  >
        <h5 class="name">${faceProduct.name}</h5>
        <p>$${faceProduct.price}</p>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <button class="add-to-cart-btn" data-feature-id="${faceProduct.id}">Buy</button>
        </div>
    `;
    });
}
    }); 
    faceDisplay.innerHTML=faceHtml; 
}

function getBodyData(){ 
    let bodyDisplay =document.querySelector('.body-container');
    let bodyHtml= '';
    lines.forEach((kind) =>{
        if(kind.kindLine==="BodyProducts"){
            kind.features.forEach(bodyProduct =>{
        bodyHtml+= ` <div class="bestseller">
        <img src="../images/${bodyProduct.image}"  >
        <h5 class="name">${bodyProduct.name}</h5>
        <p>$${bodyProduct.price}</p>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <button class="add-to-cart-btn" data-feature-id="${bodyProduct.id}">Buy</button>
        </div>
    `;

        });

        }
    });
    bodyDisplay.innerHTML=bodyHtml; 
} 
 
export function updateQuantity(){
    let quantityCart=0;
    cart.forEach((item)=>{
        quantityCart+=item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML=quantityCart;

}
document.addEventListener('DOMContentLoaded', function () {
    function handleAddToCart(event) {
        if (event.target && event.target.classList.contains('add-to-cart-btn')) {
            const productId = event.target.getAttribute('data-feature-id');
            addProduct(productId);
            updateQuantity();
            saveData();
        }
    }

    if (window.location.pathname.includes('main/index.html')) {
        getBestsellerData();
        document.querySelector('.bestseller-container').addEventListener('click', handleAddToCart);
    } else if (window.location.pathname.includes('products/face.html')) {
        getFaceData();
        document.querySelector('.face-container').addEventListener('click', handleAddToCart);
    }
    else if (window.location.pathname.includes('products/body.html')) {
        getBodyData();
        document.querySelector('.body-container').addEventListener('click', handleAddToCart);
    }
   
});