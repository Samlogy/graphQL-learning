const { ApolloServer, gql } = require("apollo-server");

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { products, reviews, categories } = require("./data");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products: products,
    reviews: reviews,
    categories: categories
  }
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
