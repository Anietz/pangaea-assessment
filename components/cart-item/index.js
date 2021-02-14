import {closeCart} from '../../utils/open-close-cart-view';
import CartItemList from '../cart-item-list'
import {useSelector,useDispatch} from 'react-redux';
import AllActions from '../../store/actions';
import allQuery from '../../services/graphql/query/get-products';
import { useEffect, useState } from 'react';
import formatCurrency from './../../utils/formatCurrency';
import sortItems from './../../utils/sortItems';

export default function CartItem({currency}){
    const selectedCurrency = useSelector(state=>state.selectedCurrency);
    const totalCartPrice = useSelector(state=>state.totalCartPrice);
    const cartItems = useSelector(state=>state.cartItems);
    const sortedCartItems = sortItems(cartItems);
    const dispatch  =  useDispatch();

    const [defaultCurrency,setSelectedCurrency] = useState(selectedCurrency)
    const [loadingStatus,setLoadingStatus] = useState(true);

     let {loading, error, data} = allQuery.getProducts(defaultCurrency);
     if (error) alert("Error occured fetching data");

    const dispatchNow = ()=>{
              dispatch(AllActions.productActions.setProducts(data.products));
              let products = data.products;
              let oldCurrency = selectedCurrency;
              let currency = defaultCurrency;
              dispatch(AllActions.cartActions.updateCurrency({currency,oldCurrency}));
    }

    useEffect(()=>{
        if(loading != null && loading === false){
             dispatchNow();
        }
    },[data]);
    
    const updateCurrency = (e)=>{
       const {value}  = e.target;
       setSelectedCurrency(value);
    }


    return (
            <div className="">
                    <div className="cart-overlay">
                                <div className="row">
                                        <div className="col-md-7 faded-background big-screen" >
                                              
                                        </div>
                                        <div className="col-md-5 cart-content">
                                            <div className="">
                                                <div className="top-header text-center py-3 ">
                                                    <a className="close-button pull-left pointer" onClick={()=>{
                                                        closeCart()
                                                    }}>
                                                         <span>  <i className="fa fa-angle-right"></i> </span>
                                                    </a>
                                                    <span>YOUR CART</span>
                                                </div>
                                                <div className="currrency">
                                                    <select onChange={(e)=>{
                                                        updateCurrency(e);
                                                    }}  defaultValue={selectedCurrency} className="form-control">
                                                        {
                                                            currency.map((item,index)=>(
                                                                <option  key={index} >{item}</option>
                                                            ))
                                                        }
                                                       
                                                    </select>
                                                </div>

                                            { cartItems.length == 0 ? 
                                            <p className="text-center my-5 no-cart-item"> There are no items in your cart.</p>
                                            : 
                                                    <div>
                                                    <div className="cart-list-container">
                                                                <div className="cart-list my-3" >
                                                                        {

                                                                            sortedCartItems.map((item,index)=>(
                                                                            
                                                                                        <CartItemList cart={item}  key={index} />
                                                                            
                                                                            ))
                                                                        }

                                                        </div>
                                                    </div>

                                                        
                                                        <div className="sub-total">
                                                            <div className="sub-total-content">
                                                                <div className="d-flex justify-content-between  py-3">
                                                                        <div>
                                                                        <span className="item-name"> Subtotal</span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="bolder total-price">{selectedCurrency} {formatCurrency(totalCartPrice)}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <a className="checkout-button pointer">PROCEED TO CHECKOUT</a>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                            }

                                                
                                            </div>
                                        </div>
                                 </div>
                        </div>
             </div>
    )
}