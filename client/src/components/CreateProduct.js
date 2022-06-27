import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../services";

export const CreateProduct = () => {
  const newProduct = {
    name: "Bob",
    description: "pc desc ...",
    image: "image ...",
    quantity: 10,
    onSale: true,
    price: 1000,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  };

  const [create, { data, loading, error, reset }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        input: newProduct,
      },
    }
  );

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
      <button onClick={() => create()}> Create </button>
      <button onClick={() => reset()}> Reset </button>
    </div>
  );
};
