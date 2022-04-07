// const { ApolloServer } = require("apollo-server");
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { graphqlUploadExpress } = require('graphql-upload');

const { typeDefs } = require("./schema");
const { resolvers} = require("./resolvers");
const { products, reviews, categories } = require("./data");


// const { typeDefs2 } = require("./schema");
// const { resolvers2 } = require("./resolvers");
// const db = require('./db')


// categories --> category(id) --> products --> product(id) -> reviews -> reviews(id)
// mutation --> add - delete - update (category - product)

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: {
//     products: products,
//     reviews: reviews,
//     categories: categories
//   }
// });


// Admin (get products - add - edit - delete - disable product - search / sort products - pagination products)
// const server = new ApolloServer({
//   typeDefs: typeDefs2,
//   resolvers: resolvers2,
//   context: db
// });

// server.listen().then(({ url }) => {
//   console.log("Server is up at " + url);
// });


async function startServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: {
      products: products,
      reviews: reviews,
      categories: categories
    }
  });

  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  await new Promise(r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer(typeDefs, resolvers)