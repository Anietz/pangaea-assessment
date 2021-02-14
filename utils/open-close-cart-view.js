const openCart   =  () => {
        document.getElementsByClassName("cart-overlay")[0].style.visibility = "visible";
        document.getElementsByClassName("cart-overlay")[0].style.opacity = 1;
        document.getElementsByClassName("product-list")[0].style.height = "250px";
        document.getElementsByClassName("product-list")[0].style.overflow = "hidden";
}

const closeCart   =  () => {
        document.getElementsByClassName("cart-overlay")[0].style.visibility = "hidden";
        document.getElementsByClassName("cart-overlay")[0].style.opacity = 0;
        document.getElementsByClassName("product-list")[0].style.height = "100%";
        document.getElementsByClassName("product-list")[0].style.overflow = "auto";
}

export {openCart,closeCart};


