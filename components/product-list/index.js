import AllActions from '../../store/actions';
import {useDispatch} from 'react-redux'
import {openCart} from '../../utils/open-close-cart-view'
import formatCurrency from './../../utils/formatCurrency';


export default function ProductList({list,selectedCurrency}){
    const dispatch  =  useDispatch();

    const addItemNow  = (item)=>{
        dispatch(AllActions.cartActions.addItem(item));
        openCart();
    }

    return (
         <div className="product-list d-flex flex-wrap pt-5">

                 {   list.map((item,index)=>(
                        <div key={index} className="product p-md-5 text-center  p-sm-1" >
                           <div className="product-container mb-2">
                                <img className="product-image mb-3" src={item.image_url} />
                            <p className="product-name mb-2">{item.title}</p>
                           </div>
                            <p className="product-price mb-3">From: {selectedCurrency} {formatCurrency(item.price)}  </p>
                            <a onClick={()=>{
                                addItemNow(item);
                            }} className="add-cart-button pointer"  >Add to Cart</a>
                        </div>
                  ))

                }
              
      
        </div>
    )
}