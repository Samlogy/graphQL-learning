const { GraphQLUpload } = require('graphql-upload');

const { Product } = require("./Product");
const { Query } = require("./Query");
const { Category } = require("./Category");
const { Mutation } = require("./Mutation");


// what our funciton will return
const resolvers = {
  Upload: GraphQLUpload,
  Query,
  Mutation,
  Category,
  Product,
};
// const { v4: uuid } = require("uuid");

// const Query = {
//   products: (parent, args, context) => {
//     return context.products
//   },
// }
// const Mutation = {
//   addProduct: (parent, args, context) => {
//     let newProduct = args.input;
//     const { products } = context;

//     newProduct = {
//       id: uuid(),
//       ...newProduct,
//     };

//     products.push(newProduct);
//     return newProduct;
//   },
//   updateProduct: (parent, args, context) => {
//     const { id: productId, input } = args;
//     const { products } = context;

//     const index = products.findIndex((product) => product.id === productId);
//     if (index === -1) return null;
//     products[index] = {
//       ...products[index],
//       ...input,
//     };
//     return products[index];
//   },
//   deleteProduct: (parent, args, context) => {
//     const { id: productId } = args;
//     const { products, reviews } = context;

//     const newProducts = products.filter((product) => product.id !== productId);
//     const newReviews = products.filter((review) => review.productId !== productId);

//     return true;
//   },
//   disableProduct: (parent, args, context) => {
//     const { id: productId } = args;
//     const { products, reviews } = context;

//     const newProducts = products.filter((product) => product.id !== productId);
//     const newReviews = products.filter((review) => review.productId !== productId);

//     return true;
//   },
// }
// const resolvers2 = {
//   Query,
//   Mutation
// };

module.exports = {resolvers};
