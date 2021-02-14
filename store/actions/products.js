function setCurrencies(data){
  return {
    type: "SET_CURRENCIES",
    payload: data,
  };
}

function setProducts(data){
  return {
    type: "SET_PRODUCTS",
    payload: data,
  };
}

export default {setCurrencies,setProducts }
