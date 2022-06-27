import { useQuery, NetworkStatus, useLazyQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../services";

export const Products = () => {
  // const { data, loading, error, refetch, networkStatus } = useQuery(GET_ALL_PRODUCTS,{
  //   notifyOnNetworkStatusChange: true,
  // });
  // lzaty loading
  const [getProducts, { data, loading, error }] = useLazyQuery(
    GET_ALL_PRODUCTS,
    {
      pollInterval: 6000, // refetch each 1min
      fetchPolicy: "network-only", // Doesn't check cache before making a network request
      nextFetchPolicy: "cache-first", // Used for subsequent executions
      onCompleted: (data) => console.log("success: ", data), // execute when request is completed
      onError: (data) => console.log("error: ", data), // execute when request fails
      startPolling: (interval) => console.log("polling: ", interval),
    }
  );

  // refetch: can be provided with a variable

  // if (networkStatus === NetworkStatus.refetch) return <p> Refetching </p>
  if (loading) return <p> Loading... </p>;
  if (error) return <p>ERROR</p>;

  // console.log({ data, loading, error });
  return (
    <>
      {!loading &&
        !error &&
        data?.products.map(({ id, name, onSale, categoryId, price }) => (
          <div
            style={{
              padding: ".5rem",
              margin: ".5rem",
              border: "1px solid",
              borderRadius: "5px",
              maxWidth: "fit-content",
            }}
            key={id}
          >
            <div> {id} </div>
            <div> {name} </div>
            <div> {onSale} </div>
            <div> {price} </div>
            <div> {categoryId} </div>
          </div>
        ))}
      {/* <button onClick={() => refetch()}> refetch products </button> */}
      <button onClick={() => getProducts()}>get products</button>
    </>
  );
};
