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
let bestselletHtml= '';
bestsellers.forEach((bestseller) =>{
    bestselletHtml+= ` <div class="bestseller">
    <img src="../images/${bestseller.image}"  >
    <h5>${bestseller.name}</h5>
    <p>$${bestseller.price}</p>
    <span>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </span>
    <button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button>
</div>
`;
});
bestsellerDisplay.innerHTML=bestselletHtml;