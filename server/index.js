const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { products, reviews, categories } = require("./data");

// categories --> category(id) --> products --> product(id) -> reviews -> reviews(id)

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
