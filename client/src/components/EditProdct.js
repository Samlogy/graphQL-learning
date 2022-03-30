import { useMutation } from "@apollo/client";
import { EDIT_PRODUCT } from "../services";

export const EditProdct = () => {
  const productId = "53a0724c-a416-4cac-ae45-bfaedce1f147";
  const product = {
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    quantity: 230,
    price: 42.44,
    image: "img-1",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
  };

  const [edit, { data, loading, error }] = useMutation(EDIT_PRODUCT, {
    variables: {
      input: product,
      updateProductId: productId
    }
  });

  if (loading)
    return <p> Loading... </p>;
  if (error)
    return <p>An error occurred</p>;

  console.log({ data, loading, error });
  return (
    <div style={{ padding: ".5rem", margin: ".5rem", border: "1px solid", borderRadius: "5px", maxWidth: "fit-content" }}>
      <form>here</form>
      <button onClick={() => edit()}> Edit </button>
    </div>
  );
};
