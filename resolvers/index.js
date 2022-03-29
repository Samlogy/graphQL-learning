const { Product } = require("./Product");
const { Query } = require("./Query");
const { Category } = require("./Category");
const { Mutation } = require("./Mutation");

// what our funciton will return
const resolvers = {
  Query,
  Mutation,
  Category,
  Product,
};

module.exports = { resolvers };
