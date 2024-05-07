export let cart=JSON.parse(localStorage.getItem('cart')) ||   [];

export function saveData(){
    localStorage.setItem('cart',JSON.stringify(cart));

}
export function addProduct(productId){
    
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

    saveData(); 
}

export function removeItem(productId){
    const cart2=[];
    cart.forEach((item)=>{
        if(item.productId!==productId){ 
        cart2.push(item);
    }
    })
    cart=cart2;
    saveData();
}