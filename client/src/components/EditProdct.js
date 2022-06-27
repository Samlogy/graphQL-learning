import { useMutation } from "@apollo/client";
import { EDIT_PRODUCT, GET_ALL_PRODUCTS } from "../services";

export const EditProdct = () => {
  const productId = "2aa56b9a-b1c5-474a-8934-6318f7b42826";
  const product = {
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    quantity: 230,
    price: 42.44,
    image: "img-1",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  };

  const [edit, { data, loading, error }] = useMutation(EDIT_PRODUCT, {
    variables: {
      input: product,
      updateProductId: productId,
    },
    update(cache, { data: { edit } }) {
      const { products } = cache.readQuery({ query: GET_ALL_PRODUCTS });
      cache.writeQuery({
        query: GET_ALL_PRODUCTS,
        data: { products: [...products, edit] },
      });
    },
  });

  if (loading) return <p> Loading... </p>;

  console.log({ data, loading, error });
  return (
    <div
      style={{
        padding: ".5rem",
        margin: ".5rem",
        border: "1px solid",
        borderRadius: "5px",
        maxWidth: "fit-content",
      }}
    >
      <form>here</form>
      <button onClick={() => edit()}> Edit </button>
    </div>
  );
};
