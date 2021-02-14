function addItem(data) {
  return {
    type: "ADD_CART_ITEM",
    payload: data,
  };
}

function removeItem(data) {
  return {
    type: "REMOVE_CART_ITEM",
    payload: data,
  };
}

function removeOnlyOneItem(data) {
  return {
    type: "REMOVE_ONE_CART_ITEM",
    payload: data,
  };
}

function updateCurrency(data) {
  return {
    type: "UPDATE_CURRENCY",
    payload: {data},
  };
}


export default {addItem,removeItem,removeOnlyOneItem,updateCurrency}
