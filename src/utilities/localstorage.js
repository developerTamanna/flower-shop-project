

const getCartFromLocalStorage =()=>{
    const storedCartString = localStorage.getItem('cart')

    if(storedCartString){
        const storedCard = JSON.parse(storedCartString);
        return storedCard
    }
    return[]
}
// getCartFromLocalStorage()


const saveCartToLocalStorage = cart =>{
    const CartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', CartStringify)
}



const addItemToCartToLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    // cart.push(id);
    const newCart =[...cart, id]

saveCartToLocalStorage(newCart)

}

export{getCartFromLocalStorage as getStoreCart, addItemToCartToLocalStorage as addToStoreCart}