import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import DisplayData from "./DisplayData";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;



