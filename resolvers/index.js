const { products, reviews, categories } = require("../data")
const { Product} = require('./Product')
const {Query} = require('./Query')
const {Category} = require('./Category')

// what our funciton will return
const resolvers = {
  Query,
  Category,
  Product
};

module.exports = { resolvers };
