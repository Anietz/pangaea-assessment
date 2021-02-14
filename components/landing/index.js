import Filter from '../filter';
import Nav from  '../nav';
import ProductListData from '../product-list-data';
import CartItemData from  '../cart-item-data';
import {useSelector} from 'react-redux';
import allQuery from '../../services/graphql/query/get-products';


export default function Landing(){
 const selectedCurrency = useSelector(state=>state.selectedCurrency);
 let {loading, error, data } = allQuery.getProductAndCurrencyData(selectedCurrency);
 
return (
        <div className="body">
            <CartItemData loading={loading} error={error}  data={data} />
            <Nav />
            <Filter />
            <ProductListData loading={loading} error={error}  data={data} />
        </div>
    )
}