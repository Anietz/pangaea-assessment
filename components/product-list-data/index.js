
import ErrorPage from '../error';
import ProductList from '../product-list';
import Loader from '../loader';
import {useDispatch,useSelector} from 'react-redux';
import AllActions from '../../store/actions';


export default function ProductListData({loading,error,data}){
        const selectedCurrency = useSelector(state=>state.selectedCurrency);
        const dispatch = useDispatch();

        if (loading) return <Loader />;
        if (error) return <ErrorPage /> ;
        
        dispatch(AllActions.productActions.setProducts(data.products));

    return (
              <ProductList selectedCurrency={selectedCurrency} list={data.products} />       
     )
}