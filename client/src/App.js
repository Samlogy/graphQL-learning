import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CreateProduct } from "./components/CreateProduct";
import { DeleteProduct } from "./components/DeleteProduct";
import { EditProdct } from "./components/EditProdct";
import { Product } from "./components/Product";
import { Products } from "./components/Products";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2> Products </h2>
        <Products />

        <h2> Product </h2>
        <Product />

        <h2> Create Product </h2>
        <CreateProduct />

        <h2> Edit Product </h2>
        <EditProdct />

        <h2> Delete Product </h2>
        <DeleteProduct />
      </div>
    </ApolloProvider>
  );
}

export default App;

