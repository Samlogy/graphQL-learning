import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { CreateProduct } from "./components/CreateProduct";
import { DeleteProduct } from "./components/DeleteProduct";
import { EditProdct } from "./components/EditProdct";
import { Product } from "./components/Product";
import { Products } from "./components/Products";
import { UploadFile } from "./components/UploadFile";
import { Pagination } from "./components/Pagination";
import { LoadMore } from "./components/LoadMore";

const graphql_uri = "http://localhost:4000/graphql";
const pagination_uri = "https://rickandmortyapi.com/graphql";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // specify all the fields inside ex: proudcts
        products: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  // uri: graphql_uri,
  link: createUploadLink({
    uri: graphql_uri,
  }),
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2> Products </h2>
        <Products />

        <h2> Create Product </h2>
        <CreateProduct />

        <h2> Delete Product </h2>
        <DeleteProduct />

        <h2> Edit Product </h2>
        <EditProdct />

        {/* 
        <h2> Product </h2>
        <Product />

        

       
        */}

        {/* <h2> Upload </h2>
        <UploadFile /> */}

        {/* <h2> Pagination </h2>
        <Pagination /> */}

        {/* <h2> Load More </h2>
        <LoadMore /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
