
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'font-awesome/css/font-awesome.css';

import client from './../services/graphql/client';
import { ApolloProvider } from 'react-apollo';
import storeData from './../store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'



function MyApp({ Component, pageProps }) {

const store = storeData();

 return (
       <Provider store={store.storeInfo}>
           <PersistGate loading={null} persistor={store.persistInfo}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>  
           </PersistGate>
        </Provider>  
      )    
}

export default MyApp
