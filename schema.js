const { gql } = require("apollo-server");

// schema (data type)
const typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilter): [Product!]!
    product(id: ID!): Product
    

    category(id: ID!): Category
    categories: [Category!]!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!

    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput!): Product
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
    reviews: [Review!]
    review(id: ID!): Review!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
  }

  input ProductsFilter {
    onSale: Boolean
  }
  input AddCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
  }
  input UpdateCategoryInput {
    name: String!
  }
  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
  }
`;

module.exports = { typeDefs };
