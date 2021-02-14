
import ErrorPage from '../error';
import Loader from '../loader';
import {useDispatch,useSelector} from 'react-redux';
import AllActions from '../../store/actions';
import CartItem from  '../cart-item';


export default function CartItemData({loading,error,data}){

        const selectedCurrency = useSelector(state=>state.selectedCurrency);
        const dispatch = useDispatch();

        if (loading) return null;
        if (error) return null;
        
     
        dispatch(AllActions.productActions.setCurrencies(data.currency));

    return (
              <CartItem selectedCurrency={selectedCurrency} currency={data.currency} />       
        )
}