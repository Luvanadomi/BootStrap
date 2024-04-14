function getBestsellerData(){ 
const bestsellers=[
    {
        id:1,
        name:"VITAL C hydrating anti-aging serum",
        price:82,
        image:"../images/ph1.avif",
    },
    {
        id:2,
        name:"ORMEDIC® balancing facial cleanser",
        price:102,
        image:"../images/ph2.avif",
    },{
        id:3,
        name:"AGELESS total pure hyaluronic 6 filler",
        price:67,
        image:"../images/ph3.webp",
    },
    {
        id:4,
        name:"ORMEDIC sheer pink lip enhancement complex",
        price:98,
        image:"../images/ph4.webp",
    },{
        id:5,
        name:"VITAL C hydrating  and intensive repair crème",
        price:56,
        image:"../images/ph5.webp",
    },{
        id:6,
        name:"VITAL C hydrating intense moisturizer",
        price:101,
        image:"../images/ph6.webp",
    },
];



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
    <button type="button" class="btn btn-sm shopping"><a href="../shopping/shop.html">Buy </a></button>
</div>
`;
});
bestsellerDisplay.innerHTML=bestsellerHtml;
}

function getFaceData(){ 
    const faceProducts=[
        {
            id:7,
            name:"SWISS PEPTIDE COMPLEX",
            price:85,
            image:"../images/face1.webp",
        },
        {
            id:8,
            name:"SWISS SUNCARE SPF50+",
            price:95,
            image:"../images/face2.webp",
        },{
            id:9,
            name:"SWISS SNOW ALGAE 24H FACE CREAM",
            price:95,
            image:"../images/face3.webp",
        },{
            id:10,
            name:"PEPTIDE MULTIPLEX CONCENTRATE",
            price:110,
            image:"../images/face4.webp",
        },
        {
            id:11,
            name:"STEM CELL PLASMA CONCENTRATE",
            price:95,
            image:"../images/face5.webp",
        },{
            id:12,
            name:"STEM CELL THERAPY CONCENTRATE",
            price:85,
            image:"../images/face6.webp",
        },{
            id:13,
            name:"VENOM THERAPY CONCENTRATE",
            price:95,
            image:"../images/face7.webp",
        },
        {
            id:14,
            name:"TIMELESS FOAMING CLEANSING BALM",
            price:38,
            image:"../images/face8.webp",
        },{
            id:15,
            name:"SWISS ROYAL EPIGEN TIMELESS ESSENCE",
            price:85,
            image:"../images/face9.webp",
        }
    ];
    
    
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
        <button type="button" class="btn btn-sm shopping"><a href="../shopping/shop.html">Buy</a></button>
    </div>
    `;
    });
    faceDisplay.innerHTML=faceHtml;
    }

    
function getBodyData(){ 
    const bodyProducts=[
        {
            id:16,
            name:"SWISS ALPINE GLOW PEELING SCRUB MASK",
            price:75,
            image:"../images/body1.webp",
        },
        {
            id:17,
            name:"SWISS ULTRA PEELING MASK",
            price:95,
            image:"../images/body2.webp",
        },{
            id:18,
            name:"BREAKOUT-PRONE SKIN",
            price:95,
            image:"../images/body3.webp",
        },{
            id:19,
            name:"SWISS SNOW ALGAE ESSENCE",
            price:58,
            image:"../images/body4.webp",
        },
        {
            id:20,
            name:"SWISS SNOW SILK SOUFLEE CLEANSER",
            price:58,
            image:"../images/body5.webp",
        },{
            id:21,
            name:"SWISS ULTRA PEELING MASK",
            price:110,
            image:"../images/body6.webp",
        },{
            id:22,
            name:"SWISS OXYGEN THERAPY",
            price:85,
            image:"../images/body7.webp",
        },
        {
            id:23,
            name:"SWISS PEPTIDE MATRIX",
            price:95,
            image:"../images/body8.webp",
        },{
            id:24,
            name:"NORMAL SKIN SET",
            price:85,
            image:"../images/body9.webp",
        }
    ];
    
    
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
        <button type="button" class="btn btn-sm shopping"><a href="../shopping/shop.html">Buy</a></button>
    </div>
    `;
    });
    bodyDisplay.innerHTML=bodyHtml;
    }