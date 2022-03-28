
exports.Query = {
  hello: () => {
    return "scalar type";
  },
  products: (parent, args, context) => {
    let filteredProducts = context.products
    const filter = args.filter

    // console.log(filter)

    if (filter && filter.onSale) {
      filteredProducts = filteredProducts.filter(product => {
        return product.onSale
      })
    } else if (filter && !filter.onSale) {
      filteredProducts = filteredProducts.filter(product =>  !product.onSale)
    } else if (filter) filteredProducts = context.products
    
    return filteredProducts
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
