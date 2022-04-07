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
  scalar Upload
  type File {
    # filename: String!
    # mimetype: String!
    # encoding: String!
    url: String!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!

    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput!): Product

    singleUpload(file: Upload!): File!
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

// const typeDefs2 = gql`
//   type Query {
//     products: [Product!]
//   }

//   type Mutation {
//     addProduct(input: ProductInput!): Product!
//     updateProduct(id: ID!, input: ProductInput!): Product!
//     deleteProduct(id: ID!): Boolean!
//     disableProduct(id: ID!): Boolean!
//   }

//   type Product {
//     id: ID!
//     name: String!
//     description: String!
//     quantity: Int!
//     price: Float!
//     image: String!
//     discount: Float
//     rate: Float!
//     createdAt: String!
//     editedAt: String 
//     userId: String!
//     categoryId: String!
//   }

//   input ProductInput {
//     name: String!
//     description: String!
//     quantity: Int!
//     price: Float!
//     image: String!
//     discount: Float
//     rate: Float!
//     reviews: Int!
//     createdAt: String!
//     editedAt: String 
//     userId: String!
//     categoryId: String!
//   }
// `;

module.exports = {typeDefs};
