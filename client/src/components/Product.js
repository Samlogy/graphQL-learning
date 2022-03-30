import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "./services";

export const Product = () => {
  const id = "2c931e7e-510f-49e5-aed6-d6b44087e5a1";

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  if (loading)
    return <p> Loading... </p>;
  if (error)
    return <p>ERROR</p>;
  if (!data)
    return <p>Not found</p>;

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
