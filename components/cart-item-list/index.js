import AllActions from '../../store/actions';
import {useDispatch} from 'react-redux';
import formatCurrency from './../../utils/formatCurrency';


export default function CartItemList({cart}){
    const dispatch  =  useDispatch();

    const addMoreItemNow  = (item)=>{
        dispatch(AllActions.cartActions.addItem(item));
    }

    const removeOneItem  = (item)=>{
        dispatch(AllActions.cartActions.removeOnlyOneItem(item));
    }

     const removeParentItem  = (item)=>{
        dispatch(AllActions.cartActions.removeItem(item));
    }


    return     ( <div className="cart-item d-flex flex-row justify-content-between p-3 mb-3">
                            <div className="cart-item-content">
                                <p className="cart-item-name mb-0">{cart.title}</p>
                                <span className="cart-item-description">One time purchase of Two Month supply.</span>
                                <div className="d-flex flex-row justify-content-between mt-2">
                                    <div>
                                        <div className="counter-container">
                                            <a onClick={()=>{
                                               removeOneItem(cart);
                                            }} className="counter-minus p-2 mr-1 pointer">-</a>
                                            <span className="counter-value">{cart.total}</span>
                                            <a onClick={()=>{
                                                addMoreItemNow(cart);
                                            }} className="counter-plus  p-2 ml-1 pointer ">+</a>
                                        </div>
                                    </div>
                                    <span className="cart-item-price">{cart.currency} { formatCurrency(cart.price*cart.total)}</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <img src={cart.image_url} />
                                <a onClick={()=>{
                                        removeParentItem(cart);
                                    }}   className="delete-cart-item pointer">
                                    <i className="fa fa-close"></i>
                                </a>
                            </div>
                        </div>
    )
}