import {cart} from '../cart.js';
import {bestsellers} from '../product.js';
getBestsellerData();
 

function getBestsellerData(){ 

let bestsellerDisplay =document.querySelector('.bestseller-container');
let bestsellerHtml= '';
bestsellers.forEach((bestseller) =>{
    bestsellerHtml+= ` <div class="bestseller">
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
    <button class="add-to-cart-btn" data-bestseller-id="${bestseller.id}">Buy</button>
</div>
`;
});
bestsellerDisplay.innerHTML=bestsellerHtml;
}

function getFaceData(){ 
    let faceDisplay =document.querySelector('.face-container');
    let faceHtml= '';
    faceProducts.forEach((faceProduct) =>{
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
        <button class="add-to-cart-btn" data-face-id="${faceProduct.id}">Buy</button>
        </div>
    `;
    });
    faceDisplay.innerHTML=faceHtml;
    }

    
function getBodyData(){ 
    let bodyDisplay =document.querySelector('.body-container');
    let bodyHtml= '';
    bodyProducts.forEach((bodyProduct) =>{
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
        <button class="add-to-cart-btn" data-body-id="${bodyProduct.id}
        ">Buy</button>
        </div>
    `;
    });
    bodyDisplay.innerHTML=bodyHtml;
} 
 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.bestseller-container').addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('add-to-cart-btn')) {
            const productId = event.target.getAttribute('data-bestseller-id');

            let matched;

            cart.forEach((item)=>{
                if(productId===item.productId){
                    matched=item;
                }
            });

            if(matched){
                matched.quantity+=1;
            }else{

                cart.push(
                    {
                        productId:  productId,
                        quantity: 1,
                    });
            }

            console.log(cart);
            let quantityCart=0;
            cart.forEach((item)=>{
                quantityCart+=item.quantity;
                
            });
            document.querySelector('.js-cart-quantity').innerHTML=quantityCart;
            console.log(quantityCart);
     }
    });
});