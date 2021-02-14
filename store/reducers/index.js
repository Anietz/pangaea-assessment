function repositoryReducer(state, action) {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      return addItem(state, action);
    }
    case "SET_PRODUCTS": {
      return {...state, products:action.payload};
    }
    case "SET_CURRENCIES": {
      return {...state, currencies:action.payload};
    }
    case "UPDATE_CURRENCY": {
      return updateCurrency(state,action);
    }
     case "REMOVE_CART_ITEM": {
      return removeItem(state, action);
    }
     case "REMOVE_ONE_CART_ITEM": {
      return removeOnlyOneItem(state, action);
    }
    default:
      return state;
  }
}

function removeOnlyOneItem(state, action){

    let cartItems = JSON.parse( JSON.stringify(state.cartItems) );
    let item = action.payload;

    const itemId = action.payload.id;

    const checkIfExistAndgetIndex = cartItems.findIndex((i)=> itemId == i.id );

    if(item.total > 1){
         cartItems[checkIfExistAndgetIndex].total--;
    }else{
        cartItems.splice(checkIfExistAndgetIndex, 1);
    }

    const totalPrice = calculateTotalPrice(cartItems);

  return { ...state, cartItems:cartItems,totalCartPrice:totalPrice};

}
 

function removeItem(state, action){

    let cartItems = JSON.parse( JSON.stringify(state.cartItems) );
    let item = action.payload;

    const itemId = action.payload.id;

    const checkIfExistAndgetIndex = cartItems.findIndex((i)=> itemId == i.id );
    cartItems.splice(checkIfExistAndgetIndex, 1);

    const totalPrice = calculateTotalPrice(cartItems);

  return { ...state, cartItems:cartItems,totalCartPrice:totalPrice};

}
 

function updateCurrency(state, action){

    let cartItems = JSON.parse(JSON.stringify(state.cartItems));
    let currency = action.payload.data.currency;
    let oldCurrency = action.payload.data.oldCurrency

    let newProductLists = state.products;

    cartItems.map((cart,index)=>{

          const itemId = cart.id;
          const checkIfExistAndgetIndex = newProductLists.findIndex((i)=> itemId == i.id );

          if(checkIfExistAndgetIndex != -1){
                const newProduct = newProductLists[checkIfExistAndgetIndex];
                cartItems[index].price = newProduct.price 
                cartItems[index].currency =  currency;
            }
        
     })

  const totalPrice = calculateTotalPrice(cartItems);

  return { ...state, cartItems:cartItems,totalCartPrice:totalPrice,selectedCurrency:currency};

}

function addItem(state, action){

   let cartItems = JSON.parse( JSON.stringify(state.cartItems) );
   let item = action.payload;

   if(cartItems.length == 0){
        item.total = 1;
        item.currency = state.selectedCurrency;
        item.dateAdded =  Date.now();
        cartItems.push(item)
   }else{
        const itemId = action.payload.id;
        const checkIfExistAndgetIndex = cartItems.findIndex((i)=> itemId == i.id );

        if(checkIfExistAndgetIndex != -1){
             cartItems[checkIfExistAndgetIndex].total++;
        }else{
             item.total = 1;
             item.currency = state.selectedCurrency;
             item.dateAdded = Date.now();
             cartItems.push(item)
        }
   }

   const totalPrice = calculateTotalPrice(cartItems);

  return { ...state, cartItems:cartItems,totalCartPrice:totalPrice};
}


function calculateTotalPrice(items){
   let totalPrice = 0;
   items.map((item)=>{
       totalPrice += parseFloat(item.price*item.total);
   })
   return totalPrice;
}


export default repositoryReducer;