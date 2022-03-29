import { ApolloClient, ApolloProvider, InMemoryCache, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "./services";

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
        <Product id="2c931e7e-510f-49e5-aed6-d6b44087e5a1" />
      </div>
    </ApolloProvider>
  );
}

export default App;

const Products = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  // console.log({ data, loading, error });

  return (
    data.products &&
    data.products.map(({ id, name, onSale, categoryId, price }) => (
      <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: 'fit-content' }} key={id}>
        <div> {id} </div>
        <div> {name} </div>
        <div> {onSale} </div>
        <div> {price} </div>
        <div> {categoryId} </div>
      </div>
    ))
  );
};

const Product = ({ id }) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  console.log({ data, loading, error });

  return (

      <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: 'fit-content' }} >
        <div> {data.id} </div>
        {/* <div> {name} </div>
        <div> {onSale} </div>
        <div> {price} </div>
        <div> {categoryId} </div> */}
      </div>
  );
};

