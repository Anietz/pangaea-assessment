import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults is localStorage

import reducer from './reducers';

let initialState = {
    products: [],
    cartItems:[],
    currencies:[],
    selectedCurrency:"NGN",
    totalCartPrice:0
}

export default function storeData(){
    
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
    persistedReducer,
    initialState,
);
const persistor = persistStore(store);

    return {storeInfo:store,persistInfo:persistor};
};
