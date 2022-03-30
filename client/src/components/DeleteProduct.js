import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "./services";

export const DeleteProduct = () => {
  const productId = "53a0724c-a416-4cac-ae45-bfaedce1f147";

  const [remove, { data, loading, error }] = useMutation(DELETE_PRODUCT, {
    variables: {
      deleteProductId: productId
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
      <button onClick={() => remove()}> Delete </button>
    </div>
  );
};
