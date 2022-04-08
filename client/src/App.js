import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

import { CreateProduct } from "./components/CreateProduct";
import { DeleteProduct } from "./components/DeleteProduct";
import { EditProdct } from "./components/EditProdct";
import { Product } from "./components/Product";
import { Products } from "./components/Products";
import { UploadFile } from "./components/UploadFile";

const graphql_uri = "http://localhost:4000/graphql"

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // uri: graphql_uri,
    link: createUploadLink({
      uri: graphql_uri,
    }),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <h2> Products </h2>
        <Products />

        <h2> Product </h2>
        <Product />

        <h2> Create Product </h2>
        <CreateProduct />

        <h2> Edit Product </h2>
        <EditProdct />

        <h2> Delete Product </h2>
        <DeleteProduct /> */}

        <h2> Upload Product </h2>
        <UploadFile />
      </div>
    </ApolloProvider>
  );
}

export default App;


