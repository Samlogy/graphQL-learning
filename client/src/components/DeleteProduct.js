import { useMutation } from "@apollo/client";

import { DELETE_PRODUCT, GET_ALL_PRODUCTS } from "../services";

export const DeleteProduct = () => {
  const productId = "53a0724c-a416-4cac-ae45-bfaedce1f147";

  const [remove, { data, loading, error }] = useMutation(DELETE_PRODUCT, {
    variables: {
      deleteProductId: productId,
    },
    onCompleted: () => console.log("some action when mutation completed"),
    // refetchQueries: [{ query: GET_ALL_PRODUCTS }], // recall api to see delete changes on products
    update(cache, { data: { remove } }) {
      const { products } = cache.readQuery({ query: GET_ALL_PRODUCTS });
      cache.writeQuery({
        query: GET_ALL_PRODUCTS,
        data: {
          products: products.filter((product) => product.id !== remove.id),
        },
      });
    },
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>An error occurred</p>;

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
      <button onClick={() => remove()}> Delete </button>
    </div>
  );
};
