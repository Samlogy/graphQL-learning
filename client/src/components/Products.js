import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../services";

export const Products = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  if (loading)
    return <p> Loading... </p>;
  if (error)
    return <p>ERROR</p>;
  if (!data)
    return <p>Not found</p>;

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
