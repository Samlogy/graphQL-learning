import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, useMutation } from "@apollo/client";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, CREATE_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./services";

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

const Products = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  // console.log({ data, loading, error });

  return (
    data.products &&
    data.products.map(({ id, name, onSale, categoryId, price }) => (
      <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: "fit-content" }} key={id}>
        <div> {id} </div>
        <div> {name} </div>
        <div> {onSale} </div>
        <div> {price} </div>
        <div> {categoryId} </div>
      </div>
    ))
  );
};

const Product = () => {
  const id ="2c931e7e-510f-49e5-aed6-d6b44087e5a1"

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  // console.log(data.product);

  return (
    <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: "fit-content" }}>
      <div> {data.product.id} </div>
      <div> {data.product.name} </div>
      <div> {data.product.onSale} </div>
      <div> {data.product.price} </div>
      <div> {data.product.categoryId} </div>
    </div>
  );
};

const CreateProduct = () => {
  const newProduct = {
    name: "PC",
    description: "pc desc ...",
    image: "image ...",
    quantity: 10,
    onSale: true,
    price: 1000,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
  }

  const [create, { data, loading, error }] = useMutation(CREATE_PRODUCT, {
    variables: {
      input: newProduct
    }
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>An error occurred</p>;

  console.log({ data, loading, error });

  return (
    <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: "fit-content" }}>
      <form>here</form>
      <button onClick={() => create()}> Create </button>
    </div>
  );
};

const EditProdct = () => {
  const productId = "53a0724c-a416-4cac-ae45-bfaedce1f147"
  const product = {
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    quantity: 230,
    price: 42.44,
    image: "img-1",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
  }

  const [edit, { data, loading, error }] = useMutation(EDIT_PRODUCT, {
    variables: {
      input: product,
      updateProductId: productId
    }
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>An error occurred</p>;

  // console.log({ data, loading, error });

  return (
    <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: "fit-content" }}>
      <form>here</form>
      <button onClick={() => edit()}> Edit </button>
    </div>
  );
};

const DeleteProduct = () => {
  const productId = "53a0724c-a416-4cac-ae45-bfaedce1f147"

  const [remove, { data, loading, error }] = useMutation(DELETE_PRODUCT, {
    variables: {
      deleteProductId: productId
    }
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>An error occurred</p>;

  console.log({ data, loading, error });

  return (
    <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: "fit-content" }}>
      <form>here</form>
      <button onClick={() => remove()}> Delete </button>
    </div>
  );
};