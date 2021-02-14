import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';


function getProductAndCurrencyData(currency){

const dataQuery =  gql`
      query  {
          products{
            id
            title
            image_url
            price(currency:${currency})
          }
        currency
      }
    `;

const { loading, error, data,networkStatus } = useQuery(dataQuery, {
    variables: { currency },
     notifyOnNetworkStatusChange: true,
  });


return {loading, error, data,networkStatus };
  
}



function getProducts(currency){

const dataQuery =  gql`
      query  {
          products{
            id
            title
            image_url
            price(currency:${currency})
          }
      }
    `;

const { loading, error, data,networkStatus } = useQuery(dataQuery, {
    variables: { currency },
     notifyOnNetworkStatusChange: true,
  });

return {loading, error, data,networkStatus };
  
}

const allQuery = {getProductAndCurrencyData,getProducts}

export default allQuery;