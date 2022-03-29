const filterQuery = (filter, data) => {
  let filteredProducts = data

  if (filter) {
    if (filter.onSale) {
      filteredProducts = filteredProducts.filter((product) => product.onSale)
    }
  } else {
    filteredProducts = context.products
  }

  return filteredProducts
}

exports.Query = {
  hello: () => {
    return "scalar type";
  },
  products: (parent, args, context) => {
    const { onSale, avgRating } = args.filter
    return filterQuery(args.filter, context.products)
  },
  product: (parent, args, context) => {
    const { id: productId } = args;
    return context.products.find((product) => product.id === productId);
  },

  categories: (parent, args, context) => {
    return context.categories;
  },
  category: (parent, args, context) => {
    const { id: categoryId } = args;
    return context.categories.find((category) => category.id === categoryId);
  },
};
