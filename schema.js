const { ApolloServer, gql } = require("apollo-server");

// schema (data type)
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    category(id: ID!): Category
    categories: [Category!]!
    reviews: [Review!]!
    # review(id: ID!): Review
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
  }
`;

module.exports = { typeDefs };
